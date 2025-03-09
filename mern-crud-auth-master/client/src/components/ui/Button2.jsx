export function Button2({ onClick, children }) {
  return (
    <button
      className="bg-[#f87a85] px-6 py-3 text-[#ffffff] rounded-md my-2 disabled:bg-indigo-300 text-xl font-bold hover:bg-[#f95a6a]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

