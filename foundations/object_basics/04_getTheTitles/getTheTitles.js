const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (arr) {
  const bookTitles = arr.map((book) => book.title);
  return bookTitles;
};

getTheTitles(books); // ['Book', 'Book2']

// Do not edit below this line
module.exports = getTheTitles;
