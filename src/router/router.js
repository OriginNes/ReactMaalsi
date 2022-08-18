import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "../components/navbar";
import Title from "../components/title";
import Account from "../components/account";

const Router = () => {


    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Title/> } />
                <Route path="/option_1" element={<Title/>} />
                <Route path="/account" element={<Account/>} />
                <Route path="/register" element={<Title/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router