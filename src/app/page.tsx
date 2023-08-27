'use client';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div>
        <h1>Person generator</h1>
        <form>
          <input type='text' placeholder='Type a name' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type='submit'>Get data</button>
        </form>
      </div>
    </>
  );
}
