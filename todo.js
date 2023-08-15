
//verificam daca s-a apasat tasta enter
document.addEventListener("keyup", e =>{
    if(e.key==='Enter')
        newElement();
});

const ul=document.getElementById('lista_taskuri');

function newElement() {
    var inputValue = document.getElementById("text").value;
    if (inputValue === '') 
    {
      alert("Nu ai completat căsuța!!!");
    } 
    else 
    {
      document.getElementById("text").value = "";

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = "item1";
      checkbox.id = "item1";
      checkbox.checked=false;
      checkbox.classList.add("list-item-element1");

      var label = document.createElement("label");
      label.htmlFor = inputValue;
      label.appendChild(document.createTextNode(inputValue));

      const delete_button= document.createElement("button");
      delete_button.classList.add("delete");
      delete_button.innerHTML = "Delete";
      delete_button.classList.add("list-item-element3");

      var li = document.createElement("li");
      li.classList.add("new_task");

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(delete_button);

    
      ul.appendChild(li);


      checkbox.addEventListener('change', function(event) {
        if(checkbox.checked)
        {
          label.classList.add("check");
          li.classList.add("task_completat");
        }
        else
        {
          label.classList.remove("check");
          li.classList.remove("task_completat");
        }
      });

      delete_button.addEventListener('click', ()=>{
        if (confirm("Sigur vrei sa stergi acest task?")) {
            ul.removeChild(li);
        }
      })
    }
}

const todoList = document.querySelector('#lista_taskuri');
const ActiveButton = document.querySelector('#active-button');
const CompletedButton = document.querySelector('#completed-button');
const AllButton = document.querySelector('#all-button');

AllButton.addEventListener('click',()=>{
  const listItems = todoList.querySelectorAll('li');
  for(const listItem of listItems){
    if(listItem.classList.contains("hidden")){
      listItem.classList.remove("hidden");
    }
  }
})
ActiveButton.addEventListener('click', () => {
  const listItems = todoList.querySelectorAll('li');
  for (const listItem of listItems) {
    if (listItem.classList.contains('task_completat')) {
      listItem.classList.add('hidden');
    } else {
      listItem.classList.remove('hidden');
    }
  }
  
});

CompletedButton.addEventListener('click', () => {
  const listItems = todoList.querySelectorAll('li');
  for (const listItem of listItems) {
    if (listItem.classList.contains('task_completat')) {
      listItem.classList.remove('hidden');
    } else {
      listItem.classList.add('hidden');
    }
  }
});

const clearButton = document.querySelector('#clear-completed-button');

clearButton.addEventListener('click', event => {
  const completedTasks = document.querySelectorAll('.task_completat');
  completedTasks.forEach(task => task.remove());
});





