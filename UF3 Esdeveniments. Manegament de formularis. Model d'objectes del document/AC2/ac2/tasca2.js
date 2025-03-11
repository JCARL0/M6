window.onload = () => {
    renderApp();
}

function renderApp() {
    const app = document.getElementById('app');

    // Componente HomePage
    function HomePage() {
        return (
            <div>
                <Gallery />
            </div>
        );
    }

    function Gallery() {
        return (
            <div>
                <h1>Notable Scientists</h1>
                <section className="profile">
                    <h2>Maria Skłodowska-Curie</h2>
                    <img
                        className="avatar"
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/220px-Marie_Curie_%281900%29.jpg"}
                        alt="Maria Skłodowska-Curie"
                        width={70}
                        height={70}
                    />
                    <ul>
                        <li>
                            <b>Profession: </b>
                            physicist and chemist
                        </li>
                        <li>
                            <b>Awards: 4 </b>
                            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
                        </li>
                        <li>
                            <b>Discovered: </b>
                            polonium (chemical element)
                        </li>
                    </ul>
                </section>
                <section className="profile">
                    <h2>Katsuko Saruhashi</h2>
                    <img
                        className="avatar"
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZG_EyUQ4_4967ox6xqplFARawJYWMSIagFg&s"}
                        alt="Katsuko Saruhashi"
                        width={70}
                        height={70}
                    />
                    <ul>
                        <li>
                            <b>Profession: </b>
                            geochemist
                        </li>
                        <li>
                            <b>Awards: 2 </b>
                            (Miyake Prize for geochemistry, Tanaka Prize)
                        </li>
                        <li>
                            <b>Discovered: </b>
                            a method for measuring carbon dioxide in seawater
                        </li>
                    </ul>
                </section>
            </div>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<HomePage />);
}
