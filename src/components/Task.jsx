import { useEffect, useState } from 'react';
import { Empty } from './Empty';
import { Info } from './Info';
import styles from './Task.module.css';
import { TaskList } from './TaskList';

export function Task() {
    const data = [
        {id: 1, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
        {id: 2, check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
        {id: 3, check: false, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
        {id: 4, check: true, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'}
    ];

    const [tasks, setTasks] = useState(data);
    const [createdTasks, setCreatedTasks] = useState(tasks.length);
    const [doneTasks, setDoneTasks] = useState(0);

    function handleUpdateChecked(id) {
        let checked = tasks[id].check;
        tasks[id].check = checked ? false : true;
        let newTasks = tasks;
        setTasks([...newTasks]);
    }
    
    useEffect(() => {
        let filteredDoneTask = tasks.filter(task => task.check === true);
        let quantity = filteredDoneTask.length
        setDoneTasks(quantity);
    }, [])

    return (
        <div className={styles.content}>
            <Info createdTasks={createdTasks} doneTasks={doneTasks} />
            { tasks.length === 0 ? <Empty /> : <TaskList tasks={tasks} onUpdateChecked={handleUpdateChecked} /> }
        </div>
    )
}