import React from "react";

const Profile = () => <div className="container-fluid">
    <div className="row personal-profile">
        <div className="col-md-4 personal-profile__avatar">
          <img className="" src="../assets/avanthika.jpg" alt="avatar" />
        </div>
        <div className="col-md-8">
          <p className="personal-profile__name">Avanthika_</p>
          <p className="personal-profile__work">Fullstack Javacript Developer</p>
          <p className="personal-profile__social">
            <a href="" target="_blank"><i className="fa fa-github"></i></a>
            <a href="" target="_blank"><i className="fa fa-linkedin-square"></i></a>
            <a href="" target="_blank"><i className="fa fa-facebook-square"></i></a>
          </p>
        </div>
      </div>
</div>;

export default Profile;