module.exports = {
  getAll: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_posts()
      .then(post => res.status(200).send(post))
      .catch(err => {
        res.status(500).send({ errorMessage: "get request error!" });
        console.log(err);
      });
  }
};
