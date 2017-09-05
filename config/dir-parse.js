// https://code-maven.com/list-content-of-directory-with-nodejs
// https://github.com/jxson/front-matter <- consider for yaml front matter parsing
const cloneDeep = require('lodash');

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
    id = -1,
    attributes = {},
    title = '',
    description = '',
    tempTitle = '',
    urlTitle = '',
    re = /[\W]+/g;
    /**
     * cycle over items, filtering for files matching extension
     * @type {Array}
     */
    posts = items.filter(extension).map((item, i) => {
      file = pathSupplied + '/' + item;
      fileContent = fs.readFileSync(file, 'utf8');
      content = fm(fileContent);
      body = content.body;
      attributes = content.attributes;
      title = attributes.title;
      description = attributes.description;
      tempTitle = cloneDeep(attributes.title);
      content.attributes.urlTitle = tempTitle.replace(re, '-');
      content.attributes.id = i;
      return {
        post: content
      };
    });

  // opener += JSON.stringify(posts);
  // opener += closer;
  opener = JSON.stringify(posts);
  fs.writeFile(postsjson, opener);
});