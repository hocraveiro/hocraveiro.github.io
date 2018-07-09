const fs = require('fs');
// const fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
require('es6-promise').polyfill();
require('isomorphic-fetch');
const BASE_MEDIUM_URL = 'https://medium.com/@craveiro';
const UNSPLASH_ACCESS_KEY = '069fb72cbdc668081d55664de65740737e93428ddaf43149ab5e5eb22657e641';

fetch(`${BASE_MEDIUM_URL}/latest`, {
  headers: { 'Accept': 'application/json' },
})
.then(res => res.text())
.then(data => {
  const response = JSON.parse(data.replace('])}while(1);</x>', ''));
  const posts = response.payload.references.Post

  const latestPosts = Object.keys(posts).map(post => {
    const latestPost = {
      title:  posts[post].title,
      subtitle: posts[post].virtuals.subtitle,
      id: posts[post].id, 
      date: new Date(posts[post].updatedAt),
      tags: posts[post].virtuals.tags.map(tag => tag.name), 
      uniqueSlug: `${BASE_MEDIUM_URL}/${posts[post].uniqueSlug}`
    };
    return latestPost;
  })

  saveLatestPostsMd(latestPosts)
})


const unsplash = new Unsplash({
  applicationId: '069fb72cbdc668081d55664de65740737e93428ddaf43149ab5e5eb22657e641',
  secret: '6f9a3504d54614939ec2b6dc5b80bbf2f4236029d46f4b95b213f07fa8e9304f',
  callbackUrl: 'http://hocraveiro.com'
});

unsplash.users.photos("hocraveiro", 1, 20, "recent", false)
  .then(toJson)
  .then(response => {
    const photos = response.map(photo => photo.urls.regular);
    savePhotos(photos);
  });


const saveLatestPostsMd = (posts) => {
  const md = `
    ---\ntitle: "Henrique Craveiro"\ndate: "${new Date()}"\nlatestPosts: ${JSON.stringify(posts)}\n---
  `.trim()
  fs.writeFile("./src/pages/index/index.md", md, function(err) {
    if(err) {
        throw new Error(err);
    }
  }); 
}


const savePhotos = (photos) => {
  const md = `
    ---\nphotos: ${JSON.stringify(photos)}\n---
  `.trim()
  fs.writeFile("./src/pages/photograph/index.md", md, function(err) {
    if(err) {
        throw new Error(err);
    }
  }); 
}