import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:1,    text :"hello world"} ]
}

function sayHello(){
    console.log("hello world");
}

export const todoSlice = createSlice({
    name: 'todo', 
    initialState,
    reducers:{
        // addTodo : (state , action ) it is always given 
        addTodo : ()=>{},
        removeTodo : ()=> {},
    }
})