import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';
import { useState } from 'react';

export function App() {
  const data = [
    {id: 1, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
    {id: 2, check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
    {id: 3, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
    {id: 4, check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'}
  ];

  const [tasks, setTasks] = useState(data);
  const [inputValue, setInputValue] = useState('');

  function handleCreateNewTask() {
    let taskId = Math.floor(Date.now() * Math.random()).toString(36);
    let newTask = {id: taskId, check: false, text: inputValue}
    setTasks([...tasks, newTask]);
    setInputValue('');
  }


  return (
    <div>
      <Header />
      <div className={styles.content}>
        <NewTask 
          newTask={handleCreateNewTask} 
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Task tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}
