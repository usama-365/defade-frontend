import {UilCheckSquare} from "@iconscout/react-unicons";
import './checkmark.styles.scss';

export const Checkmark = function ({children}) {
    return (
        <li className="checkmark">
            <UilCheckSquare/> <span className="checkmark__text">{children}</span>
        </li>
    );
}