import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="w-full bg-[white] mb-3 text-black px-4 py-2 rounded-full"
    //style={{width:"70%"}}
  />
));
