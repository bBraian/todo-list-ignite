import styles from './TaskList.module.css';
import { TaskItem } from './TaskItem';

export function TaskList({tasks, onUpdateChecked}) {
    return (
        <div className={styles.content}>
            {tasks.map(task => {
                return <TaskItem task={task} key={task.id} onUpdateChecked={onUpdateChecked} />
            })}
        </div>
    )
}