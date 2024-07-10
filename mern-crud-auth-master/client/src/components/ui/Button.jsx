export function Button({ onClick, children }) {
  return (
    <button
      className="bg-[#f87a85] px-4 py-1 rounded-md my-2 disabled:bg-indigo-300 f"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
