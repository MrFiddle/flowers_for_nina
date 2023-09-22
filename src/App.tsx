import "./App.css";
import Nina from "./assets/nina.jpg";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-pink-100">
      <img
        src={Nina}
        alt="Nina"
        className="rounded-full w-[200px] h-[200px] object-cover"
      />
      <h1 className="text-[3rem] font-bold text-pink-500 mt-[10px]">
        Hola mi vida
      </h1>
      <p className="text-[2rem] text-center w-[80%] mt-[10px] text-pink-950 font-semibold">
        Recuerda que te quiero muchísimo y que te extraño
        <br />
        <span className="text-red-600">&lt;3</span>
      </p>
      <div className="flex flex-row justify-center items-center mt-[10px] bg-pink-950 rounded-2xl p-[10px] animate-wave">
        <p
          className="text-pink-100 font-bold text-[1.4rem]"
          onClick={() => navigate("/flower_for_my_princess")}
        >
          Piquele pa que se quede O.O
        </p>
      </div>
    </div>
  );
}

export default App;
