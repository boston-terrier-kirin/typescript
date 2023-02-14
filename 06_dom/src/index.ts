// POINT：non-null assertion, !
const btn = document.querySelector('#btn')!;

// POINT：type assertion, as
const input = document.querySelector('#todoinput')! as HTMLInputElement;

// この場合、HTMLFormElementが戻ってくる。
const form = document.querySelector('form')!;

// genericsでもOK。
const list = document.querySelector<HTMLUListElement>('#todolist')!;

interface Todo {
  text: string;
  completed: boolean;
}
const todos: Todo[] = loadTodos();
todos.forEach((todo) => createTodoElement(todo));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTodoText = input.value;

  const newTodo: Todo = {
    text: newTodoText,
    completed: false,
  };
  todos.push(newTodo);

  localStorage.setItem('todos', JSON.stringify(todos));

  createTodoElement(newTodo);
});

function loadTodos(): Todo[] {
  const todosJson = localStorage.getItem('todos');
  if (todosJson) {
    return JSON.parse(todosJson);
  }
  return [];
}

function createTodoElement(todo: Todo) {
  const newLi = document.createElement('li');
  newLi.append(todo.text);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', () => {
    todo.completed = checkbox.checked;
    localStorage.setItem('todos', JSON.stringify(todos));
  });
  newLi.append(checkbox);

  list.append(newLi);
}

//// 実験
form.addEventListener('submit', handleSubmit);

// 外だしfunctionの場合、型付けが必要になる。
function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  console.log('submit2');
}
