export function Red({ onClick, children }) {
    if (children) {
        return (
            <button
                className="bg-green-500 px-3 py-3 rounded-md my-1 hover:bg-green-700 transition duration-200 "
                onClick={onClick}
            >
                {children}
            </button>
        )
    }
    else{
        return (
            <button
                className="bg-red-500 px-3 py-3 rounded my-1 shadow hover:bg-red-700 transition duration-200"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
    
}