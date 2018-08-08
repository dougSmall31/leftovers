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
  },
  //need to add user id
  newPost: (req, res) => {
    const dbInstance = req.app.get("db");
    const { title, category, description, servings, cost, image } = req.body;
    console.log(req.session, "req.session");

    dbInstance
      .new_post([title, category, description, servings, cost, image])
      .then(() => res.sendStatus(200, "All good!"))
      .catch(err => {
        res.status(500).send({ errorMessage: "Server Error!" });
        console.log(err);
      });
  }
};
