import { formElement, buttonE1, taskList } from './refs'
import { renderTask } from './tasks'
import { saveTaskToLokalStorage, deleteTaskFromLocalStorage, renderTaskFromLokalStorage} from './local-storage-api'

renderTaskFromLokalStorage();

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskName = event.target.taskName.value.trim();
    const taskDescription = event.target.taskDescription.value.trim();

    console.log(taskName);
    console.log(taskDescription);

    if (!taskName || !taskDescription) {
        return alert("Заповніть усі поля форми")
    }
    renderTask({ title: taskName, description: taskDescription })

    saveTaskToLokalStorage({ title: taskName, description: taskDescription });

    formElement.reset();
})

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('task-list-item-btn')) {
        const taskItem = event.target.closest('.task-list-item');
        console.log(taskItem);
        const indexEl = [...taskList.children].indexOf(taskItem);
        deleteTaskFromLocalStorage(indexEl);
        taskItem.remove();
    }
});

