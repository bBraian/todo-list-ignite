import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <NewTask />
        <Task />
      </div>
    </div>
  )
}
