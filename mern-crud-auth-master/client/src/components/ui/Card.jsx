export function Card({ children }) {
  return <div className="bg-slate-100 text-black max-w-md w-full p-10 rounded-md mt-5 mb-5"style={{minWidth:"500px" , boxShadow: '5px 5px 10px rgba(0, 0 , 0, 0.5)'}}>{children}</div>;
}
