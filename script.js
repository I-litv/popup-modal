var aboutMe ="";

$(document).ready(function () {
	$(document).on("keydown", startCollect);
})

function startCollect(e) {
	if (e.key=='z') {
		console.log('start collection');
		$(document).off("keydown", startCollect);
		$(document).on("keydown", collectSymbol);
	}
}

function collectSymbol(e) {
	if (e.key==''|| e.key=='Escape') {
		stopCollect();
	}
	else {
		aboutMe += e.key;
		console.log(aboutMe);
		if (aboutMe=='litvyshchenko') {
			$('#exampleModal').modal({
				show: true
			})
		}
	}
}

function stopCollect() {
	console.log('stop');
	aboutMe = '';
		$(document).on("keydown", startCollect);
		$(document).off("keydown", collectSymbol);
}

