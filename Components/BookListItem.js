const BookListItem = (book) => {
  let html = `<li
              id="book${book.id}"
              onmouseenter="showBook(${book.id})"
              onmouseout="hideBook(${book.id})"
              class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};




  
async function showBook(id) {
  const li = document.getElementById('book' + id);

  let bookInfo = await getOne(id);
  

  let html = `
  <div id="bookDetail${id}" 
        class="book__details absolute inset-x-1 divide-y border-x-4 border-black  bg-blue-300 p-2 w-60 top-10 mx-8">
        <img src="${bookInfo.coverImage}" alt="Omslaget saknas">
          <ul class="list">
            <li>Title: ${bookInfo.title}</li>
            <li>Author: ${bookInfo.author}</li>
            <li>Pages: ${bookInfo.pages}</li>
            <li>Release date: ${bookInfo.releaseDate}</li>
          </ul>
      </div>
    `;

  bookInfo && li.insertAdjacentHTML("beforeend", html);
 }
 
 
 
 function hideBook(id) {
  
  const removeDetails = document.querySelector('#bookDetail' + id);
  if (removeDetails)
    removeDetails.remove(); 
  
} 

function getBook(book){

  const elements = document.getElementById('bookDetails');

  elements && elements.remove();
  let html = BookDetail(book);
  root.insertAdjacentHTML('afterbegin', html);
}


