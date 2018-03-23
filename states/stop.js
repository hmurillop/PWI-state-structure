var Stop = (
	function () {
		function Stop(robot) {
			State.call(this, robot);
		}

		//Inheritance
		Stop.prototype = Object.create(State.prototype);
		Stop.prototype.constructor = Stop;

		Stop.prototype.start = function () {
			console.log('Walking...');
			this.robot.state = new walking(this.robot);
		}

		Stop.prototype.chargingCompleted = function () {
			if (this.robot.busCard.chargeCard(this.price)) {
				console.log('Change to open state!');
				
			} else {
				this.payFailed();
			}
		}

		Stop.prototype.notEnergy = function () {
			console.log('Pay failed!');
		}

		return Stop;
	}
)();