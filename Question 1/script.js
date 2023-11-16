function Book(title, author, numOfPages, numOfCopies) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.numOfCopies = numOfCopies;
  Book.totalBooks = (Book.totalBooks || 0) + 1;
}

function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.content = [];
  this.addbook = function (book) {
    this.content.push(book);
  };
  this.countBox = function () {
    var count = 0;
    for (value in this.content) {
      count += this.content[value].numOfCopies;
    }
    console.log(`count is   ${count}`);
    return count;
  };

  this.deleteBookByTitile = function (title) {
    for (value in this.content) {
      if (
        this.content[value].title === title &&
        this.content[value].numOfCopies > 1
      ) {
        this.content[value].numOfCopies -= 1;
      } else if (
        this.content[value].title === title &&
        this.content[value].numOfCopies == 1
      ) {
        this.content[value].numOfCopies = 0;
        this.content.splice(value, 1);
        console.log(`Object removed ${this.content}`);
      }
    }
  };
  Box.getTotalBooks = function () {
    return Book.totalBooks;
  };

  this.toString = function () {
    return `Box Dimention : Width = ${this.width.toString()} , Height = ${
      this.height
    } , lenght = ${this.length} , Material = ${this.material}`;
  };
  this.valueOf = function () {
    return this.countBox();
  };
}

var box1 = new Box(10, 8, 15, "Science");
var box2 = new Box(3, 4, 15, "Math");

var book1 = new Book("The Science Behind the sea", "Mohamed Mahmoud", 220, 2);
var book2 = new Book("The Science Behind the Sky", "Ahmed", 220, 1);
var book3 = new Book("TheMath Logic", "Amr", 220, 1);

box1.addbook(book1);
box1.addbook(book2);
box2.addbook(book3);
box1.countBox();
box2.deleteBookByTitile("TheMath Logic");
console.log(Box.getTotalBooks());
console.log(box1.toString());
console.log(box1.valueOf() + box2.valueOf());
