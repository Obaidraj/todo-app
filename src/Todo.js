import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
function Todo() {
  const initial = {
    msg: "",
    priority: "",
  };
  const [data, setData] = useState(initial);
  const [list, setList] = useState([]);

  const showData = (name, value) => {
    // console.log("ADMIN -->", value);
    setData({
      ...data,
      [name]: value,
    });
  };

  // const showData = (name, value) => {
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  //   console.log(data);
  // };

  const getData = () => {
    setList([...list, { data }]);
    console.log(list);
  };

  const high = {
    background: "red",
  };
  const medium = {
    background: "green",
  };
  const low = {
    background: "#B19C04",
  };

  return (
    <div>
      {data.msg ? (
        <React.Fragment>
          {list.map((li, index) => {
            return (
              <div
                style={
                  data.priority === "High"
                    ? high
                    : data.priority === "Medium"
                    ? medium
                    : low
                }
                className="data"
                key={index}
              >
                {li.data.msg}

                <EditIcon />
                <DeleteForeverIcon />
              </div>
            );
          })}
        </React.Fragment>
      ) : // <div
      //   style={
      //     data.priority === "High"
      //       ? high
      //       : data.priority === "Medium"
      //       ? medium
      //       : low
      //   }
      //   className="data"
      // >
      //   {data.msg}

      //   <EditIcon />
      //   <DeleteForeverIcon />
      // </div>
      null}
      <button
        type="button"
        className="btn btn-primary todo-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Todo
      </button>

      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={data.msg}
                    onChange={(e) => {
                      showData("msg", e.target.value);
                    }}
                  ></textarea>
                  <br />
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    value={data.priority}
                    onChange={(e) => {
                      showData("priority", e.target.value);
                    }}
                  >
                    <option value="Select Any One">
                      Open this select menu
                    </option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={getData}
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
