import React, { Component } from 'react';

var ProfileUserInfo = ({profile}) => (
  <div>
    <div className="card">
      <div className="card-image">
        <img className="responsive-img" src={profile.picture} alt="profile picture"/>
      </div>
      <div className="card-content">
        <h1 className="card-title">{profile.name}</h1>
      </div>
      <div className="card-content">
        <p>{profile.email}</p>
      </div>
    </div>
  </div>
);

export default ProfileUserInfo;