import React, { Fragment } from "react";
import css from "../Hero/hero.scss";
import image from "../../img/Logos/APL.png";
import caps from "./caps";

class Hero extends React.Component {
    render() {
        console.log(caps);
        return (
            <>
                <div className={css.slide}>This is the Hero</div>
                <img src={image} />
            </>
        );
    }
}

export default Hero;
