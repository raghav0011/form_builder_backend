module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })
    return User;
}