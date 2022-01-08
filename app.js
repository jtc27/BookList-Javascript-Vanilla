// Book class: represents a Book
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class: Handle UI tasks
class UI {
  // static methods, so we don't have to instantiate
  static displayBooks() {
  /*  
  1. gets stored books 
  2. loops through them
  3. addBookToList for each Book
  */
    const StoredBooks = [
      {
        title: 'Book 1',
        author: 'Wonny Won',
        isbn: '3939002'
      },
      {
        title: 'Book 2',
        author: 'Twosday',
        isbn: '42439'
      },
    ]

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList(book){
    const list = document.querySelector('#book-list'); // grabs the element in the DOM

    const row = document.createElement('tr'); //creates tr tag in site

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href ="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row) // appends row to the list
  }
}

// Store class: Handles storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => 
{
  //Prevent acutual submit
  e.preventDefault();

  //Get form values
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const isbn = document.querySelector('#isbn').value

  //instantiate Book
  const book = new Book(title, author, isbn);

  //Add Book to UI
  UI.addBookToList(book);

})

// Event: Remove a Book