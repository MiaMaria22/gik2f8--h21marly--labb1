function bookDetails(bookInfo) {
    console.log(bookInfo);
    let html = `
    <div id="bookDetail${bookInfo.id}" 
          class="book__details absolute inset-x-1 divide-y border-x-4 border-black  bg-blue-200 p-2 w-48 top-10 mx-8">
        <img src="${bookInfo.coverImage}" alt="Omslag saknas">
            
        <ul class="list">
              <li>Title: ${bookInfo.title}</li>
              <li>Author: ${bookInfo.author}</li>
              <li>Pages: ${bookInfo.pages}</li>
              <li>Release date: ${bookInfo.releaseDate}</li>
            </ul>
        </div>
      `;

    return html; 
}
