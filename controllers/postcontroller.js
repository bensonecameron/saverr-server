const router = require("express").Router();
const Post = require("../db").import("../models/post");
const validateSession = require("../middleware/validate-session");
const collectionTag = require("../middleware/collection-info");

//! PRACTICE ROUTE
router.get("/practice", function (req, res) {
  res.send("Hey!! This is a practice route!");
});

//! GET ALL Post
router.get("/", validateSession, collectionTag, (req, res) => {
  Post.findAll()
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

//! GET Post By User
router.get("/postuser", validateSession, (req, res) => {
  Post.findAll({
    where: {
      userId: req.user.id,
    },
    include: "user",
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

//! GET Post By Collection
router.get("/postcollection", validateSession, (req, res) => {
  Post.findAll({
    where: {
      collectionId: req.user.id,
    },
    include: "collection",
  })
    .then(function createSuccess(data) {
      res.status(200).json({
        message: "Post Collection Info Found",
        data: data,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//! Create Post
router.post("/new", validateSession, collectionTag, (req, res) => {
  const newPost = {
    titleOfPost: req.body.titleOfPost,
    descriptionOfPost: req.body.descriptionOfPost,
    url: req.body.url,
    imgOfPost: req.body.imgOfPost,
    tagsOfPost: req.body.tagsOfPost,
    impPost: req.body.impPost,
    userId: req.user.id,
    collectionId: req.body.collectionId,
  };

  Post.create(newPost)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

//! GET by Name
router.get("/:name", validateSession, (req, res) => {
  Post.findOne({ where: { titleOfPost: req.params.name } })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

//! UPDATE by ID
router.put("/:id", validateSession, (req, res) => {
  Post.update(req.body, { where: { id: req.params.id } })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

//! DELETE
router.delete("/:id", validateSession, (req, res) => {
  Post.destroy({
    where: { id: req.params.id },
  })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
