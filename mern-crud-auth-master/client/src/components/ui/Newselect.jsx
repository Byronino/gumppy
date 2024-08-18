
export function Newselect({ htmlFor, children }) {
    return (
      <select htmlFor={htmlFor} className="text-xs rounded-full p-2 block my-1 w-full font-roboto">
        {children}
      </select>
    );
  }