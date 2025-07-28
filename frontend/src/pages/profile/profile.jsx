import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Account Settings");
  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Chen",
    phoneNumber: "+1-555-0123",
    emailAddress: "alex.chen@email.com",
    city: "San Francisco",
    stateCounty: "CA",
    postcode: "94102",
    country: "United States",
    learningGoal: "Machine Learning Engineer",
    experience: "Intermediate",
    preferredLanguage: "Python"
  });

  const [learningStats] = useState({
    coursesEnrolled: 8,
    coursesCompleted: 5,
    totalLearningHours: 127,
    certificatesEarned: 3,
    currentStreak: 15,
    skillsLearned: 12
  });

  const [achievements] = useState([
    { name: "Python Fundamentals", icon: "🐍", date: "2024-01-15" },
    { name: "ML Basics", icon: "🤖", date: "2024-02-20" },
    { name: "Neural Networks", icon: "🧠", date: "2024-03-10" }
  ]);

  const tabs = [
    "Account Settings",
    "Learning Preferences", 
    "Certificates",
    "Billing & Subscription",
    "Privacy & Notifications"
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUpdate = () => {
    console.log("Profile updated:", profileData);
    // Add your update logic here
  };

  return (
    <div className="profile">
      <div className="profile-container">
        {/* Header Section */}
        <div className="profile-header">
          <div className="header-content">
            <div className="header-left">
              <h1>AI Learning Profile</h1>
              <p>Manage your learning journey and preferences</p>
            </div>
            <button className="change-cover-btn">
              🎨 Customize Theme
            </button>
          </div>
        </div>

        <div className="profile-content">
          {/* Left Sidebar */}
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="profile-avatar">
                <img src="https://via.placeholder.com/80x80/667eea/ffffff?text=AC" alt="Profile" />
                <div className="learning-level">Intermediate</div>
              </div>
              <h3>{profileData.firstName} {profileData.lastName}</h3>
              <p>{profileData.learningGoal}</p>
              <div className="learning-streak">
                <span className="streak-icon">🔥</span>
                <span>{learningStats.currentStreak} day streak!</span>
              </div>
            </div>

            <div className="stats-section">
              <h4>Learning Statistics</h4>
              <div className="stat-item">
                <span className="stat-label">📚 Courses Enrolled</span>
                <span className="stat-value">{learningStats.coursesEnrolled}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">✅ Courses Completed</span>
                <span className="stat-value">{learningStats.coursesCompleted}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">⏰ Learning Hours</span>
                <span className="stat-value">{learningStats.totalLearningHours}h</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">🏆 Certificates</span>
                <span className="stat-value">{learningStats.certificatesEarned}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">🧠 Skills Learned</span>
                <span className="stat-value">{learningStats.skillsLearned}</span>
              </div>
            </div>

            <div className="achievements-section">
              <h4>Recent Achievements</h4>
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <div className="achievement-info">
                    <span className="achievement-name">{achievement.name}</span>
                    <span className="achievement-date">{achievement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="profile-main">
            {/* Tab Navigation */}
            <div className="tab-navigation">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Account Settings Content */}
            {activeTab === "Account Settings" && (
              <div className="settings-content">
                <h3>Personal Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      value={profileData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={profileData.emailAddress}
                      onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      value={profileData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>State/Province</label>
                    <select 
                      value={profileData.stateCounty}
                      onChange={(e) => handleInputChange('stateCounty', e.target.value)}
                    >
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      <option value="WA">Washington</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Postcode</label>
                    <input
                      type="text"
                      value={profileData.postcode}
                      onChange={(e) => handleInputChange('postcode', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Country</label>
                    <select 
                      value={profileData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="India">India</option>
                    </select>
                  </div>
                </div>

                <button className="update-btn" onClick={handleUpdate}>
                  Update Profile
                </button>
              </div>
            )}

            {/* Learning Preferences Tab */}
            {activeTab === "Learning Preferences" && (
              <div className="settings-content">
                <h3>Learning Preferences</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Learning Goal</label>
                    <select 
                      value={profileData.learningGoal}
                      onChange={(e) => handleInputChange('learningGoal', e.target.value)}
                    >
                      <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="AI Researcher">AI Researcher</option>
                      <option value="Deep Learning Specialist">Deep Learning Specialist</option>
                      <option value="NLP Engineer">NLP Engineer</option>
                      <option value="Computer Vision Engineer">Computer Vision Engineer</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Experience Level</label>
                    <select 
                      value={profileData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preferred Programming Language</label>
                    <select 
                      value={profileData.preferredLanguage}
                      onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
                    >
                      <option value="Python">Python</option>
                      <option value="R">R</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="Java">Java</option>
                      <option value="C++">C++</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Daily Learning Goal (minutes)</label>
                    <select>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="90">1.5 hours</option>
                      <option value="120">2 hours</option>
                    </select>
                  </div>
                </div>

                <div className="interests-section">
                  <h4>Areas of Interest</h4>
                  <div className="interests-grid">
                    {['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning', 'Data Science', 'Neural Networks', 'AI Ethics'].map((interest) => (
                      <label key={interest} className="interest-checkbox">
                        <input type="checkbox" />
                        <span>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="update-btn" onClick={handleUpdate}>
                  Save Preferences
                </button>
              </div>
            )}

            {/* Certificates Tab */}
            {activeTab === "Certificates" && (
              <div className="settings-content">
                <h3>Your AI Learning Certificates</h3>
                <div className="certificates-grid">
                  <div className="certificate-card">
                    <div className="certificate-icon">🏆</div>
                    <h4>Python for AI Fundamentals</h4>
                    <p>Completed: January 15, 2024</p>
                    <button className="download-btn">Download PDF</button>
                  </div>
                  <div className="certificate-card">
                    <div className="certificate-icon">🤖</div>
                    <h4>Machine Learning Basics</h4>
                    <p>Completed: February 20, 2024</p>
                    <button className="download-btn">Download PDF</button>
                  </div>
                  <div className="certificate-card">
                    <div className="certificate-icon">🧠</div>
                    <h4>Neural Networks & Deep Learning</h4>
                    <p>Completed: March 10, 2024</p>
                    <button className="download-btn">Download PDF</button>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === "Billing & Subscription" && (
              <div className="settings-content">
                <h3>Subscription & Billing</h3>
                <div className="subscription-info">
                  <div className="current-plan">
                    <h4>Current Plan: AI Learning Pro</h4>
                    <p>$29.99/month - Unlimited access to all AI courses</p>
                    <p>Next billing date: August 15, 2024</p>
                    <button className="manage-subscription-btn">Manage Subscription</button>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy & Notifications Tab */}
            {activeTab === "Privacy & Notifications" && (
              <div className="settings-content">
                <h3>Privacy & Notification Settings</h3>
                <div className="notification-settings">
                  <div className="setting-group">
                    <h4>Email Notifications</h4>
                    <label className="setting-item">
                      <input type="checkbox" defaultChecked />
                      <span>Course completion reminders</span>
                    </label>
                    <label className="setting-item">
                      <input type="checkbox" defaultChecked />
                      <span>New course recommendations</span>
                    </label>
                    <label className="setting-item">
                      <input type="checkbox" />
                      <span>Weekly progress reports</span>
                    </label>
                  </div>
                  
                  <div className="setting-group">
                    <h4>Privacy Settings</h4>
                    <label className="setting-item">
                      <input type="checkbox" />
                      <span>Make my learning progress public</span>
                    </label>
                    <label className="setting-item">
                      <input type="checkbox" defaultChecked />
                      <span>Allow personalized course recommendations</span>
                    </label>
                  </div>
                </div>
                
                <button className="update-btn">Save Settings</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;