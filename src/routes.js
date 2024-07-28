import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wacth from "./pages/Wacth";

function AppRoutes(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Watch" element={<Wacth/>}></Route>

            </Routes>
        
        </BrowserRouter>

    );
};

export default AppRoutes;