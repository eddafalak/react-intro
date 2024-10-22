import Header from './Header';

function App() {
  // Define menu items and title to be passed as props
  const menuItems = ["Home", "About", "Contact"];
  const title = "Edda Falak";

  return (
    <div>
      {/* Pass title and menuItems as props */}
      <Header title={title} menuItems={menuItems} />
    </div>
  );
}

export default App;
