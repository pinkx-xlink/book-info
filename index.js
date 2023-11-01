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
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-card");
    bookElement.innerHTML = `
            <div class="card">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">by: ${book.author}</h5>
            
                <p>${book.pages} pages</p> 
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        `;
    libraryElement.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}


function addBookToLibrary(){
  let title = document.querySelector("#title").value; //maybe remove #?
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

// const book1 = new Book('Deep Trouble', 'R.L. Stine', 117, 'read')
//console.log(deepTrouble.info());