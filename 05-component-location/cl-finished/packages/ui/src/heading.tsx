export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="my-3 font-bold text-green-900 underline pb-3 text-4xl">
      {children}
    </h1>
  );
}
