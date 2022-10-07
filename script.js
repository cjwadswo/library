let myLibrary = [];

myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, true));
myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, true));
myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, true));
myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, true));
myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, true));

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBooks(library) {
    const content = document.querySelector('.content');
    content.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        content.innerHTML += createBookHTML(library[i]);
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
submitButton.addEventListener('click', getNewEntry, true); 

}

function createBookHTML(test) {
    let bookHTML = `
    <div class="book-card">
        <div class="title">${test.title}</div>
        <div class="author">${test.author}</div>
        <div class="pages">${test.pages}</div>
        <div class="read">${test.read}</div>
    </div>`

    return bookHTML;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    console.log("TEST");
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



  const submitBtn = document.getElementById("submit-btn");

  function getNewEntry() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    myLibrary.push(new Book(title,author,pages));
    displayBooks(myLibrary);
  }

  let newBookButton = document.querySelector(".new-book-card");
  newBookButton.addEventListener("click", openForm);
  let closeButton = document.querySelector(".cancel");
  closeButton.addEventListener("click", closeForm);

  let submitButton = document.querySelector("#submit-btn");
  submitButton.addEventListener('click', getNewEntry, true); 