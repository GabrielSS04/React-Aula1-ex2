import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate();

    const Logar = () => {
        if(name === "" || email === ""){
            alert("Preencha todos os campos antes de enviar o formulário!");
        }else{
            alert("Obrigado pelo seu contato!");
            navigate("/main");
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <h1>Login</h1>

            <br />

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="name" value={name} onChange={e => {setName(e.target.value)}}/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="email" value={email} onChange={e => {setEmail(e.target.value)}}/>

            <br />

            <button onClick={Logar}>Logar</button>

        </div>
    );

}