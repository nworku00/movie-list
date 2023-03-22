export default class User {
    constructor(username,movies=[]) {
        this.username = username
        this.movies=movies
    }
    watch(movie) {
        movie.haveWatched = 'y'
        return movie.haveWatched
    }
    addMovie(...movie) {
        this.movies = this.movies.concat(movie);
        return this.movies;
    }
    deleteMovie(movie) {
        const index = this.movies.indexOf(movie);
        if (index > -1) {
            this.movies.splice(index, 1);
        }
    }
}





