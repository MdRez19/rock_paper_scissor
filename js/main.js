const playerChoice = document.querySelector('.playerChoice')
const computerChoice = document.querySelector('.computerChoice')
const playerOptions = document.querySelectorAll('.playerOptions')
const result = document.querySelector('.result')

//add event listeners
playerOptions.forEach(selection => {
    selection.addEventListener('click', async (event) => {
        const targetSelection = event.target.value;
        let player = '';
        const res = await fetch(`/api?`)
        const data = await res.json()

        if (targetSelection === 'rock') {
            player = targetSelection
        } else if (targetSelection === 'paper') {
            player = targetSelection
        } else if (targetSelection === 'scissor') {
            player = targetSelection
        }
        const computer = data.result;
        winner(player, computer)
    })
})


// WIN CONDITIONS
function winner(player, computer) {
    if (player === computer) {
        result.textContent = 'Tie!'
    } else if (player === 'rock') {
        if (computer === 'paper') {
            result.textContent = 'Computer Wins!';
        } else {
            result.textContent = 'You Win!';
        }
    } else if (player === 'scissor') {
        if (computer === 'rock') {
            result.textContent = 'Computer Wins!';
        } else {
            result.textContent = 'You Win!';
        }
    } else if (player === 'paper') {
        if (computer === 'scissor') {
            result.textContent = 'Computer Wins!';
        } else {
            result.textContent = 'You Win!';
        }
    }
    playerChoice.textContent = player
    computerChoice.textContent = computer
}