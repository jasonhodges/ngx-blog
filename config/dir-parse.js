// https://code-maven.com/list-content-of-directory-with-nodejs
// https://github.com/jxson/front-matter <- consider for yaml front matter parsing
const fs = require('fs');
const fm = require('front-matter');
const path = require('path');
const jsonfile = require('jsonfile');
const postsjson = 'src/assets/_posts/posts.json';
const dir = 'src/assets/_posts';

const extFilter = 'md';
const pathSupplied = dir;

function extension(element) {
  const extName = path.extname(element);
  return extName === '.' + extFilter;
}

/**
 * cycle through directory for files
 */
fs.readdir(pathSupplied, function (err, items) {
  let opener = '{ "entries": ',
    closer = ' }',
    posts = [],
    file = '',
    fileContent = '',
    content = '',
    body = '',
    attributes = {},
    title = '',
    description = '';
    /**
     * cycle over items, filtering for files matching extension
     * @type {Array}
     */
    posts = items.filter(extension).map((item) => {
      file = pathSupplied + '/' + item;
      fileContent = fs.readFileSync(file, 'utf8');
      content = fm(fileContent);
      console.log('*** content ***\n', content);
      body = content.body;
      attributes = content.attributes;
      title = attributes.title;
      description = attributes.description;

      return {
        post: content
      };
      // return {
      //   file: file,
      //   title: title,
      //   description: description,
      //   body: body
      // };
    });

  opener += JSON.stringify(posts);
  opener += closer;
  fs.writeFile(postsjson, opener);
});