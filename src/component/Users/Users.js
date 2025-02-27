import React, { useState } from "react";
import TitleChanger from "../../TitleChanger/TitleChanger";
import BreadCrumb from "../Breadcrumb/index";
import { FaUsers } from "react-icons/fa";

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
  height: "90%",
};

const Users = () => {
  return (
    <>
      <TitleChanger title="Users" />
      <BreadCrumb pageTitle="Users" />
      <div>
        <div className="order_info">
          <div className="orders">
            <div className="icon">
              <FaUsers />
            </div>
            <div className="content">
              <p>Total Users</p>
              <span>50</span>
            </div>
          </div>
        </div>
        <div className="table_info">
          <table>
            <thead>
              <tr>
                <th>S no.</th>
                <th>Email ID</th>
                <th>Employee Id And Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>ljbgjhu@gmail.com</td>
                <td>987634</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>ljbgjhu@gmail.com</td>
                <td>385665</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>ljbgjhu@gmail.com</td>
                <td>124543</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
