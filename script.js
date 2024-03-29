class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
let myLibrary = [];

let newBookButton = document.querySelector(".new-book-card");
newBookButton.addEventListener("click", openForm, true);

let closeButton = document.querySelector(".cancel");
closeButton.addEventListener("click", closeForm);

let submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", getNewEntry, true);

let toggleReadButton = document.querySelector(".read");

let titleInput = document.getElementById("title");
let titleValid = false;
let authorValid = false;
let pageValid = false;
// Function to validate the title
function validateTitle() {
  const titleValue = titleInput.value.trim();
  if (titleValue === "") {
    // Title is empty, display an error message
    titleInput.classList.add("error");
    // You can display an error message to the user or perform any other action
    titleInput.setAttribute("placeholder", "Must enter a title");
    titleValid = false;
  } else {
    // Title is valid, remove any error styling
    titleValid = true;
    titleInput.classList.remove("error");
  }
}

// Add an event listener to the title input for validation on input change

function displayBooks(library) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    content.innerHTML += createBookHTML(library[i], i);
  }
  content.innerHTML += `            
<div class="new-book-card open-button">
    <div class="open-button"> + </div>
        <div class="form-popup" id="myForm">
            <form class="form-container">                 
            <div class="title-field">
                <label for="title">Title:</label>
                <input type="text" id="title" placeholder="Enter Book Title" name="title" required>
            </div>
        
            <div class="author-field">
                <label for="author">Author:</label>
                <input type="text" id="author" placeholder="Enter Author" name="author" required>
            </div>

            <div class="page-field">
                <label for="pages">Page numbers</label>
                <input type="number" id="pages" placeholder="#" name="pages" required>
            </div>

            <div class="read-field">
                <div class="switch-container">
                    <div>Read</div>
                    <label class="switch">
                        <input class="read" type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <button type="button" id="submit-btn" class="btn testBtn">Add Book</button>
            <button type="button" class="btn cancel">Close</button>
            </form>
        </div>
    </div>`;

  newBookButton = document.querySelector(".new-book-card");
  newBookButton.addEventListener("click", openForm, true);
  closeButton = document.querySelector(".cancel");
  closeButton.addEventListener("click", closeForm);
  submitButton = document.querySelector("#submit-btn");
  submitButton.addEventListener("click", getNewEntry, true);
  toggleReadButton = document.querySelectorAll(".read");
  toggleReadButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.path[6].className !== "new-book-card open-button") {
        let bookElement = e.path[3];
        let index = bookElement.getAttribute("data-book-number");
        myLibrary[index].read = !myLibrary[index].read;
      }
    });
  });
}

function createBookHTML(book, i) {
  let bookHTML = `
        <div class="book-card" data-book-number=${i}>
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages}</div>
            <div class="switch-container">
                <div>Read</div>
                <label class="switch">
                    <input class="read" type="checkbox"${
                      book.read ? "checked" : ""
                    }>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>`;

  return bookHTML;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function getNewEntry() {
  titleInput = document.getElementById("title");
  titleInput.addEventListener("input", validateTitle);

  let title = document.getElementById("title").value;
  console.log(title);
  validateTitle(title);
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.querySelectorAll(".read");
  read = read[read.length - 1].checked;
  if (titleValid) {
    myLibrary.push(new Book(title, author, pages, read));
    displayBooks(myLibrary);
    titleValid = false;
  }
}
