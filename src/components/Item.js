import './Item.css';

export default function Item({title}) {
    return (
        <div className="Item">
        <h2>{title}</h2>
        </div>
    );
    }