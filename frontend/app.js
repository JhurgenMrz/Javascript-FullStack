import "./styles/app.css";
import UI from "./UI";

document.addEventListener("DOMContentLoaded", e => {
  const ui = new UI();
  ui.renderBooks();
});

const BookForm = document.getElementById("book-form");
BookForm.addEventListener("submit", e => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const image = document.getElementById("image").files;

  const formData = new FormData();
  formData.append("image", image[0]);
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);

  const ui = new UI();
  ui.addANewBook(formData);

  e.preventDefault();
});
