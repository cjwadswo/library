let myLibrary = [];

function Book(title, author, pages, published, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.published = published;
    this.read = read;
}

function displayBooks(library) {
    const content = document.querySelector('.content');
    content.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        content.innerHTML += createBookHTML(myLibrary[0]);
    }
    content.innerHTML += '<div class="new-book-card">+</div>'

}

function createBookHTML(book) {
    let bookHTML = `
    <div class="book-card">
        <div class="title">${book.title}</div>
        <div class="author">${book.author}</div>
        <div class="pages">${book.pages}</div>
        <div class="publish-year">${book.published.toLocaleString().split(',')[0]}</div>
        <div class="read">${book.read}</div>
    </div>`

    return bookHTML;
}

// myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, new Date(1996, 6, 1), true));
// myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, new Date(1996, 6, 1), true));
// myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, new Date(1996, 6, 1), true));
// myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, new Date(1996, 6, 1), true));
// myLibrary.push(new Book("Game of Thrones", "George R. R. Martin", 694, new Date(1996, 6, 1), true));
// displayBooks(myLibrary);

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }