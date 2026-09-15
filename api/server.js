const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/") {
    res.end(JSON.stringify({
      status: "online",
      app: "SmartDoc Organizer",
      message: "Backend is running."
    }));
    return;
  }

  res.statusCode = 404;

  res.end(JSON.stringify({
    error: "Not found"
  }));
});

server.listen(PORT, () => {
  console.log(`SmartDoc backend running on port ${PORT}`);
});
