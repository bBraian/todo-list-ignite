import styles from './TaskItem.module.css';
import trash from '../assets/trash.svg';
import check from '../assets/check.svg';
import checked from '../assets/checked.svg';
import { useState } from 'react';

export function TaskItem({task, onUpdateChecked}) {
    const [done, setDone] = useState(task.check);


    return (
        <div className={styles.taskBox} key={task.id}>
            <img src={done ? checked : check} className={styles.input} onClick={() => onUpdateChecked(task.id)} />
            <span>{task.text}</span>
            <img className={styles.trash} src={trash} alt="Botão excluir" />
        </div>
    )
}