const posts = [
  { title: "My First Post", file: "posts/my-first-post.md" },
  { title: "Another Post", file: "posts/another-post.md" }
];

const navLinks = document.getElementById("nav-links");

// Populate navbar
posts.forEach(post => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = post.title;
  a.addEventListener("click", (e) => {
    e.preventDefault();
    loadPost(post.file);
    if (window.innerWidth <= 600) toggleMenu(); // close menu on mobile
  });
  li.appendChild(a);
  navLinks.appendChild(li);
});

// Toggle mobile menu
function toggleMenu() {
  navLinks.classList.toggle("show");
}

// Load Markdown post
function loadPost(file) {
  fetch(file)
    .then(res => res.text())
    .then(md => {
      document.getElementById("post-content").innerHTML = marked.parse(md);
    })
    .catch(err => {
      document.getElementById("post-content").innerHTML = "<p>Failed to load post.</p>";
      console.error(err);
    });
}
