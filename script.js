const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')  //if the input field is empty 
    {
        alert("You must write something! ");
    }
    else{
        let li=document.createElement("li");  //creating an element with this name and storing in li variable
        li.innerHTML =inputBox.value;  //adding text in li
        listContainer.appendChild(li); //display the li under the list container 
        let span = document.createElement("span");  //creating cross tag inside span tag
        span.innerHTML= "\u00d7";//adding content in span tag cross icon added
        li.appendChild(span); //display the span
    }
    inputBox.value = "";//to clear the input field after cleaning the text
    SaveData();// it will save the upadated content in the browser

}
//function for the click event
listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){//   if clicked on li items then it will be checked or unchecked
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){   //if clicked on cross i.e. span it will be delete the parent element i.e list elements
        e.target.parentElement.remove();
        SaveData();
    }

}, false);

//to store the tasks in our browser so that whenever we open the browser we can retrieve them
function SaveData()
{
    localStorage.setItem("data",listContainer.innerHTML);//whatever content is there in listcontainer it will saved in browser with the name data and display them using get item data
}
//to display the data whenever we visit the website again

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();