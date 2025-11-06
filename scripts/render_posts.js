// Choose which post to show (you could make this dynamic later)
const postFile = './posts/my-first-post.md';

fetch(postFile)
  .then(res => res.text())
  .then(md => {
    // Convert Markdown → HTML using Marked.js
    const html = marked.parse(md);
    document.getElementById('post').innerHTML = html;
  })
  .catch(err => {
    document.getElementById('post').innerHTML = `<p>Error loading post: ${err}</p>`;
  });
