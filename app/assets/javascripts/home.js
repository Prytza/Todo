/*
if (Modernizr.draganddrop) {
	  // Browser supports HTML5 DnD.
	  alert("Support for HTML5 DnD");
	} else {
	  // Fallback to a library solution.
	  alert("No support for HTML5 DnD");
	}
*/

var dragItemElement = null;

function doWhenLoad() {

	/*Hämtar draggable items*/
	var bikes = $("#drag_items li");
	addEventListenersForDragItems (bikes, "list");

	var dropZones = $(".drop_zones");
	addEventListenersForDropZones(dropZones, "list");

}

function addEventListenersForDragItems (dragitems, type) {

	if (type == "list") {
		for (var i = 0; i < dragitems.length; i++) {
			dragitems[i].addEventListener('dragstart', dragStartList, false);
			dragitems[i].addEventListener('dragend', dragEndList, false);
		}
	}
	else if (type == "panel") {
		for (var i = 0; i < dragitems.length; i++) {
			dragitems[i].addEventListener('dragstart', dragStartPanel, false);
			dragitems[i].addEventListener('dragend', dragEndPanel, false);
		}
	}
	else {
		console.log("param 'type' must be set to 'list' or 'panel'");
	}

}

function addEventListenersForDropZones (dropZones, type) {

	if (type == "list") {
		for (var i = 0; i < dropZones.length; i++) {
			dropZones[i].addEventListener("dragover", dragOverList, false);

			dropZones[i].addEventListener("dragenter", dragEnterList, false);
			
			dropZones[i].addEventListener("dragleave", dragLeaveList, false);
			dropZones[i].addEventListener("dragexit", dragLeaveList, false); // Firefox
			
			dropZones[i].addEventListener("drop", droppedList, false); // borde funka?! Firefox from version 3.5, Google Chrome, Safari, Internet Exlorer
			dropZones[i].addEventListener("dragdrop", droppedList, false); // Firefox before version 3.5
		}
	}
	else if (type == "panel") {
		for (var i = 0; i < dropZones.length; i++) {
			dropZones[i].addEventListener("dragover", dragOverPanel, false);

			dropZones[i].addEventListener("dragenter", dragEnterPanel, false);
			
			dropZones[i].addEventListener("dragleave", dragLeavePanel, false);
			dropZones[i].addEventListener("dragexit", dragLeavePanel, false); // Firefox
			
			dropZones[i].addEventListener("drop", droppedPanel, false); // borde funka?! Firefox from version 3.5, Google Chrome, Safari, Internet Exlorer
			dropZones[i].addEventListener("dragdrop", droppedPanel, false); // Firefox before version 3.5
		}
	}
	else {
		console.log("param 'type' must be set to 'list' or 'panel'");
	}

}

function dragStartList (event) {
	var format = "Text";
	event.dataTransfer.setData(format, event.currentTarget.innerHTML);
}

function dragStartPanel (event) {
	var format = "Text";
	event.dataTransfer.setData(format, event.currentTarget.innerHTML);
	dragItemElement = this;
	// alert(dragItemElement);

	//event.dataTransfer.effectAllowed = 'move';
  	//event.dataTransfer.setData('text/html', this.innerHTML);
}

function dragEndList (event) {

	var draggableItem = $(event.currentTarget);

	draggableItem.addClass("used_items");
	draggableItem.attr("draggable", "false");
	draggableItem.css("cursor", "default");

}

function dragEndPanel (event) {

	console.log(event);

	var draggableItem = $(event.currentTarget);

	console.log(draggableItem);

	draggableItem.attr("draggable", "false");
	draggableItem.css({background: "none"});
	draggableItem.text("");

	var format = "Text";
	var formatContent = event.dataTransfer.getData(format);
	console.log("formatContent = " + formatContent);

}

function dragEnterList (event) {

	if (event.preventDefault) {
    	event.preventDefault();
	}

	var draggableItem = $(event.currentTarget);
	draggableItem.addClass("highlight");

	return false;

}

