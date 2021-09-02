module.exports = (req, res, next) => {
  const { admin } = req.query;
  console.log(admin);

  if (!admin || admin != "banana") {
    res.redirect("/home");
  }
  next();
};
