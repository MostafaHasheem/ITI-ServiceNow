const library = []



function runLibrary(){
    let isRunning = true;
    while (isRunning) {
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
            isRunning = false;
            break;
        default:
            alert("Invalid choice. Please try again.");
    }

}
}
function addBook() {
    const titleInput = prompt("Enter Book Title:");
    const authorInput = prompt("Enter Author Name:");
    const copiesInput = prompt("Enter Number of Copies:");

    // 
    if (!titleInput || !authorInput || isNaN(copiesInput) || Number(copiesInput) <= 0) {
        alert("Invalid input.");
        return;
    }

    const cleanTitle = titleInput.trim();
    const cleanAuthor = authorInput.trim();
    const newCopies = Number(copiesInput);

    // --- BONUS 1 & 2 START ---
    let foundBook = null;

    for (const book of library) {
        if (book.title.toLowerCase() === cleanTitle.toLowerCase()) {
            foundBook = book;
            break;
        }
    }

    if (foundBook) {
        foundBook.availableCopies += newCopies;
        alert("Duplicate found! Updated copies for '" + foundBook.title + "'.");
    } 
    // --- BONUS 1 & 2 END ---
    else {
        const newBook = {
            title: cleanTitle,
            author: cleanAuthor,
            availableCopies: newCopies,
            borrowedCopies: 0,
            borrowCount: 0 // <--- BONUS 5 (Setup)
        };
        library.push(newBook);
        alert("Book added successfully!");
    }
}

function borrowBook() {
    const searchTitle = prompt("Enter the title to borrow:");
    if (!searchTitle) return;

    let foundBook = null;


    for (const book of library) {
        if (book.title.toLowerCase() === searchTitle.toLowerCase().trim()) {
            foundBook = book;
            break;
        }
    }

    if (!foundBook) {
        alert("Book not found.");
    } else if (foundBook.availableCopies === 0) {
        alert("Sorry, this book is out of stock.");
    } else {
        foundBook.availableCopies--;
        foundBook.borrowedCopies++;
        
        foundBook.borrowCount++; 

        alert("Success! You have borrowed '" + foundBook.title + "'. Enjoy reading!");
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
    const totals = calculateTotalBooks();
    let report = "=== LIBRARY REPORT ===\n\n";

    if (library.length === 0) {
        report += "Library is empty.\n";
    } else {
        for (const book of library) {
            let status = "Available";
            if (book.availableCopies === 0) {
                status = "Out of Stock";
            } else if (book.availableCopies < 3) {
                status = "Limited Stock"; 
            }

            report += `Title: ${book.title}\n`;
            report += `Author: ${book.author}\n`;
            report += `Available: ${book.availableCopies} | Borrowed: ${book.borrowedCopies}\n`;
            
            report += `Total Times Borrowed: ${book.borrowCount}\n`;

            report += `Status: ${status}\n`;
            report += "------------------------\n";
        }
    }

    report += "\n=== TOTALS ===\n";
    report += `Total Available: ${totals.available}\n`;
    report += `Total Borrowed: ${totals.borrowed}\n`;

    alert(report);
}


runLibrary()
