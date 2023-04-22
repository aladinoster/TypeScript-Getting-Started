function startGame() {
    var playerName = 'Audrey';
    playerName = 42;
    playerName = 'Andres';
    logPlayer(playerName);
    var nullableString;
    nullableString = null;
    var misteryString;
    misteryString = null;
    misteryString = undefined;
    var value = 5;
    var fixedString = value.toFixed(4);
    console.log(fixedString);
    fixedString = value.toFixed(4);
    console.log(fixedString);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new Game Andy...!';
}
function logPlayer(name) {
    console.log("New game starting for player: ".concat(name));
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map