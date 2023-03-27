'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

export function Test() {
  return (
    <div>
      <h1>Random Component</h1>
    </div>
  );
}

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async() => {
    const db = new PocketBase('https://crooked-soccer.pockethost.io');

    await db.collection('notes').create({
      title,
      content,
    });

    // await fetch('https://crooked-soccer.pockethost.io/api/collections/notes/records', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title,
    //     content: note,
    //   }),
    // });

    setTitle('');
    setContent('');

    router.refresh();
  }

  return (
    <>
      <form onSubmit={create}>
        <h3>Create a new Note</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">
          Create note
        </button>
      </form>
      <Test></Test>
    </>
  );
}