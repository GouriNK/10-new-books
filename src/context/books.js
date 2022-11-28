import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({children}) {
    const [count, setCount] = useState(5);

    const contextToShare = {
        count,
        incrementCount : () => {
            setCount(count + 1);
        }
    };

    return <BooksContext.Provider value = {contextToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;

// import BooksContext, {Provider} from './abc'