const Tablecomponent = ({ Arraydata }) => {
  console.log(Arraydata);
  return (
    <div>
      <h1>hello</h1>
      <table>
        <thead>
          <tr>
            <th>genre</th>
            <th>movie</th>
          </tr>
        </thead>
        <tbody>
          {Arraydata.map((element) => {
            return (
              <tr>
                <td>{element.genre}</td>
                <td>{element.movie}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Tablecomponent;



