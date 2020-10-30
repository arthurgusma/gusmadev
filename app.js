require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

mongoose.connect('mongodb://localhost:27017/testBlog', { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = new mongoose.Schema({ title: String, content: String, image: Buffer });
const Post = mongoose.model('Post', postSchema);


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

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
      } else[
        console.log(err)
      ]
    })

  });


app.get('/post/:id', (req, res) => {
  const id = req.params.id;
  Post.findOne({ title: id }, (err, post) => {
    if (!err) {
      res.render('/post', { title: post.title, body: post.content });
    } else {
      console.log(err);
    }
  })


});

app.route('/login')
  .get((req, res) => {
    res.render('login');
  });

app.route('/adm')
  .get((req, res) => {
    res.render('/adm');
  });

app.route('/user')
  .get((req, res) => {
    Post.addOne({ title: req.body, content: req.body, image: req.body });
  })




app.listen(3000 || process.env.PORT, () => {
  console.log('Server is running.');
});