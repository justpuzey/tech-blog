const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "seed comment number 1, this is my comment",
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: "seed comment number 2, this is my comment",
    user_id: 1,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;