import React , {useContext} from 'react';

import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import {productContext} from '../services/ProductContextProvider';

const DetailProduct = () => {

  const param = useParams()
  const data = useContext(productContext)
  const product = data [param.id - 1];

  const {image , title , description , rating , price , category} = product;

  useTitle(`${title}`)


  console.log(product);
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>category : {category}</p>
        <p>{description}</p>
        <p>price :{price}</p>
        <div>
          <button>Add to cart</button>
          <p>{rating.rate}</p>
        </div>
        
      </div>
    </div>
  );
};

export default DetailProduct;