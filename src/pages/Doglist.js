import {useState, useEffect} from 'react'
//Style
import './Doglist.css'
//Components
import List from '../components/List'
import Msgbox from '../components/Msgbox';

export default function Doglist(){
    const [dogs, setDogs] = useState([]);
    const [msg, setMsg] = useState('Loading...');
    useEffect(() => {
        async function fetchData() {
            try{
            const response = await fetch('https://dog.ceo/api/breeds/list/all')
            if(response.status !== 200) throw new Error('Oops, something went wrong.')
            const data = await response.json()
            const array = Object.keys(data.message)
            setDogs(array);
            } catch (error) {
                setMsg('Oops, something went wrong.')
            }
        }
        fetchData()
    }, [])

    return (
        <div className='Doglist'>
        {dogs.length>0?<List content={dogs}/>: <Msgbox msg={msg}/>}
        </div>
    )
}