import styles from './NewTask.module.css';
import plus from '../assets/plus.svg';

export function NewTask() {
    return (
        <div className={styles.content}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
                <span>Criar</span>
                <img src={plus} />
            </button>
        </div>
    )
}