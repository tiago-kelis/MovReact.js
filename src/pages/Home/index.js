import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import Category, {categories, FilterCategory} from "../../Components/Category";
import Container from "../../Components/Container";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";


function Home (){
    return(

       <>
       <Header/>
       <Banner img="BannerFlorest"/>
       <Container>    
      
     {
           categories.map((category, index) =>

            <Category category={category}>
            {FilterCategory(index).map((video) => <Card id={video.id} key={video.id} />)} 
           </Category>       
        )  
     }   
      
       </Container>      
        <Footer/>                   
       </>

    )
};

export default Home;