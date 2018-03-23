var Robot = (
	function () {

		function Robot() {
			this.state = new stop(this);
			// this.busCard = new BusCard();
		}

		Robot.prototype.move = function () {
			this.state.start();
		}	

		Robot.prototype.purchaseTicket = function () {
			this.gateState.payOk();
		}

		Robot.prototype.goThruGate = function () {
			this.gateState.enter();
		}

		Robot.prototype.debugState = function () {
			console.log(this.gateState);
		}

		return Robot;
	}
)();
