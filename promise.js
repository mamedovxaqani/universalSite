export class UsersApi {
    constructor (url) {
        this.url = url
    }

    getNews() {
        return fetch(this.url).then(response => response.json())
    }
}