/*
  WRITE YOUR SOLUTION HERE
*/

class Movie {
    constructor(title,director,genre,releaseYear, rating){
        this.title=title;
        this.director=director;
        this.genre=genre;
        this.releaseYear=releaseYear;
        this.rating=rating;
    }
    get overview() {
        return `${this.title}, 
        a/an ${this.genre} film 
        directed by ${this.director} 
        was released in ${this.releaseYear}. 
        It received a rating of ${this.rating}.`
    }
}

const Batman = new Movie(
    "The Dark Knight",
    "Christopher Nolan",
    "Action",
    2008,
    83
);

console.log(Batman)
console.log(Batman.overview)
console.log(Batman.title) // The Dark Knight
