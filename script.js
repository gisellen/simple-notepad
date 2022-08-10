$("#submit").keypress(e => {
    if (e.key == "Enter") {
        EntryString = document.getElementById("submit").value;
        if (EntryString == "") {
          // if text is empty, do not send
          alert("please enter a text");
        } else {
          output(EntryString);
          autoScroll();
          e.currentTarget.value = null; //clears the input text
        }
      }
})


function output(EntryString) { // formats the entry
  /* DATE AND TIME */
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes();

  //parent element
  const Element = document.getElementById("textarea");

  //adding a new elements
  let NewEntry = document.createElement("p");
  let lineBreak = document.createElement("br");

  //getting user input
  TodayEntry = mm + "/" + dd + "/" + yyyy + " " + time;
  UserInput = document.createTextNode("(" + TodayEntry + ") " + EntryString);

  //add elements into html
  Element.appendChild(NewEntry);
  Element.appendChild(lineBreak);
  NewEntry.appendChild(UserInput);
}

function autoScroll() { // when the user submits an entry, it will autoscroll down
  $(function () {
    var scroll = $("#textarea");
    var height = scroll[0].scrollHeight;
    scroll.scrollTop(height);
  });
}
