import React from "react";
import { Link } from "wouter";
import { HiOutlineHome, HiOutlineHeart } from "react-icons/hi";

const ButtonsRoundedNav = ({ home = false, favorites = false } = {}) => {

    return (
        <div className="buttons-rounded-nav">
            {
                home && <Link to="/">
                    <button className="btn-rounded btn-success"><HiOutlineHome /></button>
                </Link>
            }
            {
                favorites && <Link to="/favorites">
                    <button className="btn-rounded btn-danger"><HiOutlineHeart /></button>
                </Link>
            }
        </div>
    )
}

export default ButtonsRoundedNav;