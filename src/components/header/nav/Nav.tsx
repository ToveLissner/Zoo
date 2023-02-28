
import { Link } from "react-router-dom";
import "./nav.scss";

export function Nav (){
    return (
        <nav>
            <h3>TovesZoo</h3>
            <ul>
                <li>
                    <Link to="/">Hem</Link>
                </li>
                <li>
                    <Link to="/Animals">Djuren</Link>
                </li>
            </ul>
        </nav>
    )
}