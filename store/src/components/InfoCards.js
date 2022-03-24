import React, { Component } from 'react';

class InfoCards extends Component {
    render() {
        // const {image , name , description , rate , cost} = this.props
        return (
            <div className='flex flex-col backdrop-blur-lg absolute top-1/2 left-1/2 bg-slate-50-900 z-50'>
                {/* <div className='flex justify-around'>
                    <img src={image} alt={name}/>
                    <p>{name}</p>
                </div>
                <p className='text-justify'>salam{description}</p>
                <div className='flex justify-between'>
                    <p>{cost}</p>
                    <p>{rate}</p>
                </div> */}
                this product is :{(this.props.match.params.id)}

            </div>
        );
    }
}

export default InfoCards;