const library = []



function runLibrary(){

const choice = prompt(
            "Welcome to Diwan Library System!\n" + 
            "1. Add New Book\n" +
            "2. Borrow Book\n" +
            "3. Return Book\n" +
            "4. Show Library Report\n" +
            "5. Exit\n\n" +
            "Enter your choice:"
        );
    switch(choice) {

        case "1":
            addBook();
            break;
        case "2":
            borrowBook()
            break;
        case "3":
            returnBook()
            break;
        case "4":
            showReport();
            break;
        case "5":
            alert("You chose to exit the system.");
            break;
        default:
            alert("Invalid choice. Please try again.");
    }

}
function addBook() {

    const titleInput = prompt("Enter Book Title:");
    const authorInput = prompt("Enter Author Name:");
    const copiesInput = prompt("Enter Number of Copies:");

   
    if (!titleInput || !authorInput || isNaN(copiesInput) || Number(copiesInput) <= 0) {
        alert("Error: Invalid input. Title cannot be empty and copies must be a positive number.");
        return; 
    }

    const newBook = {
        title: titleInput.trim(),          
        author: authorInput.trim(),
        availableCopies: Number(copiesInput), 
        borrowedCopies: 0,                 
        borrowCount: 0                     
    };

    library.push(newBook);
    
    alert("Book added successfully: " + newBook.title);
}

function borrowBook() {

    let searchTitle = prompt("Enter the title of the book to borrow:");
    if (!searchTitle) {
        alert("Please enter a valid title.");
        return;
    }

    let foundbook = null;
    for (let book of library) {
        if (book.title.toLowerCase() === searchTitle.toLowerCase().trim()) {
            foundbook = book;
            break;
        }
    }
    if (!foundbook) {
        alert("Book not found.");
    }else if (foundbook.availableCopies === 0) {
        alert("Sorry, all copies of '" + foundbook.title + "' are currently borrowed.");
    }else{
        foundbook.availableCopies= foundbook.availableCopies-1;
        foundbook.borrowedCopies = foundbook.borrowedCopies +1;
        foundbook.borrowCount++;
        alert("Book borrowed successfully: " + foundbook.title);
    }


}

function returnBook() {

    let searchTitle = prompt("Enter the title of the book to return:");
    if (!searchTitle) {
        alert("Please enter a valid title.");
        return;}
        let foundBook = null;
        for (let book of library) {
            if (book.title.toLowerCase() === searchTitle.toLowerCase().trim()) {
                foundBook = book;
                break;

            }
        }
        if (!foundBook) {

            alert("Book not found.");
            
        }else if (foundBook.borrowedCopies === 0) {
            alert("This book is already fully stocked. Are you sure you borrowed it from here?");
        }else{
            foundBook.availableCopies = foundBook.availableCopies +1;
            foundBook.borrowedCopies = foundBook.borrowedCopies -1;
            alert("Book returned successfully: " + foundBook.title);
        }
    }

function calculateTotalBooks(){
    let totalAvailable = 0;
    let totalBorrowed = 0;
    for (let book of library) {
        totalAvailable += book.availableCopies;
        totalBorrowed += book.borrowedCopies;
    }
    return{
        available : totalAvailable,
        borrowed: totalBorrowed
    };

}

function showReport() {
    let totals = calculateTotalBooks();
    let report = "=== LIBRARY REPORT ===\n\n";
    if (library.length === 0) {
        report += "The library is empty.";


    }else{
        for (let book of library) {
            let status = "Available";
            if (book.availableCopies === 0) {
                status = "Not Available";
            }else if (book.availableCopies<3) {
                status= "Limited Stock";
            }
            report += `Title: ${book.title}\n`;
            report += `Author: ${book.author}\n`;
            report += `Available: ${book.availableCopies} | Borrowed: ${book.borrowedCopies}\n`;
            report += `Status: ${status}\n`;
            report += "------------------------\n";

        }
    }
    report += "\n=== TOTALS ===\n";
    report += `Total Available Books: ${totals.available}\n`;
    report += `Total Borrowed Books: ${totals.borrowed}\n`;

    alert(report);
}


runLibrary()
