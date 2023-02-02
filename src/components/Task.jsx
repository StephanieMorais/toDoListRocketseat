import styles from './Task.module.css';
import clipboard from '../assets/Clipboard.png';
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import {TaskList} from './TaskList';

export function Task() {
  const [taskCount, setTaskCount] = useState(0);

  const [contentTask, setContentTask] = useState ([])
  const [newCommentTask, setNewCommentTask] = useState('');

  function handleCreateNewTask(e) {
    e.preventDefault()
    setContentTask([...contentTask, newCommentTask]);
    setNewCommentTask('');
  }
  function handleNewTaskChange(e) {
    e.target.setCustomValidity('');
    setNewCommentTask(e.target.value);
  }
  function handleNewTaskInvalid(e) {
    e.target.setCustomValidity('Esse campo é obrigatório!');
  }
  function deleteTask(taskToDelete) {
    const taskWithoutDeletedOne = contentTask.filter(task => {
      return task !== taskToDelete;
    })
    setContentTask(taskWithoutDeletedOne);
  }
  
  function handleCreateTask() {
    setTaskCount(taskCount + 1);
  }
  const tasksNumber = contentTask.length
  const isNewTaskEmpty = newCommentTask.length === 0;
  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
        <textarea
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={newCommentTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
          />
        <button type='submit' title='Criar tarefa' disabled={isNewTaskEmpty} onClick={handleCreateTask}>Criar
          <PlusCircle size={20}/>
        </button>
      </form>
      <div className={styles.infoTask}>
        <div className={styles.totalTask}>
          <strong>Tarefas criadas</strong>
          <span>{tasksNumber}</span>
        </div>
        <div className={styles.endTask}>
          <strong>Concluídas</strong>
          <span>0 de {tasksNumber}</span>
        </div>      
      </div>
      <div>
        {
          tasksNumber == 0 && (
            <div className={styles.emptyTask}>
              <img src={clipboard} alt="" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )
        }
        {contentTask.map(task => {
          return (
            <TaskList
              key={task}
              content={task}
              onDeleteTask={deleteTask}
              />
          )
        })}  
      </div>
    </div>
  )
}