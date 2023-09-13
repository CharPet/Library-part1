const myLibrary = [
    {
        title: "The Clean Coder",
        author: "Robert C. Martin",
        pages: 244,
        status: "not read"
    },
    {
        title: "Don't Make Me Think",
        author: "Steve Krug",
        pages: 209,
        status: "not read"
    },
    {
        title: "Dive Into Design Patterns",
        author: "Alexander Shvets",
        pages: 410,
        status: "not read"  
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        pages: 447,
        status: "currently reading"
    },
    {
        title: "C++ Primer Plus",
        author: "Stephen Prata",
        pages: 1438,
        status: "not read"
    },
    {
        title: "Web Typography",
        author: "Richard Rutter",
        pages: 201,
        status: "not read"
    },
    {
        title: "Articulating Design Decisions",
        author: "Tom Greever",
        pages: 275,
        status: "not read"
    },
    {
        title: "Think Like a Programmer",
        author: "V. Anton Spraul",
        pages: 256,
        status: "currently reading"
    },
 

];
// console.log(myLibrary);

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const statusInput = document.querySelector('input[name="status"]:checked');
    const status = statusInput ? statusInput.value : '';

    const newBook = new Book(title, author, pages, status);

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

function displayBooks() {
    const bookList = document.getElementById('bookshelf-ul');
    bookList.innerHTML = '';
  
    myLibrary.forEach((book, index) => {
        const listItem = document.createElement('li');
        const statusText = capitalize(book.status); 
        listItem.innerHTML = `
          <div class="book-item">
            <span>${book.title} by ${book.author}, ${book.pages} pages, ${statusText}</span>
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

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.querySelector('input[name="status"][value="not-read"]').checked = true;
displayBooks();