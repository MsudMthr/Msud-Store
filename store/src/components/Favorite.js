import React,{useContext} from 'react';

import { cartContext } from '../services/CartContextProvider';
import FavoriteItem from './shared/FavoriteItem';

const Favorite = () => {
    const {state , dispatch}= useContext(cartContext)
    return (
        <div className='flex  justify-evenly '>
            {state.favorite.map(item => <FavoriteItem data={item}/>)}
        </div>
    );
};

export default Favorite;