'use client';

import { useState } from 'react';

export default function Counter({ users }: any) {
  const [count, setCount] = useState(0);
  console.log(users);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
