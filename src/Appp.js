import "./App.css";
import Dropdown from "./components/Dropdown";

function Appp() {
  const Movie = [
    {
      id: 1,
      type: "Fiction",
      Name: "Brother",
    },

    { id: 2, type: "Love", Name: "AMARAN" },
    { id: 3, type: "Love", Name: "DSP" },
    { id: 4, type: "Love", Name: "REMO" },
    { id: 5, type: "Comedy", Name: "LP" },
    { id: 6, type: "Comedy", Name: "LGM" },
    {
      id: 7,
      type: "Action",
      Name: "KANGUVA",
    },
    { id: 8, type: "Love", Name: "GG" },
    { id: 9, type: "Action", Name: "VAAZHAI" },
  ];
  return (
    <div className="App">
      <h1>Movies</h1>
      <Dropdown ArrayData={Movie} />
    </div>
  );
}

export default Appp;
