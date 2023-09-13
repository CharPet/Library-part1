const myLibrary = [
    {
        title: "The Steppenwolf",
        author: "Hermann Hesse",
        pages: 250
    }
];
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

  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}

document.getElementById('book-elements').addEventListener('submit', function (e) {
    e.preventDefault();
    addBookToLibrary();

    displayBooks();
});

// console.log(myLibrary);

function displayBooks() {
    const bookList = document.getElementById('bookshelf-ul');
    bookList.innerHTML = '';
  
    myLibrary.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <div class="book-item">
            <span>${book.title} by ${book.author}, ${book.pages} pages</span>
            <button onclick="removeBook(${index})">Remove</button>
          </div>
        `;
        bookList.appendChild(listItem);
      });
  }

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
} 


  displayBooks();