const posts = [
  { title: "My First Post", file: "posts/my-first-post.md" },
  { title: "Another Post", file: "posts/another-post.md" }
];

const navLinks = document.getElementById("nav-links");
const hamburger = document.querySelector(".hamburger");
const brand = document.querySelector(".brand");

// Populate navbar
posts.forEach(post => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = post.title;
  a.addEventListener("click", (e) => {
    e.preventDefault();
    loadPost(post.file);
    if (window.innerWidth <= 600) toggleMenu();
  });
  li.appendChild(a);
  navLinks.appendChild(li);
});

// Hamburger toggle
function toggleMenu() {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
}
hamburger.addEventListener("click", toggleMenu);

// Brand click → homepage
brand.addEventListener("click", () => {
  window.location.href = window.location.origin;
});

// Load Markdown
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
