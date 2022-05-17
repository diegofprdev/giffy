import React from "react";
import { HiHeart } from "react-icons/hi";

import './styles.css';

const Header = () => {

    return (
        <header className="gf-header">
            <span>
                <span className="gf-header-fv"><HiHeart /></span>
                <span className="gf-header-fv-total">
                    20
                </span>
            </span>
        </header>
    )
}

export default Header;