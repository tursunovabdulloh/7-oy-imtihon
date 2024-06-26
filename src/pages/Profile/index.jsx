import React from "react";

function Profile() {
  const user = localStorage.getItem("rasm");
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(JSON.parse(localStorage.getItem("userData")));
  return (
    <>
      <div className="container">
        <div className="card card-side bg-base-100 shadow-xl mt-10">
          <figure>
            <img src={user} alt="Movie" className="w-[300px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{userData.displayName}</h2>
            <p>{userData.email}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
