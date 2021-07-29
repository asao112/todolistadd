`use strict`
  const todos = [];
  const inputBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const tableBody = document.getElementById('todo-body');



  addButton.addEventListener('click', (event) => {
    const todo = { comment: inputBox.value, status: '作業中' }
    inputBox.focus();
    if (inputBox.value === '') {
      alert('タスクを入力してください！');
      return;
    }
    if (todo) {
      todos.push(todo);
      inputBox.value = '';
      showTodos();
    }
  });
  const showTodos = () => {
    tableBody.textContent = '';
    todos.forEach((todo, number) => {
      const tableRecord = document.createElement('tr');
      tableBody.appendChild(tableRecord);
      const tableId = document.createElement('td');
      const tableComment = document.createElement('td');
      const tableStatus = document.createElement('td');
      const tableAction = document.createElement('td');
      tableId.textContent = number;
      tableComment.textContent = todo.comment;
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(tableComment);
      tableRecord.appendChild(tableStatus);
      tableRecord.appendChild(tableAction);
      tableStatus.appendChild(createStatusButton());
      tableAction.appendChild(createDeleteButton());
    });
  };
  
  const createStatusButton = () => {
    const statusButton = document.createElement('button');
    statusButton.classList.add("doing");
    statusButton.textContent = '作業中';
    statusButton.addEventListener('click', () => {
      if (statusButton.textContent === '作業中') {
        statusButton.classList.add("doing");
        statusButton.textContent = '完了';
      } else {
        statusButton.classList.add("done");
        statusButton.textContent = '作業中';
      }
    });
    return statusButton;
  };  

  const createDeleteButton = () => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', (e) => {
    let t=e.target.closest('tr');
    let idx=[...tableBody.querySelectorAll('tr')].indexOf(t);
    t.parentNode.removeChild(t);
    todos.splice(idx,1);
    showTodos();
  });
  return deleteButton;
};
