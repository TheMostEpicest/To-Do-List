var todonum = parseInt(localStorage.getItem("totalnum"));
document.addEventListener("onLoad", onLoad());
function addLine() {
    if (document.getElementById("newToDo").value !== "") {
        var newDiv = document.createElement("div");
        document.body.insertBefore(newDiv, document.getElementById("test"));
        var newButton = document.createElement("button");
        newDiv.appendChild(newButton);
        var newP = document.createElement("p"); 
        newDiv.appendChild(newP); 
        document.getElementsByTagName("div")[todonum + 2].classList.add("div-ToDo");
        document.getElementsByTagName("div")[todonum + 2].classList.add(todonum);
        document.getElementsByTagName("div")[todonum + 2].setAttribute("id", todonum);
        document.getElementsByTagName("p")[todonum].classList.add("toDo");
        document.getElementsByTagName("p")[todonum].classList.add(todonum);
        document.getElementsByTagName("button")[todonum + 1].classList.add(todonum);
        document.getElementsByTagName("button")[todonum + 1].setAttribute("onClick", "removeLine(" + todonum + ")")
        document.getElementsByTagName("button")[todonum + 1].innerHTML = "x";
        document.getElementsByClassName(todonum)[1].style.display = "inline";
        document.getElementsByClassName(todonum)[2].style.display = "inline";
        localStorage.setItem(todonum, document.getElementById("newToDo").value);
        document.getElementsByClassName("toDo")[todonum].innerHTML = localStorage.getItem(todonum);
        document.getElementById("newToDo").value = "";
        todonum += 1;
        localStorage.setItem("totalnum", todonum)
    } else {
        alert("To Do must not be empty.");
    }
}
function onLoad() {
    for (i = 0; i < parseInt(localStorage.getItem("totalnum")); i++) {
        var newDiv = document.createElement("div");
        document.body.insertBefore(newDiv, document.getElementById("test"));
        var newButton = document.createElement("button");
        newDiv.appendChild(newButton);
        var newP = document.createElement("p"); 
        newDiv.appendChild(newP); 
        document.getElementsByTagName("div")[i + 2].classList.add("div-ToDo");
        document.getElementsByTagName("div")[i + 2].classList.add(i);
        document.getElementsByTagName("div")[i + 2].setAttribute("id", i);
        document.getElementsByTagName("p")[i].classList.add("toDo");
        document.getElementsByTagName("p")[i].classList.add(i);
        document.getElementsByTagName("button")[i + 1].classList.add(i);
        document.getElementsByTagName("button")[i + 1].setAttribute("onClick", "removeLine(" + i + ")")
        document.getElementsByTagName("button")[i + 1].innerHTML = "x";
        document.getElementsByClassName(i)[1].style.display = "inline";
        document.getElementsByClassName(i)[2].style.display = "inline";
        document.getElementsByClassName("toDo")[i].innerHTML = localStorage.getItem(i);
    }
}
function removeLine(line) {
    document.body.removeChild(document.getElementById(line));
    todonum -= 1;
    localStorage.clear();
    localStorage.setItem("totalnum", todonum)
    for (i = 0; i < todonum; i++) {
        localStorage.setItem(i, document.getElementsByClassName("toDo")[i].innerHTML);
    }
}
