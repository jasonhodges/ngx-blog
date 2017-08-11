// https://code-maven.com/list-content-of-directory-with-nodejs
var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile');
var postsjson = 'src/assets/_posts/posts.json';
var dir = 'src/assets/_posts';

// if (process.argv.length <= 2) {
//   console.log("Usage: " + __filename + " path/to/directory");
//   process.exit(-1);
// }
var extFilter = 'md';
// var pathSupplied = process.argv[2];
var pathSupplied = dir;

function extension(element) {
  var extName = path.extname(element);
  return extName === '.' + extFilter;
};

fs.readdir(pathSupplied, function(err, items) {
  var opener = '{ "posts": ';
  var closer = ' }';
  var posts = items.filter(extension).map((item) => {
    var file = pathSupplied + '/' + item;
    var obj = { title: file };
    return obj;
  })

  opener += JSON.stringify(posts);
  opener += closer;
  console.log("Posts: ", JSON.stringify(posts));
  fs.writeFile(postsjson, opener);
});