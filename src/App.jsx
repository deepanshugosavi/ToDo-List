import React, { useState } from "react";

const App = () => {
  const [list, setItem] = useState({
    item: "",
    items: [],
  });

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setItem({ item: event.target.value, items: [...list.items] });
  };
  const handleRemoveItem = (index) => {
    let data = list.items.filter((v, i) => {
      if (i !== index) {
        return v;
      }
    });

    setItem({ item: "", items: [...data] });
  };

  const handleAddItem = () => {
    if (list.item !== null && list.item !== "") {
      setItem({ item: "", items: [...list.items, list.item] });
    }
  };

  return (
    <div className="global__container">
      <div className="main__container">
        <h2 className="heading__display">ToDo List</h2>
        <div className="input__data">
          <input
            className="input__field"
            placeholder="Add a Item"
            name="item"
            onChange={handleOnChange}
            value={list.item}
          />
          <button className="add__btn" onClick={handleAddItem}>
            +
          </button>
        </div>

        <div className="list__items">
          {list.items.map((value, index, _) => {
            return (
              <div className="item__display">
                <button
                  className="remove__btn"
                  onClick={() => handleRemoveItem(index)}
                >
                  x
                </button>
                <h3 className="item__heading">{value}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
