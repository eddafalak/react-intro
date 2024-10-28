import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import UsersPage from "./users/UsersPage";

function App() {
  // Define menu items and title to be passed as props
  const menuItems = ["Home", "About", "Users", "Contact"];
  const title = "Edda Falak";

  return (
    <Router>
      <div>
        {/* Pass title and menuItems as props */}
        <Header title={title} menuItems={menuItems} />
        <Routes>
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
