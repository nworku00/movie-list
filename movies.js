export default class Movie {
    constructor(title, director, haveWatched = 'n') {
        this.title = title;
        this.director = director
        this.haveWatched = haveWatched;
    }
}
