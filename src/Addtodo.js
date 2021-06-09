import React, {useState} from "react";
import {Stack} from '@fluentui/react/lib/Stack';
import {TextField, PrimaryButton} from '@fluentui/react';
import Todolist from "./Todolist";

const Addtodo = () => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);
    const handelClick = () => {
        setList([...list, todo]);
        setTodo('');
    };
    const deleteTodo = (id) => {
        const newData = list.filter((ele, i) => i !== id)
        setList(newData);
        // console.log(id);
    }
    return (
        <>
            <Stack style={{marginBottom: 20}}>
                <h1>Todo App using FluentUI & React</h1>
                <Stack horizontal>
                    <Stack.Item grow>
                        <TextField value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Add Todo'/>
                    </Stack.Item>
                    <PrimaryButton disabled={!todo} onClick={handelClick}>Add</PrimaryButton>
                </Stack>
            </Stack>
            {
                list.length !== 0 ? (<Todolist data={list} deleteTodo={deleteTodo}/>) : (<p>Todo List is Empty.</p>)
            }

        </>
    )
};

export default Addtodo;