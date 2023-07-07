function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.sayBook = function() {
        console.log(Book)
    }
}  

const book1 = new Book('Deep Trouble', 'R.L. Stine', 117, read)


book1.sayBook()