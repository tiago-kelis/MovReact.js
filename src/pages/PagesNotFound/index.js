import erro404 from "./erro404.png";
import styles from "./PagesNotFound.module.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function PagesNotFound(){
    return(

       <>
       <Header/>
        <section className={styles.container}>
            <h2>Ops: Página não localizada</h2>
            <img src={erro404} alt="Çogo não localizada"/>
        </section>
        <Footer/>
       
       </>

    );
};

export default PagesNotFound;