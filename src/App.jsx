import { useState } from 'react'
import { Header } from './components/Header'
import { Task } from './components/Task'

import './global.css'; 
import styles from './App.module.css';


function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Task 
        />
      </div>
    </div>
  )
}

export default App