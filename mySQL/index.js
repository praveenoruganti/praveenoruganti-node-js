var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "praveendb",
});

connection.connect(function (err) {
  if (err) {
    console.error("An error occurred while connecting to the DB");
    throw err;
  }
  console.log("Connected!");
});

/*
CREATE TABLE user_dtls (user_id BIGINT(15) AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255),
PRIMARY KEY(user_id))
*/

connection.query(
  "INSERT INTO user_dtls (name, address) VALUES ('Praveen Oruganti', 'Chennai,India')",
  (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the query");
      throw error;
    }
    console.log(result.affectedRows + " record(s) inserted");
  }
);

connection.query("SELECT * FROM user_dtls", (error, result, fields) => {
  if (error) {
    console.error("An error occurred while executing the query");
    throw error;
  }
  console.log(JSON.stringify(result));
});

connection.query("UPDATE user_dtls SET address = 'Hyderabad,India' WHERE address = 'Chennai,India'", (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the query");
      throw error;
    }
    console.log(result.affectedRows + " record(s) updated");
  });

  connection.query("SELECT * FROM user_dtls", (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the query");
      throw error;
    }
    console.log(JSON.stringify(result));
  });

connection.query("DELETE FROM user_dtls WHERE address = 'Hyderabad,India'", (error, result, fields) => {
    if (error) {
      console.error("An error occurred while executing the query");
      throw error;
    }
    console.log(result.affectedRows + " record(s) deleted");
  });