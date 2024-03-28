const db = require("../models");
const Org = db.org;
const Form = db.form;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerOrg = async (req, res) => {
  try {
    const { org_name, email, password } = req.body;
    const orgVerify = await Org.findOne({ where: { email } });
    if (orgVerify) {
      return res.status(400).json({ message: "User Already Registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const org = await Org.create({
      org_name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User registered successfully", org });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const orgLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const org = await Org.findOne({ where: { email } });
    if (!org) {
      return res.status(400).json({ message: "User Not Found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, org.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ userId: org.id }, "12345678", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createForm = async (req, res) => {
  try {
    const { org_id, form_name, field_type, field_label, field_options, field_order } = req.body;

    //Checking if the org is authorized or not
    const org = await Org.findOne({ where: { org_id } });
    if (!org) {
      return res.status(404).json({ message: "Organization not found" });
    }

    const form = await Form.create({
      org_id,
      form_name,
    });

     return res
       .status(201)
       .json({ message: "Form created successfully", form});
  } catch (error) {
     console.error("Error logging in:", error);
     res.status(500).json({ message: "Server Error" });
  }
}

module.exports = { registerOrg, orgLogin, createForm };
