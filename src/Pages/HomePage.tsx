interface HomePageProps {
    onLogout: () => void
}

const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
    return (
        <div>
            <button onClick={() => onLogout()}>Выйти</button>
        </div>
    );
};

export default HomePage;