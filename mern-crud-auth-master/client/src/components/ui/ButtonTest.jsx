export function ButtonTest({ onClick, children }) {
    return (
      <button
        className="bg-[#f87a85] p-5 rounded-md my-2 text-white disabled:bg-indigo-300 hover:bg-[#f95a6a] hover:text-white transition duration-300 flex items-center justify-center gap-2"
        style={{ boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  