const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({
            title,
            content
        });
        res.status(201).json(post);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content
            },
            { new: true }
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }
        res.json(post);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};


exports.likePost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        post.likes += 1;

        await post.save();

        res.json(post);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};


exports.deletePost = async (req, res) => {

    try {

        const post = await Post.findByIdAndDelete(
            req.params.id
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.json({
            message: "Post deleted"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};