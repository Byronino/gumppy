export function DienteLock({ onClick, children }) {
    if (children[1]) {
        return (
            <button
                className="my-1 bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-1 py-1 "
                onClick={onClick}
            >
                {children[0]}
            </button>
        )
    }
    else{
        return (
            <button
                className="bg-transparent px-1 py-1 my-1"
                onClick={onClick}
            >
                {children[0]}
            </button>
        );
    }
    
}