"use strict";

const addbtn = document.getElementById("add_btn");
const addvalue = document.getElementById("add_value");
const text = document.getElementById("add_text");
const todos = [];
const displayTodos = (selecttodos) => {
  addvalue.textContent = "";
  selecttodos.forEach((todo) => {
    const createTr = document.createElement("tr"); 
    const createId = document.createElement("td"); 
    createId.textContent = todo.taskid;
    const createComment = document.createElement("td");
    createComment.innerHTML = todo.comment;
    const status_td = document.createElement("td");
    createTr.appendChild(createId); 
    createTr.appendChild(createComment); 
    createTr.appendChild(status_td); 
    status_td.append(createstatusbutton(todo)); 
    status_td.append(createremoveButton());
    addvalue.appendChild(createTr);
    text.value = "";
  });
};

const createTodo = () => {
  const taskid = todos.length;
  const comment = text.value;
  const status = "作業中";
  const todo = {
    taskid,
    comment,
    status,
  };
  return todo;
}

addbtn.addEventListener("click", () => {
  const todo = createTodo();
  todos.push(todo);
  　radioChange() ;
  });

const createstatusbutton = (todo) => {
  const createstatusBtn = document.createElement("button");
  createstatusBtn.innerText = todo.status;
  createstatusBtn.addEventListener("click", () => {
    if ((todos.status = "作業中")) {
      todo.status = "完了";
    } else {
      todo.status = "作業中";
    }
    radioChange();
  });
  return createstatusBtn;
};

const createremoveButton = (index) => {
  const createremoveBtn = document.createElement("button");
  createremoveBtn.textContent = "削除";
  createremoveBtn.addEventListener("click", () => {
    todos.splice(index, 1);
    radioChange();
    todos.reduce((Idnum, todo) => (todo.taskid = Idnum + 1), -1);
    radioChange();
  });
  return createremoveBtn;
};

const radioChange = () => {
  const radioAll = document.getElementById("radioAll");
  const radioWork = document.getElementById("radioWork");
  const radioDone = document.getElementById("radioDone");

  if (radioAll.checked) {
    todos.slice();
    return displayTodos(todos);
  } else if (radioWork.checked) {
    let filterdoing = todos.filter((todo) => {
      return todo.status === "作業中";
    });
    return displayTodos(filterdoing);
  } else if (radioDone.checked) {
    let filterdone = todos.filter((todo) => {
      return todo.status === "完了";
    });
    return displayTodos(filterdone);
  }
}
