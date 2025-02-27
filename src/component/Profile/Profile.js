import React from "react";

const Profile = () => {

  return (
    <>
      <div class="profile">
        <form>
          <h1>Account Details</h1>
          <div className="profile_img">
            <label htmlFor="fileInput">
              <img
                src=""
                style={{
                  width: "10rem",
                  height: "10rem",
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
                alt="Profile"
              />
            </label>
          </div>
          <div className="input_box">
            <div className="login">Name</div>
            <input
              type="name"
              id="typeName"
              placeholder="Enter Name"
            />
          </div>
          <div className="input_box">
            <div className="login">Email</div>
            <input
              type="name"
              id="typeEmail"
              placeholder="Enter Email"
              disabled
            />
          </div>
          <div className="input_box">
            <div className="login">Mobile</div>
            <input
              type="number"
              id="typeMobile"
              placeholder="Enter Mobile"
            />
          </div>
          <div className="btn">
            <button
              className="button"
              type="submit"
            >
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
