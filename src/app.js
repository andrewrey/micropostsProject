import { http } from "./http";
import { ui } from "./ui";

// Get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

// List for add Post
document.querySelector(".post-submit").addEventListener("click", submitPost);

function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then((item) => ui.showPosts(item))
    .catch((err) => console.log(err));
}

// Add Post
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  const data = {
    title,
    body,
  };

  // Create Post
  http
    .post("http://localhost:3000/posts", data)
    .then((data) => {
      ui.showAlert("Post added", "alert alert-success");
      ui.clearFields();
      getPosts();
    })
    .catch((err) => console.log(err));
}
