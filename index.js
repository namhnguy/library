let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// function displayBooks(library) {
//   library.forEach(element => {
//     console.log(element);
//   });
// }

// addBookToLibrary("test", "testauthor", 123, true);
// addBookToLibrary("test2", "testauthor2", 1234, true);
// addBookToLibrary("test3", "testauthor3", 12345, false);

const mainSection = document.querySelector('.main');
function displayBooks(library) {
  while (mainSection.firstChild) {
    mainSection.removeChild(mainSection.firstChild);
  }
  for (let i = 0; i < library.length; i++) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('main__card-container', `main__card-container-${i}`);
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('main__card-title');
    cardTitle.textContent = library[i].title;
    const cardAuthor = document.createElement('div');
    cardAuthor.classList.add('main__card-author');
    cardAuthor.textContent = library[i].author;
    const cardPages = document.createElement('div');
    cardPages.classList.add('main__card-pages');
    cardPages.textContent = library[i].pages;
    const cardRead = document.createElement('div');
    cardRead.classList.add('main__card-read');
    cardRead.textContent = library[i].read;
    const cardRemoveBtn = document.createElement('div');
    cardRemoveBtn.classList.add('main__card-remove-btn');
    const btn = document.createElement('button');
    btn.textContent = 'Remove';
    btn.addEventListener('click', function() {
      myLibrary = myLibrary.filter((e, index) => index !== i);
      displayBooks(myLibrary);
    });
    cardRemoveBtn.appendChild(btn);
    const cardReadChangeBtn = document.createElement('div');
    cardReadChangeBtn.classList.add('main__card-change-btn');
    const btnChange = document.createElement('button');
    btnChange.textContent = 'Change Read Status';
    btnChange.addEventListener('click', function() {
      if (myLibrary[i].read === "true")
        myLibrary[i].read = "false";
      else
        myLibrary[i].read = "true";
      displayBooks(myLibrary);
    });
    cardReadChangeBtn.appendChild(btnChange);
    cardItem.appendChild(cardTitle);
    cardItem.appendChild(cardAuthor);
    cardItem.appendChild(cardPages);
    cardItem.appendChild(cardRead);
    cardItem.appendChild(cardRemoveBtn);
    cardItem.appendChild(cardReadChangeBtn);
    mainSection.appendChild(cardItem);
  }
}

const myForm = document.querySelector(".book-info");
myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(myForm.elements["title"].value, myForm.elements["author"].value, myForm.elements["pages"].value, myForm.elements["read"].value);
  displayBooks(myLibrary);
})

// displayBooks(myLibrary);