function dragEnterPanel (event) {

	if (event.preventDefault) {
    	event.preventDefault();
	}

	var draggableItem = $(event.currentTarget);
	draggableItem.addClass("highlight");

	return false;

}

function dragOverList (event) {

	if (event.preventDefault) {
    	event.preventDefault(); // Necessary. Allows us to drop.
	}

	return false;

}

function dragOverPanel (event) {

	if (event.preventDefault) {
    	event.preventDefault(); // Necessary. Allows us to drop.
	}

	return false;

}

function dragLeaveList (event) {

	if (event.preventDefault) {
    	event.preventDefault();
	}

	var draggableItem = $(event.currentTarget);
	draggableItem.removeClass("highlight");

}

function dragLeavePanel (event) {

	if (event.preventDefault) {
    	event.preventDefault();
	}

	var draggableItem = $(event.currentTarget);
	draggableItem.removeClass("highlight");

}

function droppedList (event) {

	event.preventDefault(); // utan denna sker en redirect url på eventets innehåll.. firefox default?
	// event.stopPropagation() // borde fungera med denna för att slippa ovan nämnda händelse.

	var format = "Text";

	var content = event.dataTransfer.getData(format).toLowerCase();
	console.log(content);
	//event.dataTransfer.clearData(format);

	event.currentTarget.innerHTML = event.currentTarget.id;

	
	var targetElement = $(event.currentTarget);

	targetElement.text(content)
				 .attr("draggable", "true")
				 .css("color", "lime")
				 .css('background', '#fff url("/assets/' + content + '.jpg") no-repeat bottom left')
				 .css('background-size', '100% Auto');

	var draggableItem = $(event.currentTarget);
	draggableItem.removeClass("highlight");

	draggableItem.removeClass("used_items");

	addEventListenersForDragItems(targetElement, "panel");
	addEventListenersForDropZones(targetElement, "panel");

	var targetElementId = event.currentTarget.id;
	console.log(targetElementId);

}

function droppedPanel (event) {

	event.stopPropagation() // borde fungera med denna för att slippa ovan nämnda händelse.
	event.preventDefault(); // utan denna sker en redirect url på eventets innehåll.. firefox default?

	// Don't do anything if dropping the same column we're dragging.
  	if (dragItemElement != this) {
	    // Set the source column's HTML to the HTML of the column we dropped on.
	    
	    //dragItemElement.innerHTML = this.innerHTML;
	    //this.innerHTML = event.dataTransfer.getData('text/html');
  		
	    // console.log( "dragItemElement " + dragItemElement);

	    var format = "Text";

		var content = event.dataTransfer.getData(format).toLowerCase();
		console.log(content);
		// event.dataTransfer.clearData(format);

		event.currentTarget.innerHTML = event.currentTarget.id;

		var targetElement = $(event.currentTarget);

		targetElement.text(content)
					 .attr("draggable", "true")
					 .css("color", "lime")
					 .css('background', '#fff url("/assets/' + content + '.jpg") no-repeat bottom left')
					 .css('background-size', '100% Auto');

		var draggableItem = $(event.currentTarget);
		draggableItem.removeClass("highlight");

		draggableItem.removeClass("used_items");

		addEventListenersForDragItems(targetElement, "panel");
		addEventListenersForDropZones(targetElement, "panel");

		var targetElementId = event.currentTarget.id;
		console.log(targetElementId);


  	}

	

  return false;

}

$(function () {

	doWhenLoad();

	$("#viewPickedItems").click(function () {

		var pickedValues = $(".drop_zones");
		var values = [];
		var list = "";

		for (var i = 0; i < pickedValues.length; i++) {

			if (pickedValues[i].innerHTML == "") {
				values.push(0);
			}
			else {
				values.push(pickedValues[i].innerHTML);
			}

		}

		console.log(values);

	});

});