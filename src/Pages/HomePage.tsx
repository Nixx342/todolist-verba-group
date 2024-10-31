import '../Styles/HomePage.css'

interface HomePageProps {
    onLogout: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
    return (
        <div className="home-page">
            <header>
                <button onClick={() => onLogout()}>Выйти</button>
            </header>
            
        </div>
    );
};

export default HomePage;