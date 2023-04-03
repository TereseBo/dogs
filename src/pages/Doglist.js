import {useState, useEffect} from 'react'
//Components
import List from '../components/List'

export default function Doglist(){
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://dog.ceo/api/breeds/list/all')
            const data = await response.json()
            const array = Object.keys(data.message)
            setDogs(array);
        }
        fetchData()
    }, [])

    return (
        <List content={dogs}/>
    )
}