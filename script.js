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


async function showBook(id) {
  const li = document.getElementById('book' + id);

  let bookInfo = await getOne(id);
  bookInfo && li.insertAdjacentHTML("beforeend", bookDetails(bookInfo));
}
 
 
 
 function hideBook(bookListItem) {
  console.log(bookListItem);
  const removeDetails = bookListItem.children[0];
  if (removeDetails) bookListItem.removeChild(removeDetails);
     
  
} 

function getBook(book){

  const elements = document.getElementById('bookDetails');

  elements && elements.remove();
  let html = BookDetail(book);
  root.insertAdjacentHTML('afterbegin', html);
}


  

  

  








    

