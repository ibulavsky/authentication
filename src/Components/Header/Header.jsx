import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import js from '../../media/js.png'
import {connect} from "react-redux";
import {logout} from "../../BLL/authenticationReducer";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>
                <img src={js} alt='logo'/>
            </span>
            <span className={styles.linkWrapper}>
                 <li className={styles.block}>
                <NavLink to='/ '>Главная</NavLink>
            </li>
            <li className={styles.block}>
                <NavLink to="/posts">Новости</NavLink>
            </li>
            <li className={styles.block}>
                <NavLink to="/profile">Профиль</NavLink>
            </li>
            </span>
            <span className={styles.login}>
               <span>{props.username}</span>
                {props.isAuthentication && <button className={styles.button} onClick={props.logout}>X</button>}
            </span>
        </header>
    )
};

const mapStateToProps = (state) => ({
    username: state.authentication.username,
    isAuthentication: state.authentication.isAuthentication
});

export default connect(mapStateToProps, {logout})(Header);