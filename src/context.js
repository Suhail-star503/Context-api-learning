import { createContext, useState } from "react";
export const itemContext = createContext();

function CustomContext({ children }) {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [togglecart,settogglecart]=useState(false);
    const [cart,setcart]=useState([]);
    const handleReset=()=>{
        setTotal(0);
        setItem(0);
    }
    return (
        <itemContext.Provider value={{total,setTotal,item,setItem,handleReset,togglecart,settogglecart,cart,setcart}}>
            {children}
        </itemContext.Provider>
    )
}

export default CustomContext;