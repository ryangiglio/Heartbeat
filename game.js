$(document).ready(function () {

	var STATE_TITLE = 0;
	var STATE_GAME = 1;
	var STATE_DEATH = 2;

	var whichKey = 0;

	var gameState = STATE_GAME;

	var person;

	function init() {
		person = new Person();
	}

	function update() {
		switch (gameState) {
			case STATE_TITLE:
				break;
			case STATE_GAME:

				person.update();

				break;
			case STATE_DEATH:
				break;
		}
	}

	function draw() {
		if (person.walk) {
			$(debug).html("leg:" + person.leg + " whichKey:" + whichKey + " " + (this.leg == 0 ? "left!" : "right!"));
		}
		else {
			$(debug).html("not walking");
		}
	}


	function Person() {
		this.leg = 0;
		this.walk = false;
		this.walkCounter = 0;
		this.walkCheck = false;
		this.lastTime = new Date();
		this.update = function () {
			this.walkCheck = false;
			if (whichKey == 0 && this.leg == 1) {
				this.leg = 0;
				this.walk = true;
				this.walkCheck = true;
			} else if (whichKey == 1 && this.leg == 0) {
				this.leg = 1;
				this.walk = true;
				this.walkCheck = true;
			}

			if (this.walkCheck) {
				//determine time since last step

				var now = new Date();
				var elapsed = now - this.lastTime;
				this.lastTime = now;

				$("#rate").html(elapsed);
			}
		}
	}

	timer.onTick = function (dt) {

		update();
		draw();

	}

	input.onMouseDown = function (x, y) {
		// handle mousedown
	}

	input.onMouseUp = function (x, y) {
		// handle mouseup
	}

	input.onMouseMove = function (x, y) {
		// handle mousemove
	}

	$(document).keypress(function (event) {
		person.walk = false;
		switch (event.which) {
			case 122:
				whichKey = 0;
				break;
			case 47:
				whichKey = 1;
				break;
		}
	});


	init();
});