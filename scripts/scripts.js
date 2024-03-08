// const student = {};
// //const studentData = new Object();

// student['name'] = 'Chika';
// student.age = 34;
// student['department'] = 'Computer Engineering';
// console.log('The name of the student is ' + student.name);
// console.log(`The age of the student is ${student.age} \n the department is ${student.department}`);
// console.log(student);

//New line
window.addEventListener("DOMContentLoaded", (event) => {
  const taskName = document.getElementById('task-name');
  const taskDescription = document.getElementById("task-description");
  const button = document.getElementById("add-todo");
  const listContainer = document.getElementById('lists');
  const taskArray = [];

  button.addEventListener('click', () => {
    if (taskName.value === '' || taskDescription.value === '') {
      alert('Please fill this form!');
      return;
    }
    const task = {};
    task['nameOfTask'] = taskName.value;
    task['descriptionOfTask'] = taskDescription.value;
    taskArray.push(task);
    taskName.value = "";
    taskDescription.value = "";
    
    const li = document.createElement("li");
    for (let i = 0; i < taskArray.length; i++) {
      li.innerHTML = `${taskArray[i].nameOfTask} <br /> ${taskArray[i].descriptionOfTask}`;
      listContainer.appendChild(li);

    }

  })

})