import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Category from "./Components/Category";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import videos from "./json/videos.json";


const categories = [
    "Geografia",
    "Como fazer e usar",
    "Astronomia e Geografia",
    "Climatologia, Meteorologia, Vegetação",
    "Geologia, Hidrografia"
]

function FilterCategory(id){
    return videos.filter(video => video.category === categories[id]);
}

function App (){
    return(

       <>
       <Header/>
       <Banner img="BannerFlorest"/>
       <Container>       

       <Category category="Geogrfia">
        {FilterCategory(0).map((video) => <Card id={video.id} key={video.id} />)} 
       </Category>

       <Category category="Como fazer e usar">
        {FilterCategory(1).map((video) => <Card id={video.id} key={video.id} />)} 
       </Category>

       <Category category="Astronomia e Geografia">
        {FilterCategory(2).map((video) => <Card id={video.id} key={video.id} />)} 
       </Category>

       <Category category="Climatologia, Meteorologia, Vegetação">
        {FilterCategory(3).map((video) => <Card id={video.id} key={video.id} />)} 
        
       <Category category="Geologia, Hidrografia">
        {FilterCategory(4).map((video) => <Card id={video.id} key={video.id} />)} 
       </Category>
       </Category>

       
       


       </Container>      
        <Footer/>                   
       </>

    )
};

export default App;