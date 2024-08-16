export function Subtitulo({ children }) {
    return (
        <div className="bg-[#FB9098] text-white max-w-md w-full p-3 rounded-full mt-3 mb-1 text-3xl font-roboto " style={{ minWidth: "80%", boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)' }}>

           <div className="mx-10">{children}</div> 


        </div>

    )
}