/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return (

        <header className={styles.header}>

            <Link to="/">
               <span>MovieFlix</span>
            </Link>
           
          <nav>
            <Link to="/">Home</Link>
            <Link to="/Watch">Watch</Link>         
          </nav>

        </header>

    );
};

export default Header;