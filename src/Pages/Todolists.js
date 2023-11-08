import React, { useState } from "react";

import LittlePro from "../Sections/LittlePro";
import Practice from "../Sections/Practice";
import ClickBelow from "../Sections/ClickBelow";
import AboutMe from "../Sections/AboutMe";

const Todolists = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const AddItems = () => {
    if (!value) {
    } else {
      setItems([...items, value]);
      setValue("");
    }
  };
  const Deleteitems = (id) => {
    let filterItem = items.filter((em, ind) => {
      return ind !== id;
    });
    setItems(filterItem);
  };
  const RemoveAll = () => {
    setItems([]);
  };

  return (
    <>
      <div>
        <div className="to-do-list">
          <div className="to-do-list-heading">
            <h1>TO DO LIST</h1>
          </div>
          <div className="to-do-list-main">
            <div className="to-do-list-add-text">
              <div className="to-do-list-add-text-sub">
                <input
                  type="text"
                  placeholder="Type Here....."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={AddItems}>Add</button>
              </div>
            </div>
            <div className="to-do-list-lists">
              {items.map((em, ind) => {
                return (
                  <div className="to-do-list-add-list-del" key={ind}>
                    <p>{em}</p>
                    <button onClick={() => Deleteitems(ind)}>Del</button>
                  </div>
                );
              })}
            </div>
            <button
              className="to-do-list-button"
              onClick={RemoveAll}
              data-sm-link-text="Remove all"
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
      <LittlePro new6="in-text-conv-block" />
      <Practice />
      <ClickBelow />
      <AboutMe />
    </>
  );
};

export default Todolists;
