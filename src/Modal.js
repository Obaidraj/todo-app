import React, { useState } from "react";

function Modal() {
  const [modal, setMoal] = useState(true);
  const [name, setName] = useState("");
  const updateModal = () => {
    setMoal(false);
  };
  return (
    <div>
      {modal ? (
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Please Your Name!
              </h5>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateModal}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Welcome {name}</h1>
      )}
    </div>
  );
}

export default Modal;
