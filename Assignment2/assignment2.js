//global variable to get a button and list by their id
var button1=document.getElementById("button1");
var ul=document.getElementById('goalsList');

//Event handler to add new typed goal into goal list
button1.onclick = function() {
  var goal = document.getElementById("goal").value;
	var h2=document.createElement("h2");
//convert h2 element into text content
  h2.textContent=goal;
	var li=document.createElement('li');
	ul.appendChild(li);
	li.appendChild(h2);

//Creating button in dom to complete a goal or delete a goal
 h2.innerHTML = `<btn class='goal'> ${goal}</btn> <button class='completeGoal'>Complete Goal</button><button class='deleteGoal'>Delete Goal</button>`;
};

//Event handler when click on delete button it is removed from goal list
ul.addEventListener('click', function (e) {

//target a button by its class
  if (e.target.classList.contains('deleteGoal')) {
		//remove a element
		e.target.parentElement.remove();

	}
});

// Event handler to checkout a goal that is completed
ul.addEventListener('click', function (e) {
var li = document.createElement("li");
 		var ul=document.getElementById('goalsCompleted');
		// button to checkout a goal which is complteded targeted by it sibling element
    li.innerHTML = `<btn class='goalsCompleted'>${e.target.previousElementSibling.textContent}</btn> <button class='deleteCompleted'> Delete Completed Goal </button>`;
    ul.appendChild(li);
});

//text decoration to deleteCompleted button
var completeGoal=document.getElementById('goalsCompleted');
completeGoal.addEventListener('click', function (e) {
  if (e.target.classList.contains('deleteCompleted')) {
		e.target.parentElement.style.textDecoration = "line-through";
	}
	else {
		e.target.parentElement.remove();
	}
});
