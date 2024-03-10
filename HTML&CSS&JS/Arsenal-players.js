const url = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal';
const playersContainer = document.getElementById('playersContainer');

try {
    fetch(url)
        .then(res => res.json())
        .then(result => {
            const players = result.player; 
            players.forEach(player => {
                const playerCard = document.createElement('div');
                playerCard.classList.add('player-card');

                const playerName = document.createElement('h3');
                playerName.textContent = player.strPlayer;

                const playerPosition = document.createElement('p');
                playerPosition.textContent = 'Position: ' + player.strPosition;

                const playerNationality = document.createElement('p');
                playerNationality.textContent = 'Nationality: ' + player.strNationality;

                playerCard.appendChild(playerName);
                playerCard.appendChild(playerPosition);
                playerCard.appendChild(playerNationality);

                playersContainer.appendChild(playerCard);
            });
        });
} catch (error) {
    console.error(error);
}
