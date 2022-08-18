const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }) //userid?
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  updateThought(req, res) {
    thought
      .findOneAndUpdate(
        { _id: req.params.thoughtId }, //userid?
        { $set: req.body },
        { runValidators: true, new: true }
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId }) //userid?
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : User.deleteMany({ _id: { $in: thought.reactions } })
      )
      .then(() => res.json({ message: "Thought and reactions deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  createReaction(req, res) {
    //update thought?
  },
  pullReaction(req, res) {
    //update thought?
  },
};