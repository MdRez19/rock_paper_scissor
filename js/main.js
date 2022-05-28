const rock = document.querySelector('.rock')
const scissor = document.querySelector('.scissor')
const paper = document.querySelector('.paper')
const playerOptions = [rock, scissor, paper]
const computerOptions = ['rock','paper','scissor']
const confirm = document.querySelector('.confirm')
const reset = document.querySelector('.reset')
let userOption = '';

playerOptions.forEach(option => {
    option.addEventListener('click', async () => {
        userOption = option.value;
        const response = await fetch(`/api?student=${userOption}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('.results').textContent = data.result;
    })
})