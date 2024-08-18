export function Button({ onClick, children }) {
  return (
    <button
      className="bg-[#f87a85] px-6 py-3  rounded-md my-2 disabled:bg-indigo-300 f text-xl font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
