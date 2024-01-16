import  { useEffect, useState } from "react";

const Search = () => {
  //Estado
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //Consumo de API
  const url = "https://jsonplaceholder.typicode.com/users";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  //Búsqueda de datos
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  //Filtrado de datos
  let results = [];
  if (!search) {
    results = users;
  } else {
    results = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }


  //Render a la vista
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        className="form-control"
        value={search}
        onChange={handleSearch}
      />

      <table className="table table-striped table-hover my-4 shadow-lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>User name</th>
          </tr>
        </thead>

        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;