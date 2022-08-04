import { useContext } from "react";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import { AuthContext } from "./context/auth-context";

function App() {
  const {token} = useContext(AuthContext)

  return (
    <div className="App">
      {
        token ? <Home /> : <Login />
      }
    </div>
  );
}

export default App;
