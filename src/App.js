// import "./App.css";
// import Tablecomponent from "./components/Tablecomponent";

// function App() {
//  const movie =[
//     { genre: "horror", movie: "black"},
//         { genre: "comedy", movie: "dsp"},
//         {genre: "romance", movie: "gg"},
//         {genre: "action", movie: "amaran"},
//         { genre: "3d", movie: "snow"},
// ];

//   return (

//     <div className="App">
//      <Tablecomponent  Arraydata={movie}/>

//     </div>
//   );
// }

// export default App;

import "./App.css";
import dropdown from "./components/dropdown";
function App() {
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
      <DropBox ArrayData={Movie} />
    </div>
  );
}

export default App;
