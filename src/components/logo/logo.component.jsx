import {UilChannel} from "@iconscout/react-unicons";
import "./logo.styles.scss";

export const Logo = function ({large=false}) {
    return (
        <div className={`logo ${large && 'logo--large'}`}>
            <UilChannel size={`${large ? 64 : 32}`}/>
            <p>DEFADE</p>
        </div>
    );
}