export function List({ items }: { items: string[] }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {items.map((item) => (
        <li className="text-gray-500" key={`key-${item}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
