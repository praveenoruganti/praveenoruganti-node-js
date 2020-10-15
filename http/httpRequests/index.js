const https = require("https");

const getOptions = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/posts/1",
  method: "GET",
};
const getRequest = https.request(getOptions, (res) => {
  console.log("GET Operation");
  console.log(`statusCode: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});
getRequest.on("error", (error) => {
  console.error(error);
});
getRequest.end();

const data = JSON.stringify({
  title: "Praveen",
  body: "Oruganti",
  userId: 1000,
});
const postOptions = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/posts",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const postReq = https.request(postOptions, (res) => {
  console.log("\n");
  console.log("POST Operation");
  console.log(`statusCode: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});
postReq.on("error", (error) => {
  console.error(error);
});
postReq.write(data);
postReq.end();

const putData = JSON.stringify({
  id: 1,
  title: "Praveen",
  body: "Oruganti",
  userId: 1000,
});
const putOptions = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/posts/1",
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": putData.length,
  },
};

const putReq = https.request(putOptions, (res) => {
  console.log("\n");
  console.log("PUT Operation");
  console.log(`statusCode: ${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});
putReq.on("error", (error) => {
  console.error(error);
});
putReq.write(putData);
putReq.end();

const delOptions = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/posts/1",
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const delReq = https.request(delOptions, (res) => {
  console.log("\n");
  console.log("DELETE Operation");
  console.log(`statusCode: ${res.statusCode}`);
});
delReq.on("error", (error) => {
  console.error(error);
});
delReq.end();