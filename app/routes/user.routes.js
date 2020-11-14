module.exports = app => {
  const users = require("../controllers/user.controller.js");

  // Create a new user
  app.post("/users", users.create);

  // Retrieve all users
  app.get("/users", users.findAll);

  // Retrieve a single user with username
  app.get("/users/:username", users.findOne);

  // Update a user with username
  app.put("/users/:username", users.update);

  // Delete a user with username
  app.delete("/users/:username", users.delete);

  // Create a new user
  app.delete("/users", users.deleteAll);
};
