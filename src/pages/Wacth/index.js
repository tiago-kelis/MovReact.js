import styles from "./Wacth.module.css";
import Header from "../../Components/Header";
import Container from "../../Components/Container";
import Footer from "../../Components/Footer";

function Wacth(){
    return(
      <>
      <Header/>
      <Container>
        <section className={styles.wacth}>
        <iframe width="840" height="470" src="https://www.youtube.com/embed/6TapLroH4RU?si=vhm9FncTmnp9tS96"
         title="YouTube video player" 
         frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </section>
      </Container>
      <Footer/>      
      </>     
        
    );
};

export default Wacth;