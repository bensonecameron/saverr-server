const jwt = require("jsonwebtoken");
const Post = require("../db").import("../models/post");

const PostTag = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  } else {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (!err && decoded) {
        Post.findOne(
          {
            where: {
              id: decoded.id,
            },
          },
          console.log(decoded)
        )
          .then((post) => {
            if (!post) throw "err";
            req.post = post;
            return next();
          })
          .catch((err) => next(err));
      } else {
        req.errors = err;
        return res.status(500).send("Not Authorized");
      }
    });
  }
};

module.exports = PostTag;
