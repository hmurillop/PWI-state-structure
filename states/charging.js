var walking = (
	function () {
		function walking(user) {
			GateState.call(this, user);
		}

		//Inheritance
		walking.prototype = Object.create(GateState.prototype);
		walking.prototype.constructor = walking;

		walking.prototype.enter = function () {
			this.user.gateState = new GateStateClose(this.user);
		}

		walking.prototype.payOk = function () {
			console.log('Alredy pay for the ticket, you can enter now!');
		}

		walking.prototype.payFailed = function () {
			console.log('Alredy pay for the ticket!');
		}

		return walking;
	}
)();