import React, { useState, useEffect } from "react";
import "./dashbord.css";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    enrolledCourses: 5,
    completedCourses: 2,
    totalHours: 48
  });

  const [recentCourses, setRecentCourses] = useState([
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      progress: 75,
      lastAccessed: "2 hours ago",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Deep Learning with Python",
      progress: 45,
      lastAccessed: "1 day ago",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Natural Language Processing",
      progress: 30,
      lastAccessed: "3 days ago",
      category: "AI/ML"
    }
  ]);

  const [stats, setStats] = useState([
    { label: "Courses Enrolled", value: 5, icon: "📚" },
    { label: "Courses Completed", value: 2, icon: "✅" },
    { label: "Learning Hours", value: 48, icon: "⏰" },
    { label: "Certificates Earned", value: 2, icon: "🏆" }
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Header Section */}
        <div className="dashboard-header">
          <h1>Welcome back, {user.name}!</h1>
          <p>Continue your AI learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Courses Section */}
        <div className="recent-courses">
          <h2>Continue Learning</h2>
          <div className="courses-grid">
            {recentCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <span className="course-category">{course.category}</span>
                </div>
                <div className="progress-section">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{width: `${course.progress}%`}}
                    ></div>
                  </div>
                  <span className="progress-text">{course.progress}% Complete</span>
                </div>
                <div className="course-footer">
                  <span className="last-accessed">Last accessed: {course.lastAccessed}</span>
                  <button className="continue-btn">Continue</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <div className="action-card">
              <div className="action-icon">🔍</div>
              <h3>Browse Courses</h3>
              <p>Explore new AI courses</p>
              <button className="action-btn">Browse</button>
            </div>
            <div className="action-card">
              <div className="action-icon">📊</div>
              <h3>View Progress</h3>
              <p>Track your learning progress</p>
              <button className="action-btn">View Stats</button>
            </div>
            <div className="action-card">
              <div className="action-icon">🎯</div>
              <h3>Set Goals</h3>
              <p>Set new learning goals</p>
              <button className="action-btn">Set Goals</button>
            </div>
          </div>
        </div>

        {/* Learning Streak */}
        <div className="learning-streak">
          <div className="streak-content">
            <div className="streak-icon">🔥</div>
            <div className="streak-info">
              <h3>7 Day Learning Streak!</h3>
              <p>Keep it up! You're on a roll.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;