console.log("welcome notes")
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";
    console.log(notesObj)

    showNotes();
});


// Function to show elements from localStorage
function showNotes() {

    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
        <div class="card my-3 mx-2" style="width: 18rem;">
               
        <div class="card-body">
          <h5 class="card-title">${index + 1}</h5>
          <p class="card-text">${element}</p>
          <a id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
        </div>
      </div>
        `

    });
    let notesEl = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEl.innerHTML = html;
    }
    else {
         notesEl.innerHTML = `Nothing to show! Use "Add a Note" section above`;
    }


}


// function to delete a note
function deleteNote(index){
    console.log('I am deleting', index)

    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}