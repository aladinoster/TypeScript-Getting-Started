function startGame() {
    var playerName = 'Audrey';
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new Game Andy...!';
}
function logPlayer(name) {
    console.log("New game starting for player: ".concat(name));
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map