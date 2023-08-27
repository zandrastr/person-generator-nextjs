'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/generator/${inputValue}`);
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
