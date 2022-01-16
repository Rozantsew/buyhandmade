import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import FetchData from "./FetchData";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

function App() {
  // Gets the value from the store
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <h1>Currently you are: {isLogged ? "you are logged In" : "you are logged Out"}</h1>

      <button onClick={() => dispatch(increment())}>Add + 1</button>

      {/* <div>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div> */}
      <FetchData />
      <Footer />
    </div>
  );
}

export default App;
