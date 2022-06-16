const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {

	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskRemoveButton = document.createElement('button');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskRemoveButton.setAttribute('name', description);
	taskRemoveButton.classList.add('remove-button');
	taskRemoveButton.addEventListener("click", function(){removeTask(description)})
	taskRemoveButton.innerHTML = "X";

    taskContainer.setAttribute('id', description);
	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(taskRemoveButton);

	taskList.appendChild(taskContainer);
}

function removeTask(description)
{
    var containerList = document.getElementsByClassName('task-item');

    for (var i = 0; i < containerList.length; i++)
    {
        if(containerList[i].id == description)
        {
            taskList.removeChild(containerList[i]);
            break;
        }
    }

    
}
