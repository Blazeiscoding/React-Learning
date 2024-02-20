import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();
  const [isAlarmTriggered, setAlarmTriggered] = useState(false);
  const [alarmDuration, setAlarmDuration] = useState(5);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompletedHandler = () => {
    toggleCompleted(todo.id);
  };

  const triggerAlarm = () => {
    setAlarmTriggered(true);

    const timeoutId = setTimeout(() => {
      alert('Alarm! Time to wake up!');
      setAlarmTriggered(false);
    }, alarmDuration * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value, 10);
    setAlarmDuration(newDuration);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompletedHandler}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
      <div>
        <input
          type="number"
          value={alarmDuration}
          onChange={handleDurationChange}
        />

        <button onClick={triggerAlarm}>⏰Set Alarm</button>
        {isAlarmTriggered && <p>Alarm is set! Get ready...</p>}
      </div>
    </div>
  );
}

export default TodoItem;
