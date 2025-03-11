window.onload = () => {
    renderApp();
}

function renderApp() {
    const app = document.getElementById('app');

    // Componente HomePage
    // Modificar sortida JSX segons convingui per provar els diversos components
    function HomePage() {
        return (
            <div>
                <Profile />
            </div>
        );
    }

    // Comentar/descomentar segons convingui per provar els diversos components

    // function Profile() {
    //     return
    //     <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
    // }

    // function Bio() {
    //     return (
    //       <div class="intro">
    //         <h1>Welcome to my website!</h1>
    //       </div>
    //       <p class="summary">
    //         You can find my thoughts here.
    //         <br><br>
    //         <b>And <i>pictures</b></i> of scientists!
    //       </p>
    //     );
    //   }

    // function profile() {
    //     return (
    //       <img
    //         src="https://i.imgur.com/QIrZWGIs.jpg"
    //         alt="Alan L. Hart"
    //       />
    //     );
    //   }

    //   function Gallery() {
    //     return (
    //       <section>
    //         <h1>Amazing scientists</h1>
    //         <profile />
    //         <profile />
    //         <profile />
    //       </section>
    //     );
    //   }

    const root = ReactDOM.createRoot(app);
    root.render(<HomePage />);
}
