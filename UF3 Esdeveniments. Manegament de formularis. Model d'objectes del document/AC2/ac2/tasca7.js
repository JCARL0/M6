window.onload = () => {
  renderApp();
}

function renderApp() {
  const app = document.getElementById('app');

  // Componente HomePage
  function HomePage() {
    return (
      <>
      <Profile person={{
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiGDWxu58BS_M9_hloRMYzZ_f7LMEs8a6qA&s',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeTLnUbv8mNk5qxugU3PdNduUzCTWGHxawg&s',
        name: 'Creola Katherine Johnson',
      }} />
    </>
    );  
  }
  
  let currentPerson;

  function Profile({ person }) {
    currentPerson = person;
    return (
      <Panel>
        <Header />
        <Avatar />
      </Panel>
    )
  }

  function Header() {
    return <h1>{currentPerson.name}</h1>;
  }

  function Avatar() {
    return (
      <img
        className="avatar"
        src={currentPerson.imageUrl}
        alt={currentPerson.name}
        width={50}
        height={50}
      />
    );
  }

  function Panel({ children }) {
    const [open, setOpen] = React.useState(true);
    return (
      <section className="panel">
        <button onClick={() => setOpen(!open)}>
          {open ? 'Collapse' : 'Expand'}
        </button>
        {open && children}
      </section>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<HomePage />);
}
