import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Modal, Backdrop } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GiRamProfile } from "react-icons/gi";

const style = {
  position: "absolute",
  top: "12%",
  right: "3%",
  width: "180px",
  height: "100px",
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  borderRadius: "5px",
  boxShadow:
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
};

const CustomBackdrop = styled(Backdrop)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0)",
}));

const handlerLogOut = () => {
  sessionStorage.removeItem("data");
  sessionStorage.removeItem("userData");
  sessionStorage.clear();
  window.location.href = "/";
};

const Navbar = ({ toggleSidebar }) => {
  const [profileVisible, setProfileVisible] = useState(false);
  const toggleProfileVisibility = () => {
    setProfileVisible(!profileVisible);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="main1">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="sidebar_show_btn" onClick={toggleSidebar}>
            <BiMenu />
          </div>
        </div>
        <div>
          <ul>
            <li>
              <button onClick={handleOpen}>
                <i class="fa-regular fa-user"></i>Hello Admin
              </button>
            </li>
            <Modal
              open={open}
              onClose={handleClose}
              BackdropComponent={CustomBackdrop}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div>
                  <ul className="account-pannel">
                    <li className="account-div2">
                      <Link to="profile">
                        <GiRamProfile />
                        <p>Profile</p>
                      </Link>
                    </li>
                    <li className="account-div3" onClick={handlerLogOut}>
                      <PowerSettingsNewIcon />
                      <p>Sign out</p>
                    </li>
                  </ul>
                </div>
              </Box>
            </Modal>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
