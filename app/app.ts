function startGame() {
    // starting a new game

    let playerName: string | number = 'Audrey';
    playerName = 42;
    playerName = 'Andres';
    logPlayer(playerName);

    let nullableString: string | null;
    nullableString = null;

    let misteryString: string | null | undefined;
    misteryString = null;
    misteryString = undefined;

    let value: any = 5;
    let fixedString: string = (<number>value).toFixed(4)
    console.log(fixedString); // 5.0000

    fixedString = (value as number).toFixed(4);
    console.log(fixedString);

    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new Game Andy...!';
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);