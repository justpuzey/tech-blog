const { Post } = require('../models');

const postdata = [
  {
    title: 'Fake Title #1',
    content: 'This is the content for Fake Post #1',
    user_id: 1
  },
  {
    title: 'Fake Title #2',
    content: 'This is the content for Fake Post #2',
    user_id: 2
  },
  {
    title: 'Fake Title #3',
    content: 'This is the content for Fake Post #2',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;