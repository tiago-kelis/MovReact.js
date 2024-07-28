import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wacth from "./pages/Wacth";
import PagesNotFound from "./pages/PagesNotFound";

function AppRoutes(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Watch" element={<Wacth/>}></Route>
                <Route path="*" element={<PagesNotFound/>}></Route>

            </Routes>
        
        </BrowserRouter>

    );
};

export default AppRoutes;