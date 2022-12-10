'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  
  }

  

  


    



function getBook(book) {
  const elements = document.getElementById("bookDetail");
  
  elements && elements.remove();

  let html = BookDetail(book);
  root.insertAdjacentHTML("afterbegin", html)




const showBookDetails = document.querySelectorAll(".book__details");

  for(let i = 0; i < showBookDetails.length; i++) {

    showBookDetails[i].addEventListener( "mouseover", (e) => {
      let book = getOne(e.target.id)
      book.then(function (result) {
        getBook(result);
        
      })
    });

      showBookDetails[i].addEventListener("mouseout", () => {
        const existingElement = dokument.getElementById("bookdetail");
        existingElement && existingElement.remove();
    });

}
}
function getBook(book) {
  const elements = document.getElementById("bookDetail");
  
  elements && elements.remove();

  let html = BookDetail(book);
  root.insertAdjacentHTML("afterbegin", html)
}