export function ButtonTest({ onClick, children }) {
    return (
        <button
            className="bg-[#f87a85] px-4 py-3 rounded-md my-2 disabled:bg-indigo-300 hover:bg-[#f95a6a] hover:text-white transition duration-300"
            style={{ minWidth: "500px", minHeight: "50px", boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}