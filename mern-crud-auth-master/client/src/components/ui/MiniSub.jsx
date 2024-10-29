export function MiniSub({ children }) {
    return (
        <div className="bg-[#FB9098] text-white  w-full p-3 rounded-full mt-3 mb-1 text-xs font-roboto " style={{ boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}>

           <div className="mx-10">{children}</div> 


        </div>

    )
}