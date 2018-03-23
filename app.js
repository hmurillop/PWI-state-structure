window.addEventListener('load', init, false);

function init() {
    console.log('init');
    var robot = new Robot();

    user.debugState();

    user.purchaseTicket();

    user.debugState();

    user.purchaseTicket();

    user.goThruGate();

    user.debugState();

    user.goThruGate();
}