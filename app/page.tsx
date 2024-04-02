'use client';

import { useChat } from 'ai/react';
import { useEffect, useState } from 'react';

export default function Chat() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [passwd, setPasswd] = useState('')
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handlePasswdChange = (e) => {
    setPasswd(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault()
    if (passwd === process.env.NEXT_PUBLIC_FAKE_USER_PASSWORD) {
      setLoggedIn(true)
    }
  }

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      {loggedIn ?
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form> :
        <form onSubmit={handleLogIn}>
        <input
          type="password"
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={passwd}
          placeholder="Please input the password"
          onChange={handlePasswdChange}
        />
      </form>
      }
    </div>
  );
}
