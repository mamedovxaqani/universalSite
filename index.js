import { UsersApi } from './promise.js'
import { createUsersCard, bringingUsersToPage } from './functions.js' 

let responseUrl = "https://61c890b1adee460017260d49.mockapi.io/api/v1/users"


document.addEventListener('DOMContentLoaded', () => {
    let users = new UsersApi(responseUrl)
    users.getNews()
    .then(createUsersCard)
    .then(bringingUsersToPage)
})