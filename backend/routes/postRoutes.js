const router = require("express").Router();
const auth = require("./../middleware/auth")

const { createPost, updatePost, likePost, deletePost } = require("./../controllers/postController")

router.post("/", auth, createPost)
router.put("/:id", auth, updatePost)
route.patch("/:id/like", auth, likePost)
route.delete("/:id", auth, deletePost)

module.exports = router;


