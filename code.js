function createNote(){
   //create delete button
   const deleteNote = document.createElement("img");
     deleteNote.src = "images/Trash_Icon.png";
     deleteNote.classList.add("delete-p");
   
   //create const for note display area
   const noteDisplay = document.getElementById("note-display");
    
   //create note as a textarea
   const note = document.createElement("textarea");
     note.classList.add("note");
    
   //create const for color choice dropdown
   const colorChoice = document.getElementById("select-color");
    
   //create const for selected color option
   const color = colorChoice.options[colorChoice.selectedIndex].text;
  
   //add a different class depending on selected color choice
   if(color == "White"){
      note.classList.add("white");
   } else if (color == "Pink"){
      note.classList.add("pink");
   } else if (color == "Yellow"){
      note.classList.add("yellow");
   } else if (color == "Green"){
      note.classList.add("green");
   } else if (color == "Blue"){
      note.classList.add("blue");
   } else if (color == "Purple"){
      note.classList.add("purple");
   }
   
   //append note and delete button to parent
   noteDisplay.appendChild(note);
   noteDisplay.appendChild(deleteNote);
   
   //when delete button is clicked, remove note and delete button from parent
   deleteNote.addEventListener("click", ()=>{
     noteDisplay.removeChild(note);
     noteDisplay.removeChild(deleteNote);
   });
};
  
  //when clear all button is clicked, make note display area blank
  clear.addEventListener("click", ()=>{
     document.getElementById("note-display").innerHTML = "";
  });
  