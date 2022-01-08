// Book class: represents a Book
class Book {
  constructor(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

// UI class: Handle UI tasks
class UI {
  // static methods, so we don't have to instantiate
  static displayBooks() {
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
  }
}

// Store class: Handles storage

// Event: Display Books

// Event: Add a Book

// Event: Remove a Book