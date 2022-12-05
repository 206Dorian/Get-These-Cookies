const { Post } = require('../models');

const postdata =[
    {
      "postbody": "I Love Artwork!",
      "user_id": 1,
      
    },
    {
      "postbody": "I have a secret love!",
      "user_id": 2,
      
    },
    {
      "postbody": "I Love to Party everynight!",
      "user_id": 3,
      
    },
  ]
  
  const seedPost = () => Post.bulkCreate(postdata);

  module.exports = seedPost;
