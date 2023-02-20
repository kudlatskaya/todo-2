import React from 'react';

export type TaskType = {
    taskId: number,
    title: string,
    isDone: boolean,
}

export type TasksPropsType = {
    title: string,
    tasks: TaskType[],
    students: string[],
}

const Tasks = (props: TasksPropsType) => {
    const {title, tasks, students} = props;

    const tasksList = tasks.length
        ? tasks.map(item => {

            return <li key={item.taskId}>
                <input type="checkbox" checked={item.isDone}/>
                <span>{item.title}</span>
            </li>

        })
        : <span>Your to-do list is empty!</span>

    const studentsList = students.length
        ? students.map((item, index) => {

            return <li key={index}>
                {item}
            </li>

        })
        : <span>Your students list is empty!</span>

    return (
        <>
            <p>{title}</p>
            <ol>{tasksList}</ol>
            <ul>{studentsList}</ul>
        </>
    );
};

export default Tasks;