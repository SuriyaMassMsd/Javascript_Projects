const server = require("http");
const data = require("./data/data.json");

server
  .createServer((req, res) => {
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(3000);
