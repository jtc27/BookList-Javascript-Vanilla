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

  static deleteBook(elem){
    if (elem.classList.contains('delete')) {
      elem.parentElement.parentElement.remove();
      // parent is <td>, the parent of that is <tr> row.  we want to delete the entire row
    }
  }

  // method shows successful submit or empty field alert
  static showAlert(message, className){
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;  //Bootstrap alert
    div.appendChild(document.createTextNode(message)) 

    const container = document.querySelector('.container') //parent
    const form = document.querySelector('#book-form')
    container.insertBefore(div, form); //puts it in div class = container, before #book-form

    // vanish in 3 seconds
    setTimeout(()=> document.querySelector('.alert').remove(), 3000)
  }

  static clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
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

  //validate
  if(title === '' || author === '' || isbn === ''){
    UI.showAlert('Please fill in all fields', 'danger')  // Bootstrap
    // alert('Please fill in all fields')  *standard JS alert
  } else {
    //instantiate Book
    const book = new Book(title, author, isbn);

    //Add Book to UI
    UI.addBookToList(book);

    //Show Book added
    UI.showAlert('Book Added', 'success')

    //clear fields after "add book" button pressed
    UI.clearFields()
    }
})

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => 
{
  UI.deleteBook(e.target)

   //Show Book added
   UI.showAlert('Book removed', 'success')
})

/* Console logs any element that is clicked inside tbody #book-list
document.querySelector('#book-list').addEventListener('click', (e) => 
{
  console.log(e.target)
})
*/