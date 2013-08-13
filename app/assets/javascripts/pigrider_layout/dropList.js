var gnDropListCloseTimeout=500;
var goDropListCloseTimer=null;
var goDropListEntry=null;


// open hidden layer
function openDropList(sElementID) { 
  // cancel close timer
  removeDropListCloseTimer();

  // close old layer
  if (goDropListEntry) {
    goDropListEntry.style.visibility = 'hidden';
  }

  // get new layer and show it
  goDropListEntry=document.getElementById(sElementID);
  goDropListEntry.style.visibility = 'visible';
}


// close showed layer
function closeDropList() {
  if (goDropListEntry) {
    goDropListEntry.style.visibility = 'hidden';
  }
}


// go close timer
function setDropListCloseTimer() {
  goDropListCloseTimer=window.setTimeout(closeDropList, gnDropListCloseTimeout);
}


// cancel close timer
function removeDropListCloseTimer() {
  if (goDropListCloseTimer) {
    window.clearTimeout(goDropListCloseTimer);
    goDropListCloseTimer=null;
  }
}


// close layer when click-out
document.onclick = closeDropList; 
