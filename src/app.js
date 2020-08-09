import { http } from "./http";
import { ui } from "./ui";

// Get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add Post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for delete Post
document.querySelector("#posts").addEventListener("click", deletePost);

function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then((item) => ui.showPosts(item))
    .catch((err) => console.log(err));
}

// List for Edit state
document.querySelector("#posts").addEventListener("click", enableEdit);

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

// Delete Post
function deletePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are you sure?")) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          console.log(data);
          ui.showAlert(data, "alert alert-success");
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
  e.preventDefault();
}

// Enable Edit State
function enableEdit(e) {
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body,
    };

    // Fill form with current post
    ui.fillForm(data);
  }
  e.preventDefault();
}
