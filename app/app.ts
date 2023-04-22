function startGame() {
    // starting a new game

    let playerName: string | number = 'Audrey';
    logPlayer(playerName);

    var messagesElement: HTMLElement | string;

    if (typeof messagesElement == 'string') {
        return messagesElement;
    }
    else {
        return messagesElement;
    }

    messagesElement = 43;

    messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new Game Andy...!';
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);