function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length,
        firstAvalBook: string = '';

    for (let curBook of books) {
        if (curBook.available) {
            firstAvalBook = curBook.title;

            break;
        }
    }

    console.log('Total books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvalBook);
}

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks(),
        filteredTitles: string[] = [];

    for (let curBook of allBooks) {
        if (curBook.category === categoryFilter) {
            filteredTitles.push(curBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookById(id: number) {
    const allBooks = GetAllBooks();
    
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string) : void {
    console.log('Creating customer: ' + name);

    if (age) {
        console.log('Age: ' + age);
    }

    if (city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log('Checking out books for ' + customer);

    let booksCkeckedOut: string[] = [];

    for (let id of bookIds) {
        let book = GetBookById(id);

        if (book.available) {
            booksCkeckedOut.push(book.title);
        }
    }

    return booksCkeckedOut;
}

function GetTitles(author: string): string[];

function GetTitles(available: boolean): string[];

function GetTitles(bookProperty: any) : string[] {
    const allBooks = GetAllBooks(),
        foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    if (typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

//******************************************************************
let hermanBooks = GetTitles('Herman Melville');
hermanBooks.forEach(title => console.log(title));

// let myBooks: string[] = CheckoutBooks('Thor', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// LogFirstAvailable()

// let fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));

// CreateCustomer('Roby');
// CreateCustomer('Glen', 28);
// CreateCustomer('Toby', 56, 'Boston');

//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, ind) => console.log(`{++ind} - {val}`));

//let x: number;
//let IdGenerator: (chars: string, nums: number) => string = CreateCustomerID;
//console.log(IdGenerator('Foo', 1));