'use client';
import { useState, FormEvent } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h1>Person generator</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Type a name' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type='submit'>Get data</button>
        </form>
      </div>
    </>
  );
}
