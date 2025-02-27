import React, { useState } from "react";
import TitleChanger from "../../TitleChanger/TitleChanger";
import BreadCrumb from "../Breadcrumb/index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  backgroundColor: "background.paper",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  p: 4,
  border: "none !important",
  outline: "none",
  overflow: "auto",
  scrollbarWidth: "none",
  zIndex: "1100",
  height: "55%",
};

const Request = () => {
  return (
    <>
      <TitleChanger title="Request" />
      <BreadCrumb pageTitle="Request" />
      <div>
        <div className="table_info">
          <table>
            <thead>
              <tr>
                <th>S no.</th>
                <th>Email ID</th>
                <th>Employee Id And Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>ljbgjhu@gmail.com</td>
                <td>987635</td>
                <td>
                  <div className="subclient4-container">
                    <div className="subclient4">
                      <button type="button">Accept</button>
                    </div>
                    <div className="subclient4">
                      <button type="button" style={{ backgroundColor: "red" }}>
                        Decline
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>ljbgjhu@gmail.com</td>
                <td>385654</td>
                <td>
                  <div className="subclient4-container">
                    <div className="subclient4">
                      <button type="button">Accept</button>
                    </div>
                    <div className="subclient4">
                      <button type="button" style={{ backgroundColor: "red" }}>
                        Decline
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>ljbgjhu@gmail.com</td>
                <td>124534</td>
                <td>
                  <div className="subclient4-container">
                    <div className="subclient4">
                      <button type="button">Accept</button>
                    </div>
                    <div className="subclient4">
                      <button type="button" style={{ backgroundColor: "red" }}>
                        Decline
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <form>
                  <div className="main-client">
                    <div className="subclient1">
                      <h2>Request Confirmation</h2>
                      <strong onClick={handleClose}>
                        <RxCross1 />
                      </strong>
                    </div>

                    <div className="subclient2">
                      <>
                        <div className="subclient21">
                          <label>Name:</label>
                          <input type="text" />
                        </div>
                        <div className="subclient21">
                          <label>Email:</label>
                          <input type="text" />
                        </div>
                      </>
                    </div>
                    <div className="subclient4-container">
                      <div className="subclient4">
                        <button type="button">Accept</button>
                      </div>
                      <div className="subclient4">
                        <button
                          type="button"
                          style={{ backgroundColor: "red" }}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </Box>
            </Modal> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Request;
