export default function Button({ label }: { label: string }) {
  return (
    <button className="px-5 py-2 bg-blue-800 text-white text-2xl">
      {label}
    </button>
  );
}
