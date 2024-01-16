import "./App.css";
import { useState, useEffect, dropdownRef } from "react";
let list = [
  {
    id: 101,
    name: "John",
    email: "john43@gmail.com",
  },
  {
    id: 102,
    name: "Aman",
    email: "aman34@gmail.com",
  },
  {
    id: 103,
    name: "Sumit",
    email: "sumit9876@gmail.com",
  },
  {
    id: 104,
    name: "Vinay",
    email: "vinay456@gmail.com",
  },
  {
    id: 105,
    name: "Nipun",
    email: "nipun68@gmail.com",
  },
  {
    id: 106,
    name: "Tanya",
    email: "tanya098@gmail.com",
  },
  {
    id: 107,
    name: "Sawan",
    email: "sawan4567@gmail.com",
  },
  {
    id: 108,
    name: "Ajay",
    email: "ajay5678@gmail.com",
  },
  {
    id: 109,
    name: "Rahul",
    email: "rahul678@gmail.com",
  },
  {
    id: 110,
    name: "Rishab",
    email: "rishab89@gmail.com",
  },
  {
    id: 11,
    name: "Ananya",
    email: "ananya34@gmail.com",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [dummyData, setDummyData] = useState(list);
  const [searchInput, setSearchInput] = useState("");
  const [selectedData, setSelectedData] = useState([]);

  function handleItemClick(id, name, email) {
    setSearchInput("")
    setSelectedData([...selectedData, { id: id, name: name, email: email }]);
    setDummyData(dummyData.filter((item) => item.id !== id));
  }

  function handleRemoveItem(id, name, email) {
    setDummyData([...dummyData, { id: id, name: name, email: email }]);
    setSelectedData(selectedData.filter((item) => item.id !== id));
  }

  function handleSearch(event) {
    setSearchInput(event.target.value);
    if (event.target.value)
      setDummyData(
        dummyData.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    else
      setDummyData(
        list.filter(
          (item) => !selectedData.some((selected) => selected.id === item.id)
        )
      );
  }

  return (
    <div className="mainApp">
      <div className="App">
        <div className="Heading">Add Users</div>
        <div className="selectedItems">
          {selectedData.map((item) => (
            <div key={item.id} className="item">
              <div className="itemLogo">{item.name[0]}</div>
              <text>{item.name}</text>
              <text
                className="crossIcon"
                onClick={() => handleRemoveItem(item.id, item.name, item.email)}
              >
                X
              </text>
            </div>
          ))}
        </div>
        
          <input
            type="text"
            className="inputfield"
            placeholder="Enter Some Name....."
            value={searchInput}
            onChange={(e) => handleSearch(e)}
            onFocus={() =>setOpen(true)}
          ></input>
          {open && dummyData.length !== 0 && (
            <div className="dummy_data_container">
              {dummyData.map((item) => (
                <div
                  key={item.id}
                  className="dummy_item"
                  onClick={() =>
                    handleItemClick(item.id, item.name, item.email)
                  }
                >
                  <div className="itemLogo">{item.name[0]}</div>
                  <text className="itemContent">
                    <span className="itemName">{item.name}</span>
                    <span className="itemEmail">{item.email}</span>
                  </text>
                </div>
              ))}
            </div>
          )}
        
      </div>
      <div className="footer">
        Designed By{" "}
        <a
          href="https://linkedin.com/in/nipun18"
          target="_blank"
          className="name"
        >
          Nipun Jain
        </a>
      </div>
    </div>
  );
}

export default App;
