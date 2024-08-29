export function MiniYellow({ onClick, children }) {
    if (children) {
        return (
            <button
                className="bg-[#f7d371] px-1 py-2 rounded-md my-1 mx-0.5 hover:bg-gray-700 transition duration-200 "
                onClick={onClick}
            >
                {children}
            </button>
        )
    }
    else{
        return (
            <button
                className="bg-gray-200 px-1 py-2 rounded my-1 mx-0.5 shadow hover:bg-red-700 transition duration-200"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
    
}