import React, {useState , useEffect , createContext} from 'react';


//api
import { getData } from './api';

export const productContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products , setProducts] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await (getData()))
        }

        fetchAPI()
    } , [])


    return (
        <div>
            <productContext.Provider value={products}>
                {children}
            </productContext.Provider>
        </div>
    );
};

export default ProductContextProvider;