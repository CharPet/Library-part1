const myLibrary = [];
// console.log(myLibrary);

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
  const title = document.querySelector('#title').value;
  //console.log(title);
  const author = document.querySelector('#author').value;
  //console.log(author);
  const pages = document.querySelector('#pages').value;
  //console.log(pages);

  const newBook = new Book(title, author, pages);

  myLibrary.push(newBook);

//    document.querySelector('#title').value = '';
//    document.querySelector('#author').value = '';
//    document.querySelector('#pages').value = '';
}

document.getElementById('book-elements').addEventListener('submit', function (e) {
    e.preventDefault();
    addBookToLibrary();
});

console.log(myLibrary);

