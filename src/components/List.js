import { useState, useEffect } from 'react';

import './List.css';
//Components
import Item from './Item';

export default function List(props) {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            const array = Object.keys(data.message);
            setDogs(array);
            console.log(array);
        }
        fetchData();

    }, []);

    return (
        <ul className="List">
            {dogs.map((dog) => {
                return (
                    <li><Item title={dog} /></li>
                )
            })}
        </ul>
    );
}