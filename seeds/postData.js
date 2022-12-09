const { Post } = require('../models');

const postdata =[
    {
      "title": "On Display",
      "postbody": "I Love Artwork!",
      "user_id": 1,
      
    },
    {
      "title": "TBD",
      "postbody": "I have a secret love!",
      "user_id": 2,
      
    },
    {
      "title": "Did you say gatsby?",
      "postbody": "I Love to Party everynight!",
      "user_id": 3,
      
    },
  ]
  
  const seedPost = () => Post.bulkCreate(postdata);

  module.exports = seedPost;
