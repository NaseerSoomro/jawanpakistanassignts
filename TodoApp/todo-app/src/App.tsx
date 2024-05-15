import React from 'react';
import { useState } from "react";
import './App.css';

function App() {

  const [text, setText] = useState('');

  const [textListItem, setTextListItem] = useState<any>([]);
  // const [editIndex, setEditIndex] = useState<number | null>(null);
  // const [editText, setEditText] = useState<string>('');

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text !== '') {
      textListItem.push(text);
      setTextListItem([...textListItem]);
      setText('');
    }
  };

  const handleEdit = (event: any, item: any) => {
    let newText = prompt('Enter New Text', item);
    textListItem[event] = newText;
    setTextListItem([...textListItem]);
  }

  const handleDelete = (event: any) => {
    textListItem.splice(event, 1);
    setTextListItem([...textListItem]);
  }

  const handleDeleteAll = () => {
    textListItem.splice(0);
    setTextListItem([...textListItem]);
    setText('');
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="container">
        <p>{text}</p>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleDeleteAll} className='delete-all-btn'>Delete All</button>
      </div>
      <ul>
        {
          textListItem.map((item: any, index: any) => (
            <div>
              <li key={index}>{item}</li>
              <button onClick={() => {
                handleEdit(index, item)
              }}>Edit</button>
              <button onClick={() => handleDelete(index)} className='delete-btn'>Delete</button>
            </div>
          ))
        }
      </ul>
    </div >
  );
}

export default App;
