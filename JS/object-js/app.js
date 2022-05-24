// Instructions
// 1. Create an object that represents a book. It should have 
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, 
// that will return the following description from your book 
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary


function sentence(){
        const Book = {
                pages: 5821,
                bookName: 'Wonderland',
                author: 'Lerry Gerry',
                publishingYear: 1998,
                copies: 20000
        };
        console.log(`The book ${Book.bookName} was written by ${Book.author} and was published in the year ${Book.publishingYear}, the book sold ${Book.copies} and it has ${Book.pages} pages! `);
}
sentence()
