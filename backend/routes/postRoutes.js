const router = require("express").Router();
const auth = require("./../middleware/auth")

const { createPost, updatePost, likePost, deletePost, getPosts } = require("./../controllers/postController")

router.post("/", auth, createPost)
router.put("/:id", auth, updatePost)
router.patch("/:id/like", auth, likePost)
router.delete("/:id", auth, deletePost)
router.get("/", getPosts);

module.exports = router;