const playerImg = document.querySelector('.player_img')
const computerImg = document.querySelector('.computer_img')
const playerChoice = document.querySelector('.playerChoice')
const computerChoice = document.querySelector('.computerChoice')
const playerOptions = document.querySelectorAll('.playerOptions')
const result = document.querySelector('.result')

//add event listeners
playerOptions.forEach(selection => {
    selection.addEventListener('click', async (event) => {
        const targetSelection = event.target.value;
        let player = '';
        const res = await fetch(`/api?student`)
        const data = await res.json()

        if (targetSelection === 'rock') {
            playerImg.src = 'img/rock.png';
            player = targetSelection
        } else if (targetSelection === 'paper') {
            playerImg.src = 'img/paper.png';
            player = targetSelection
        } else if (targetSelection === 'scissor') {
            playerImg.src = 'img/scissor.png';
            player = targetSelection
        }

        computerImg.src = data.img;
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