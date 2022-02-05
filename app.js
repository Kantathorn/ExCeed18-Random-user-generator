const userList = document.querySelector('.user-list')


async function getRandomUser(size){
    const response = await fetch(
        `https://random-data-api.com/api/users/random_user?size=${size}`
    )
    const users = await response.json()
    return users
}

function createUserList(users) {
    users.forEach((user) => {
        const card = document.createElement('div')
        const cardHeader = document.createElement('div')
        const cardBody = document.createElement('div')
        const img = document.createElement('img')
        const username = document.createElement('h4')
        const email = document.createElement('p')
        const employment = document.createElement('p')

        card.classList.add('card')
        cardHeader.classList.add('card-header')
        cardBody.classList.add('card-body')
        username.classList.add('username')
        email.classList.add('email')
        employment.classList.add('employment')

        img.src = user.avatar
        username.innerText = user.username
        email.innerText = user.email
        employment.innerText = user.employment.title

        cardBody.appendChild(img)
        cardBody.appendChild(username)
        cardBody.appendChild(email)
        cardBody.appendChild(employment)

        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        
        userList.appendChild(card)
    })
}

;(async() => {
    const amount = prompt('Enter User amount: ')
    const users = await getRandomUser(amount)
    console.log(users)
    createUserList(users)
})()
