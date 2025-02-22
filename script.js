
const name = document.getElementById("taskName")
const listName = document.getElementById("List")
const listItem = document.getElementById("item")

function addTask() {
    if(name.value === ''){
     alert("Please add your task name!")}
else{
let li = document.createElement(
    "li");
    li.innerHTML = name.value;
    listName.appendChild(li);
    name.value ='';
    let cross = document.createElement("span");
       cross.innerHTML = "X";
       li.appendChild(cross);
       saveData();
}
}

function addTask2() {
    if(event.code === 'Enter' && name.value!==''){
   let li = document.createElement(
       "li");
       li.innerHTML = name.value;
       listName.appendChild(li);
       name.value ='';
       let cross = document.createElement("span");
       cross.innerHTML = "X";
       li.appendChild(cross);
       saveData();

   }
   else{}
}

listName.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})


document.getElementById('resetBtn').addEventListener('click', function() {
    // Select all list items
    var listItems = document.querySelectorAll('#List li');

    // Loop through each list item and set the 'highlight' class
    listItems.forEach(function(item) {
        item.classList.remove('checked');
        saveData();
    });
});

function saveData() {
    localStorage.setItem("data", listName.innerHTML)
}

function showTask() {
    listName.innerHTML = localStorage.getItem("data");
}

showTask();


function openUI() { 
    var x = document.getElementById("colorUI");
    if (x.style.display === "block") {
      x.style.display = "none";
      saveData();
    } else {
      x.style.display = "block";
      saveData();
    }
  }
  
  
  function changeRootColor() {
    // Get the value from the color picker
    const color = document.getElementById("mainColor").value;

    // Change the CSS variable in :root
    document.documentElement.style.setProperty('--color-1', color);
    saveData();
}

function changeRootColor2() {
    // Get the value from the color picker
    const color2 = document.getElementById("secondColor").value;

    // Change the CSS variable in :root
    document.documentElement.style.setProperty('--color-2', color2);
    saveData();
}

function reverse() {
    const color2 = document.getElementById("secondColor").value;
    const color1 = document.getElementById("mainColor").value;
    const currentColor1 = getComputedStyle(document.documentElement).getPropertyValue('--color-1').trim();
    const currentColor2 = getComputedStyle(document.documentElement).getPropertyValue('--color-2').trim();

      if (currentColor1 === color2 && currentColor2 === color1) {
        // If already swapped, revert to the original colors
        document.documentElement.style.setProperty('--color-1', color1);
        document.documentElement.style.setProperty('--color-2', color2);
        document.getElementById('mainColor').value = currentColor1;
        document.getElementById('secondColor').value = currentColor2;
    } else {
        // Otherwise, swap the colors
        document.documentElement.style.setProperty('--color-1', color2);
        document.documentElement.style.setProperty('--color-2', color1);
        document.getElementById('mainColor').value = currentColor2;
        document.getElementById('secondColor').value = currentColor1;
    }
}



function applySavedColors() {
    const savedMainColor = localStorage.getItem('mainColor');
    const savedsecondColor = localStorage.getItem('secondColor');

    if (savedMainColor) {
        document.documentElement.style.setProperty('--color-1', savedMainColor);
        document.getElementById('mainColor').value = savedMainColor;
    }

    if (savedsecondColor) {
        document.documentElement.style.setProperty('--color-2', savedsecondColor);
        document.getElementById('secondColor').value = savedsecondColor;
    }
}

// Apply saved colors when the page loads
applySavedColors();

// Save the colors when the user clicks the button
document.getElementById('saveColors').addEventListener('click', () => {
    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--color-1').trim();
    const secondColor = getComputedStyle(document.documentElement).getPropertyValue('--color-2').trim();
    // Save the colors in localStorage
    localStorage.setItem('mainColor', mainColor);
    localStorage.setItem('secondColor', secondColor);

    // Apply the colors
    document.documentElement.style.setProperty('--color-1', mainColor);
    document.documentElement.style.setProperty('--color-2', secondColor);
});
  