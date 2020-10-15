const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("GET Operation");
    console.log(`statusCode: ${response.status}`);
    console.log(response.data);
  })
  .catch((error) => console.error(error));

const postUrl = "https://jsonplaceholder.typicode.com/posts";

const postData = JSON.stringify({
  title: "Praveen",
  body: "Oruganti",
  userId: 1000,
});

const postHeaders = {
  "Content-Type": "application/json",
  "Content-Length": postData.length,
};

axios
  .post(postUrl, { method: "POST", headers: postHeaders, body: postData })
  .then((response) => {
    console.log("POST Operation");
    console.log(`statusCode: ${response.status}`);
    console.log(response.data.body);
  })
  .catch((error) => console.error(error));
