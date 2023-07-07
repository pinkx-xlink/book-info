function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(Book)
    }
}  

const deepTrouble = new Book('Deep Trouble', 'R.L. Stine', 117, read)


console.log(deepTrouble.info());