window.onload = () => {
    renderApp();
}

function renderApp() {
    const app = document.getElementById('app');

    // Componente HomePage
    function HomePage() {
        return (
            <div>
                <Profile />
            </div>
        );
    }

    function Profile() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h1>Photo</h1>
                        <img
                            className="avatar"
                            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ93gcuw3opnNWa7oAEjQ2kiNEA2M1GmeWqyWLoWpcH7rhBp2N0"
                            alt="Aklilu Lemma"
                            width={70}
                            height={70}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h1>About</h1>
                        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
                    </div>
                </div>
            </div>
        );
    }


    const root = ReactDOM.createRoot(app);
    root.render(<HomePage />);
}
