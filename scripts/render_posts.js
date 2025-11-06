const postFile = './posts/my-first-post.md';

fetch(postFile)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status} – ${res.statusText}`);
    return res.text();
  })
  .then(md => {
    const html = marked.parse(md);
    document.getElementById('post').innerHTML = html;
  })
  .catch(err => {
    document.getElementById('post').innerHTML = `<p style="color:red;">Error loading post: ${err}</p>`;
  });
