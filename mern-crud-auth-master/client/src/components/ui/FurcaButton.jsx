export function FurcaButton({ onClick, children }) {
    
    if (children===0) {
        return (
            <button
                className="bg-transparent px-1 py-1 my-1"
                onClick={onClick}
            >
                0
            </button>
        );
    }
    else if(children===1){
        return (
            <button
                className="bg-transparent px-1 py-1 my-1"
                onClick={onClick}
            >
                1
            </button>
        );
    }
    else if(children===2){
        return (
            <button
                className="bg-transparent px-1 py-1 my-1"
                onClick={onClick}
            >
                2
            </button>
        );
    }
    else if(children===3){
        return (
            <button
                className="bg-transparent px-1 py-1 my-1"
                onClick={onClick}
            >
                3
            </button>
        );
    }
    
    
}