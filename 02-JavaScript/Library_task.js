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
            alert("You chose to return a book");
            break;
        case "4":
            alert("You chose to show library report");
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

runLibrary()
