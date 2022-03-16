/*
  WRITE YOUR SOLUTION HERE
*/

class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies
    }

    get availability() {
        if (this.numCopies === 0) {
            return `Sorry, Out of Stock.`
        } else if (this.numCopies < 10) {
            return `Low stock!`
        }
        if (this.numCopies > 10) {
            return `In stock.`
        }
    }

    sell(numCopiesSold = 1) {
        return this.numCopies -= numCopiesSold;
    }

    restock(numCopiesToStock = 5) {
        return this.numCopies += numCopiesToStock
    }
}

const book1 = new Book('Du darfst nicht alles glauben, was du denkst', 'Kurt Krömer', 0123, 50);
const book2 = new Book('Wenn ihr wüsstet', 'David Garrett', 01234, 50);

console.log(book1.availability) // In stock
console.log(book1.numCopies, book1.sell(10)) // 50 40
console.log(book1.numCopies) //40
console.log(book1.restock()) // 45
console.log(book1.restock(5)) // 50

