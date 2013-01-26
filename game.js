$(document).ready(function () {

	function update() {

	}

	function draw() {

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
		switch (event.which) {
			case 122:
				$(debug).append("left!");
				break;
			case 47:
				$(debug).append("right!");
				break;
		}
	});

	alert('hi');

});