import '../Styles/LoginPage.css'
import { useState } from "react";

interface LoginPageProps {
    onLogin: () => void
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showErr, setShowErr] = useState<boolean>(false)

    const log: string = 'admin'
    const pass: string = 'admin'

    const handleLogin = () => {
        if (username === log && password === pass) {
            onLogin()
        } else {
            setShowErr(true)
        }
    }

    return (
        <div className="login-page">
            <input 
                type="text"
                className="login-input"
                placeholder="Login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="text"
                className="pass-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button 
                onClick={handleLogin}
                className="login-btn"
            >Войти</button>
            {
                showErr && <div className="err-msg">Неправильный логин или пароль</div>
            }
        </div>
    );
};

export default LoginPage;