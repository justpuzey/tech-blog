const { Post } = require('../models');

const postdata = [
  {
    title: 'Post number 1, user#1',
    post_content: 'Seed post. This is the body of post 1',
    user_id: 1
  },
  {
    title: 'post number 2, user #1',
    post_content: 'Seed post. This is the body of post 2',
    user_id: 1
  }, {
    title: 'Post number 1, user #2',
    post_content: 'Seed post. This is the body of post 1',
    user_id: 2
  }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;