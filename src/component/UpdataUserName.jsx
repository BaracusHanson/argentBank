import React from "react";

const UpdataUserName = () => {
  return (
    <div className="update-username">
      <h1 className="welcomeTitle">Welcome back</h1>
      <div className="input-group">
        <input type="text" placeholder="Tony" className="input" />
        <input type="text" placeholder="Jarvis" className="input" />
      </div>
      <div className="button-group">
        <button className="updateButton ">Save</button>
        <button className="updateButton ">Cancel</button>
      </div>
    </div>
  );
};

export default UpdataUserName;
