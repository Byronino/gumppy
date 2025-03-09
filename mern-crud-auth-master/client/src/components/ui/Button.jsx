export function Button({ onClick, children }) {
  return (
    <button
      className="bg-white px-6 py-3 text-[#f87a85] rounded-md my-2 disabled:bg-indigo-300 text-xl font-bold hover:bg-[#f95a6a]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

