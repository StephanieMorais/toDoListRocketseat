import styles from './TaskList.module.css'
import {Trash} from 'phosphor-react'
import { useState } from 'react';

export function TaskList({content, onDeleteTask}) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }


  return (
    <label>
      <input type="checkbox"/>
      <p>{content}</p>
      <button onClick={handleDeleteTask} title='Deletar tarefa'>
        <Trash size={20} />
      </button>
    </label>
  )
}