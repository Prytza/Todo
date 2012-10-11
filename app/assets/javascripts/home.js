/*
if (Modernizr.draganddrop) {
	  // Browser supports HTML5 DnD.
	  alert("Support for HTML5 DnD");
	} else {
	  // Fallback to a library solution.
	  alert("No support for HTML5 DnD");
	}
*/

function doWhenLoad() {

	/*Gör att andra objekt än img och a taggar fungerar med DnD i firefox*/
	/*
	var dragItems = document.querySelectorAll('[draggable=true]');

	for (var i = 0; i < dragItems.length; i++) {
	  dragItems[i].addEventListener('dragstart', function (event) {
		// store the ID of the element, and collect it on the drop later on
		
		// event.originalEvent.dataTransfer.setData('Text', this.id)
		event.dataTransfer.setData('Text', this.id);
	  }, false);
	}
	*/

	/*Hämtar draggable items*/
	var bikes = $("#drag_items li");
	// console.log(bikes);
	
	for (var i = 0; i < bikes.length; i++) {
		bikes[i].addEventListener('dragstart', dragStart, false);
		bikes[i].addEventListener('dragend', dragEnd, false);
	}

	var dropZones = $(".drop_zones");
	// console.log(dropZones);

	for (var i = 0; i < dropZones.length; i++) {
		dropZones[i].addEventListener("dragover", dragOver, false);

		dropZones[i].addEventListener("dragenter", dragEnter, false);
		
		dropZones[i].addEventListener("dragleave", dragLeave, false);
		dropZones[i].addEventListener("dragexit", dragLeave, false); // Firefox
		
		dropZones[i].addEventListener("drop", dropped, false); // borde funka?! Firefox from version 3.5, Google Chrome, Safari, Internet Exlorer
		dropZones[i].addEventListener("dragdrop", dropped, false); // Firefox before version 3.5
	}
}

function dragStart (event) {

	//console.log(event);
	// alert("start");
	event.dataTransfer.setData('Text', event.currentTarget.innerHTML);
}

function dragEnd (event) {

	console.log(event);

	var draggableItem = $(event.currentTarget);

	// console.log(draggableItem);

	draggableItem.addClass("used_items");

	//console.log("attributes = " + event.attributes);

}

function dragEnter (event) {

	if (event.preventDefault) {
    	event.preventDefault(); // Necessary. Allows us to drop.
	}

	var draggableItem = $(event.currentTarget);
	draggableItem.addClass("highlight");

	return false;

}

function dragOver (event) {

	if (event.preventDefault) {
    	event.preventDefault(); // Necessary. Allows us to drop.
	}

	return false;

	/*
	event.preventDefault();

	var id = event.dataTransfer.getData('Text');
	//console.log(id);

	event.currentTarget.innerHTML = id;
	*/

}

function dragLeave (event) {

	if (event.preventDefault) {
    	event.preventDefault(); // Necessary. Allows us to drop.
	}

	//event.currentTarget.innerHTML = "";

	var draggableItem = $(event.currentTarget);
	draggableItem.removeClass("highlight");

}

function dropped (event) {

	event.preventDefault(); // utan denna sker en redirect url på eventets innehåll.. firefox default?
	// event.stopPropagation() // borde fungera med denna för att slippa ovan nämnda händelse.

	var content = event.dataTransfer.getData('Text').toLowerCase();
	console.log(content);

	event.currentTarget.innerHTML = event.currentTarget.id;

//	$(event.currentTarget.id);
	var targetElement = $(event.currentTarget)
	console.log(targetElement);
	
	targetElement.text("Hej")
				 .css("color", "lime")
				 .css('background', '#fff url("/assets/' + content + '.jpg") no-repeat bottom left')
				 .css('background-size', '100% Auto');

	var draggableItem = $(event.currentTarget);
	draggableItem.removeClass("highlight");
}

/*
window.addEventListener("load", doWhenLoad, false);
*/

$(function () {

	doWhenLoad();

});