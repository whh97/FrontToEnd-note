function router(app) {
  app.get("/", function (req, res) {
    res.send("Hello world");
  });
  app.get("/customer", function (req, res) {
    res.send("customer page");
  });
  app.get("/admin", function (req, res) {
    res.send("admin page");
  });
}
module.exports = router;
