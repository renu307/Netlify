import React, { useState } from "react";
import "../Table.css";

const Tablecomponents = () => {
  const initialData = [
    { id: 1, Genre: "Love", Movie: "GG" },
    { id: 2, Genre: "comedy", Movie: "Amaran" },
    { id: 3, Genre: "action", Movie: "Dsp" },

    { id: 4, Genre: "fiction", Movie: "vaazhai" },
  ];

  const [data, setData] = useState(initialData);
  const [editingRow, setEditingRow] = useState(null);
  const [newGenre, setNewGenre] = useState("");
  const [newMovie, setNewMovie] = useState("");

  const handleDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const handleEdit = (row) => {
    setEditingRow(row.id);
    setNewGenre(row.Genre);
    setNewMovie(row.Movie);
  };

  const handleUpdate = () => {
    const updatedData = data.map((row) =>
      row.id === editingRow ? { ...row, Genre: newGenre, Movie: newMovie } : row
    );
    setData(updatedData);
    setEditingRow(null);
    setNewGenre("");
    setNewMovie("");
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Genre</th>
            <th>Movie</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                {editingRow === row.id ? (
                  <input
                    type="text"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                  />
                ) : (
                  row.Genre
                )}
              </td>
              <td>
                {editingRow === row.id ? (
                  <input
                    type="text"
                    value={newMovie}
                    onChange={(e) => setNewMovie(e.target.value)}
                  />
                ) : (
                  row.Movie
                )}
              </td>
              <td>
                {editingRow === row.id ? (
                  <button onClick={handleUpdate}>Update</button>
                ) : (
                  <button onClick={() => handleEdit(row)}>Edit</button>
                )}
                <button onClick={() => handleDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablecomponents;
