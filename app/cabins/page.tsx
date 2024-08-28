import Counter from '../components/Counter';

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return (
    <div>
      <h2>Cabins page</h2>
      <ul>
        {data.map((e: any) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}
