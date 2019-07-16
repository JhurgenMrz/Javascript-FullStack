import "./styles/app.css";
import UI from "./UI";
import axios from 'axios';

document.addEventListener("DOMContentLoaded", e => {
  const ui = new UI();
  ui.renderBooks();
});

const uploadBarDiv = document.getElementById('progress-bar');

const imageUploader = document.getElementById('imageUploader');

let imgUrl = '';

imageUploader.addEventListener("change", async e =>{
  const file = e.target.files[0];
  console.log(file);
  
  const formData = new FormData();
  formData.append("file",file);
  formData.append("upload_preset", "qduwqusx");
  console.log(formData);
  
  const res = await axios.post("https://api.cloudinary.com/v1_1/jmaraza-com/image/upload", formData,{
    headers:{
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress(event){
        const progress = (event.loaded * 100) / event.total;
        uploadBarDiv.style.width = `${progress}%`;
    }
  });
  imgUrl = res.data.secure_url;
  console.log(res.data.secure_url);
  console.log(imgUrl);
  return imgUrl;
  
})

const BookForm = document.getElementById("book-form");

BookForm.addEventListener("submit", e => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  // const image = document.getElementById("imageUploader").files;
  const image = imgUrl;

  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);
  console.log(formData);
  

  const ui = new UI();
  ui.addANewBook(formData);

  ui.renderMessage("New Book Added", "success", 2000);

  e.preventDefault();
});

document.getElementById("books-cards").addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    const ui = new UI();
    ui.deleteBook(e.target.getAttribute("_id"));
    ui.renderMessage("Book Deleted Successfully", "danger", 2000);
  }

  e.preventDefault();
});
