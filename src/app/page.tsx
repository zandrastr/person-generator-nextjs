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
      <div className='h-full flex flex-col items-center justify-center'>
        <div className='border-2 p-8 rounded-lg'>
          <h1 className='text-4xl font-bold tracking-wide uppercase mb-5'>Person generator</h1>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <input className='p-2 rounded-lg text-black mb-4' type='text' placeholder='Type a name' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className='p-2 rounded-lg bg-blue-900 hover:bg-blue-600 font-bold' type='submit'>
              Get data
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
