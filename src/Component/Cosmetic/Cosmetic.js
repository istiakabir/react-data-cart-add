import React from 'react';
import { addToDb, deleteToDb } from '../../Utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {

const {id, name, price, color}= props.cosmetic    

const addCart = (id) =>{
    addToDb(id);
}

const removeCart = id => {
    deleteToDb(id);
}


    return (
        <div className='cosmetic'>
            <h2>Name: {name}</h2>
            <p>${price}</p>
            <p>ID: {id}</p>
            <p>Color: {color}</p>
            <button onClick={() => addCart(id)}>Buy Now</button>
            <button onClick={() => removeCart(id)}>Delete Now</button>


        </div>
    );
};

export default Cosmetic;