export function MiniBlue({ onClick, children }) {
    if (children) {
        return (
            <button
                className="bg-[#5dc0c4] px-1 py-2 rounded-md my-1 mx-0.5 hover:bg-gray-700 transition duration-200 "
                onClick={onClick}
            >
                {children}
            </button>
        )
    }
    else{
        return (
            <button
                className="bg-gray-200 px-1 py-2 rounded my-1 mx-0.5 shadow hover:bg-blue-700 transition duration-200"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
    
}