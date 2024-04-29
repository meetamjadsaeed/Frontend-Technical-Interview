function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);

  // Check if the dragged element is being moved to a different section
  if (draggedElement.parentElement !== event.target) {
    // Remove the dragged element from its original section
    draggedElement.parentNode.removeChild(draggedElement);

    // Append the dragged element to the new section
    event.target.appendChild(draggedElement);
  }
}
