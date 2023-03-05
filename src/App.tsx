import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";


export type todolistsType = { id: string, title: string, filter: FilterValuesType }[]

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");


    let todolistID1 = v1();
    let todolistID2 = v1();
    //array todolist
    let [todolists, setTodolists] = useState<todolistsType>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])
//object of arrays tastks
    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todolistID: string, id: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id != id)});
    }

    function addTask(todolistID:string,title: string) {
           let task = {id: v1(), title: title, isDone: false};
           setTasks({...tasks,[todolistID]:[...tasks[todolistID],task]});
    }

    function changeStatus(todolistID:string,taskId: string, isDone: boolean) {
        setTasks({...tasks,[todolistID]:[...tasks[todolistID].map(t=>t.id===taskId? ({...t,isDone : isDone}): {...t})]});
    }


    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists([...todolists.map(t => t.id === todolistID ? {...t, filter: value} : {...t})])

    }


    return (
        <div className="App">

            {todolists.map((t) => {

                let tasksForTodolist = tasks[t.id];
                if (t.filter === "active") {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
                }
                if (t.filter === "completed") {
                    tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist key={t.id}
                              title={t.title}
                              todolistID={t.id}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={t.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;
