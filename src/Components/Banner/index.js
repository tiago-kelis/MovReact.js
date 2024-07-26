import styles from "./Banner.module.css";

function Banner({img}){
    return (
        <div className={styles.banner}
          style={{ backgroundImage: `url('/img/${img}.webp')`}}        
        ></div>

    );
};

export default Banner;