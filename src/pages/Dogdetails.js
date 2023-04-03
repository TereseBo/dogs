import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//Style
import './Dogdetails.css'

export default function Dogdetails() {
    const { dog } = useParams()
    const [images, setImages] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://dog.ceo/api/breed/${dog}/images/random/3`)
            const data = await response.json()
            setImages(data.message)
        }
        fetchData()
    }, [dog])

    return (
        <div className='Dogdetails'>
            <h2>{dog}</h2>
            <div className='image-container'>
            {images.map((image, index) => {
                return (
                    <img key={`${dog}-img-${index}`} src={image} alt={`Dog beonging to the ${dog} race`} />
                )
            })}
            </div>
        </div>

    )
}