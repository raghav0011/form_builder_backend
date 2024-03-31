const request = require("supertest");
const server = require("../server"); // Adjust the path if necessary

describe("registerOrg", () => {
     test("logs in an existing organization", async () => {
       const loginData = {
         "email": "test",
         "password": "test",
       };

       const response = await request(server).post("/org/login").send(loginData);

       expect(response.status).toBe(201);
     });
  test("registers a new User if user doesn't exist", async () => {
    const userData = {
      username: "test",
      email: "test",
      password: "test",
    };

    const existingUserResponse = await request(server).get(
      `/user/${userData.email}`
    );

    if (existingUserResponse.status === 400) {
      const response = await request(server)
        .post("/users/register")
        .send(userData);

      expect(response.status).toBe(201);
    } else {
      expect(existingUserResponse.status).toBe(404);
    }
  });
});
