import { Link } from "react-router-dom"
//Style
import './Item.css'

export default function Item({ title }) {
    
    return (
        <div className="Item">
            <Link to={`/dog/${title}`}>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}