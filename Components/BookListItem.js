const BookListItem = (book) => {
  let html = `<li
              id="book${book.id}"
              onmouseenter="showBook(${book.id})"
              onmouseout="hideBook(this)"
              class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};




  
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


