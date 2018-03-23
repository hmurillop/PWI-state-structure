var BusCard = (
	function () {
		function BusCard() {
			this.balance = 100;
		}

		BusCard.prototype.chargeCard = function (value) {
			if (this.balance >= value) {
				this.balance -= value;
				return true;
			}

			return false;
		}

		return BusCard;
	}
)();
