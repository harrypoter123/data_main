const express = require('express');
const Twitter = require('twitter');
const cors = require('cors'); 

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Define your Twitter API credentials
const client = new Twitter({
    consumer_key: 'JCBSUGwSpYBJZJ6GmsY2tnx8V',
    consumer_secret: 'Z2YFT9QMGGAMI5TNUof3bE8aBG36FYs3mL8wppDzVQAmgMUIrF',
    access_token_key: '1711230530438742016-S8MUnZnQsyuhCi3jwCZpG0k5wT5xhg',
    access_token_secret: 'WfOZF0iGhbFh6uvB4u46LvNRbbGvRlIOG58ubsXaMfj3S', 
});

// Serve your main.html file when accessing the root path
app.get('/', (req, res) => {
  res.sendFile('public/main.html', { root: __dirname });
});

// Handle POST requests to post tweets to Twitter
app.post('/post-to-twitter', (req, res) => {
  const tweetText = req.body.tweetText;
  
  // Post the tweet to Twitter
  client.post('statuses/update', { status: tweetText }, (error, tweet, response) => {
    if (!error) {
      res.send('Successfully posted to Twitter!');
    } else {
      console.error('Twitter API Error:', error);
      res.status(400).json({ error: 'Failed to post to Twitter' });
    }
  });
});

// Start the server on port 8000
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
