

var books = [{
    "name": "1984",
    "author": "George Orwell",
    "subject": "1984 tells the futuristic story of a dystopian, totalitarian world where free will and love are forbidden.",
    "published date": "08 june 1949"
},
{
    "name": "The Lord of the Rings ",
    "author": "J.R.R. Tolkien",
    "subject": "Tolkien’s fantasy epic is one of the top must-read books out there. Set in Middle Earth – a world full of hobbits, elves, orcs, goblins, and wizards ",
    "published date": "29 July 1954",
},
{
    "name": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "subject": "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien.",
    "published date": "21 sep 1937 ",
},
{
    "name": "The Return of the King ",
    "author": "J. R. R. Tolkien",
    "subject": "The story begins in the kingdom of Gondor, which is soon to be attacked by the Dark Lord Sauron.",
    "published date": "20 October 1955",
},
{
    "name": "The Kite Runner ",
    "author": "Khaled Hosseini",
    "subject": "The Kite Runner is a moving story of an unlikely friendship between a wealthy boy and the son of his father’s servant.",
    "published date": "29 May 2003",
},
{
    "name": "A Thousand Splendid Suns",
    "author": "Khaled Hosseini",
    "subject": "A Thousand Splendid Suns is a 2007 novel by Afghan-American author Khaled Hosseini, following the huge success of his bestselling 2003 debut The Kite Runner. ",
    "published date": "22 May 2007",

},
{
    "name": "And The Mountains Echoed",
    "author": "Khaled Hosseini",
    "subject": "And the Mountains Echoed is the third novel by Afghan-American author Khaled Hosseini. It deviates from Hosseini's style in his first two works through his choice to avoid focusing on any one character.",
    "published date": "21 May 2013",
},
{
    "name": "Harry Potter and the Philosopher’s Stone ",
    "author": "J.K. Rowling",
    "subject": "Love conquers hate. The most significant of Harry's advantages was love. Harry survived Voldemort's curse because of his mother's instinct to protect him. Love literally saved Harry's life, and its power remained as the magic associated with his mother's sacrifice took root in the home of his only surviving relative.",
    "published date": "26 June 1997",
},
{
    "name": "Harry Potter and the Cursed Child",
    "author": "J.K. Rowling",
    "subject": "“Harry Potter and the Cursed Child” is about the journey Albus takes while growing up, and the roles he and his best friend, Scorpius (Draco Malfoy's son), play when dark forces, perhaps in league with Voldemort, once again threaten the fate of the planet.",
    "published date": "30 July 2016",
},
{
    "name": "The Solid Life of Sugar Water",
    "author": " Jack Thorne",
    "subject": "Jack Thorne's superb drama of love and loss.",
    "published date": "2015",
},
{

    "name": "When You Cure Me ",
    "author": "Jack Thorne",
    "subject": "Jack Thorne's play When You Cure Me is a bittersweet and poignant tale of love and misunderstanding – and discovering that what you say and do can be very different from what you think and feel.",
    "published date": "2005",
},
{
    "name": "Slaughterhouse-Five",
    "author": "Kurt Vonnegut",
    "subject": "A Duty-Dance with Death is a 1969 semi-autobiographic science fiction-infused anti-war novel",
    "published date": "31 March 1969",
},
{
    "name": "WIRELESS COMMUNICATIONS",
    "author": "Andreas F.Molisch",
    "subject": "Advanced undergraduate students (with a working knowledge of standard digital communications) · Graduate students and practising engineers who want to learn the subject· ",
    "published date": "2007",
},
{
    "name": "The Lion, the Witch, and the Wardrobe",
    "author": "C. S. Lewis",
    "subject": "fantasy novel for children",
    "published date": "16 October 1950",
},
{

    "name": "The Horse and His Boy",
    "author": "C. S. Lewis",
    "subject": "fantasy novel for children",
    "published date": "6 September 1954",
}
];


const showBooks = (books) => {

    var card = document.getElementById("cards");
    card.innerHTML = "";

    for (var i = 0; i < books.length; ++i) {
        var childDiv1 = document.createElement("div");
        childDiv1.innerHTML = "I am here";

        childDiv1.id = 'card';
        childDiv1.classList.add("card");

        var newdiv = document.createElement("div");
        newdiv.classList.add("card-body");
        var author = document.createElement("p");
        var title = document.createElement("p");
        var subject = document.createElement("p");
        var date = document.createElement("p");

        author.innerHTML = books[i]['author'];
        title.innerHTML = books[i]['name'];
        subject.innerHTML = books[i]['subject'];
        date.innerHTML = books[i]['published date'];


        newdiv.appendChild(author);
        newdiv.appendChild(title);
        newdiv.appendChild(subject);
        newdiv.appendChild(date);
        childDiv1.appendChild(newdiv);
        card.appendChild(childDiv1);


    }
    document.getElementById("error").innerHTML = "Found " + books.length + " results";
}
showBooks(books);


var filerbutton = document.getElementById("filter")

filerbutton.addEventListener('click', (e) => {
    e.preventDefault();

    var typemenu = document.getElementById("typemenu");
    var authormenu = document.getElementById("authormenu");
    var genremenu = document.getElementById("genremenu");
    console.log(typemenu.value, authormenu.value, genremenu.value);
    var filteredbooks = [];
    for (var i = 0; i < books.length; ++i) {
        if (books[i]['author'] == authormenu.value) {
            filteredbooks.push(books[i]);
        }
    }
    showBooks(filteredbooks);
})

var removefilerbutton = document.getElementById("removefilter")

removefilerbutton.addEventListener('click', (e) => {
    e.preventDefault();
    var filteredbooks = [];
    for (var i = 0; i < books.length; ++i) {
        filteredbooks.push(books[i]);
    }

    showBooks(filteredbooks);
})



