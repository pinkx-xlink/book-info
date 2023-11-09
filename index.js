let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
//   this.info = function() {
//       console.log(Book)
//   }
}  

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render()
}

function render() {
  let libraryElement = document.querySelector("#library");
  libraryElement.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let Book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-card");


    // NEED TO APPEND THE INPUT AS NEW DIVS (MAKE THEM STAY WHEN PRESSING "ADD BOOK" BTN)
    bookElement.innerHTML = `
            <div class="card">
            <label for="title">Title: </label>
            <input type="text" id="title">
            <label for="author">Author: </label>
            <input type="text" id="author">
            <label for="pages">Pages: </label>
            <input type="text" id="pages">
    
            <label for="read">Read: </label>
            <input type="checkbox" id="read">
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            <input type="submit" value="Add Book"> 
            </div>
        `;
    libraryElement.appendChild(bookElement);
  } 
}

// addBook.prototype.Book = function() {
//     myLibrary.appendChild(index, 2);
//     render();
// }

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary(){
  let title = document.querySelector("title").value; //maybe remove #?
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
  myLibrary.push(newBook);
  render();
  // do stuff here
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})

document.getElementById("#new-book-form").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
})


// troubleshooting savebookbtn!!

let saveBookBtn = document.querySelector("#save-book-btn");
saveBookBtn.addEventListener("click", function() {
  let = document.querySelector("# ");
  .style.display = "block";
})




// const book1 = new Book('Deep Trouble', 'R.L. Stine', 117, 'read')
//console.log(deepTrouble.info());