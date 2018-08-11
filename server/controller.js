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
  newPost: (req, res) => {
    const dbInstance = req.app.get("db");
    const {
      title,
      category,
      description,
      servings,
      cost,
      image,
      id
    } = req.body;
    console.log(req.body, "req body");

    dbInstance
      .new_post([title, category, description, servings, cost, image, id])
      .then(() => res.sendStatus(200, "All good!"))
      .catch(err => {
        res.status(500).send({ errorMessage: "Server Error!" });
        console.log(err);
      });
  },
  deletePost: (req, res, next) => {
    const dbInstance = req.app.get("db");

    if (req.user == null) {
      return res.sendStatus(401);
    }
    dbInstance.delete_post([req.user.id, req.params.id]).then(deleteRes => {
      if (deleteRes.length === 0) {
        return res.sendStatus(401);
      }
      next();
    });
  },

  //postFav
  //select * from favorites where id===user_id then select * from left_posts where food_id === id
  newFav: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .post_fav([req.user.id, req.params.id])
      .then(() => res.sendStatus(200, "All good!"))
      .catch(err => {
        res.status(500).send({ errorMessage: "Server Error!" });
        console.log(err);
      });
  }
};
