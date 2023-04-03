//Style
import './List.css'
//Components
import Item from './Item'

export default function List({ content }) {
    
    return (
        <ul className="List">
            {content.map((item) => {
                return (
                    <li key={`${item}-li`}><Item key={`${item}-item`} title={item} /></li>
                )
            })}
        </ul>
    );
}