export function createUsersCard(users) {
    localStorage.setItem('users', JSON.stringify(users))
    return users.map((user) => {
        const card = document.createElement('div')
        card.classList.add('card')
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = `${user.name}`
        const cardText = document.createElement('p')
        cardText.classList.add('card-text')
        cardText.innerHTML = `${user.job}`

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('btn', 'btn-danger')
        deleteBtn.textContent = `Delete user №${user.id}`
        deleteBtn.dataset.userId = user.id

        const aboutUserBtn = document.createElement('button')
        aboutUserBtn.classList.add('btn', 'btn-primary')
        aboutUserBtn.textContent = `User interests`

        card.append(cardBody)
        cardBody.append(cardTitle, cardText, deleteBtn, aboutUserBtn)
        return card
    })

    
};

export function bringingUsersToPage(usersCards) {
    const usersRow = document.querySelector('.usersRow')
    
    usersCards.forEach(usersCard => {
        const col = document.createElement('div')
        col.classList.add('col-xl-6')

        col.append(usersCard)
        usersRow.append(col)
    });
}