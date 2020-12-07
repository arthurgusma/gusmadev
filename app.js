require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');


const app = express();

mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.1865l.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({ title: String, content: String, image: Buffer });
const Post = mongoose.model('Post', postSchema);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static("public"));

app.route('/')
  .get((req, res) => {
    Post.find({}, (err, posts) => {
      if (!err) {
        res.render('index', { posts: posts });
      } else {
        console.log(err);
      }
    });

  });

app.route('/posts')
  .get((req, res) => {
    Post.find({}, (err, posts) => {
      if (!err) {
        res.render('posts', { posts: posts });
      } else {
        console.log(err)
      }
    });

  })
  .post((req, res) => {
    const searchTopic = req.body.topic;
    Post.find(
      {
        $or: [{ title: { $regex: _.lowerCase(searchTopic) } },
        { content: { $regex: _.lowerCase(searchTopic) } },
        { title: { $regex: _.upperFirst(searchTopic) } },
        { content: { $regex: _.upperFirst(searchTopic) } }]
      },
      (err, posts) => {
        if (!err) {
          res.render('posts', { posts: posts });
        } else {
          console.log(err)
        }
      })
  });

app.get('/read/:id', (req, res) => {
  const id = req.params.id;
  Post.findOne({ title: id }, (err, post) => {
    if (!err) {
      res.render('post', { title: post.title, body: post.content });
    } else {
      console.log(err);
      res.redirect('/')
    }
  })


});

app.route('/login')
  .get((req, res) => {
    res.render('login');
  });

app.route('/adm')
  .get((req, res) => {
    res.render('adm');
  });

app.route('/user')
  .get((req, res) => {
    Post.addOne({ title: req.body, content: req.body, image: req.body });
  })




app.listen(3000 || process.env.PORT, () => {
  console.log('Server is running.');
});