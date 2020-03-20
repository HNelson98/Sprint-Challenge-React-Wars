import React, {useState, useEffect} from 'react';
import Characters from './Characters';
import axios from 'axios';

function CharactersList(){
    const [data, setData]= useState([])

    useEffect(() =>{
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log('Axios Response:', response.data.results)
            setData(response.data.results)
        })
        .catch(err => {
            console.log('Axios Error:', err)
        })
    }, []);

return(
    <div className= 'Card'>
        
             {data.map(item =>
            <Characters
            key= {item.name}
           character= {item}
            />)}


           
    </div>
)
};
export default CharactersList;