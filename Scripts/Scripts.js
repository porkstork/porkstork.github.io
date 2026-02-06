//to make the sponge draggable
dragElement(document.getElementById("SpongeDiv"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  


function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    //stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

}
const draggables = document.querySelectorAll('.SpongeDiv');
 
let activeItem = null;
let initialX, initialY;
let currentX, currentY;
 
// Touch Start: Record initial position
draggables.forEach(item => {
  item.addEventListener('touchstart', (e) => {
    activeItem = item;
    const touch = e.touches[0]; // Get first touch (ignore multi-touch)
    
    // Store initial element position and touch coordinates
    initialX = touch.clientX - item.offsetLeft;
    initialY = touch.clientY - item.offsetTop;
    
    item.classList.add('dragging');
  });
});
 
// Touch Move: Update element position
document.addEventListener('touchmove', (e) => {
  if (activeItem) {
    e.preventDefault(); // Prevent scrolling during drag
    const touch = e.touches[0];
    
    // Calculate new position
    currentX = touch.clientX - initialX;
    currentY = touch.clientY - initialY;
    
    // 
    activeItem.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
}, { passive: false }); // `passive: false` allows preventDefault()
 

document.addEventListener('touchend', () => {
  if (activeItem) {
    activeItem.classList.remove('dragging');
    activeItem.style.transform = ''; // Reset transform
    activeItem = null;
  }
});