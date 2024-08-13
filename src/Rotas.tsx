import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Main";
import { Login } from "./Login";


export const Rotas = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    );

}