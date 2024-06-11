const getTheTitles = function (books) {
  let bookList = [];
  books.forEach((book) => {
    bookList.push(book["title"]);
  });
  return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;
