import React, { useState } from 'react';
import './ProfilePage.css';
import SidebarUsers from './SidebarUsers'; // Import SidebarUsers if it's needed

const ProfilePage = () => {
  // State to manage user information
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Web Developer based in San Francisco.',
    profileIcon: null, // Will store the uploaded image URL
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // Handle profile icon upload
  const handleIconChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserInfo({
        ...userInfo,
        profileIcon: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <SidebarUsers isVisible={true} /> {/* Include the sidebar here */}
      <div className="profile-content">
        <h1>User Profile</h1>
        <div className="profile-section">
          <div className="profile-icon">
            <img
              src={userInfo.profileIcon || 'https://via.placeholder.com/150'}
              alt="Profile Icon"
            />
            <input type="file" onChange={handleIconChange} />
          </div>
          <div className="profile-details">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={userInfo.bio}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="save-button">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
