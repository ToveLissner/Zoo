import "./header.scss";
import { Nav } from "./nav/Nav";

export function Header(){
    return(
        <div className="header">
            <Nav/>
        </div>
    );
}