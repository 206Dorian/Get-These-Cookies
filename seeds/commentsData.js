const { Comment } = require('../models');

const commentdata =[
    {
      commentbody: "Who doesn't!",
      user_id: "1",
      post_id: 1
    },
    {
      commentbody: "Do Tell!",
      user_id: 2,
      post_id: 1
    },
    {
      commentbody: "That isn't good for you...",
      user_id: 3,
      post_id: 1
    }
  ]
  
  const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;