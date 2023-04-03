import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//Style
import './Dogdetails.css'
//Components
import Msgbox from '../components/Msgbox'

export default function Dogdetails() {
    const { dog } = useParams()
    const [images, setImages] = useState([])
    const [msg, setMsg] = useState('Loading...');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${dog}/images/random/3`)
                if(response.status !== 200) throw new Error('Oops, something went wrong.')
                const data = await response.json()
                setImages(data.message)
            } catch (error) {
                setMsg('Oops, something went wrong.')
            }
        }
        fetchData()
    }, [dog])

    return (
        <div className='Dogdetails'>
            {images.length>0 ? 
            <>
                <h2>{dog}</h2>
                <div className='image-container'>
                    {images.map((image, index) => {
                        return (
                            <img key={`${dog}-img-${index}`} src={image} alt={`Dog beonging to the ${dog} race`} />
                        )
                    })}
                </div>
            </> : <Msgbox msg={msg} />}
        </div>

    )
}