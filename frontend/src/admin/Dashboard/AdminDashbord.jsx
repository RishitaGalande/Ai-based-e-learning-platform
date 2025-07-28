// src/pages/dashboard/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../Utils/Layout";
import { server } from "../../main";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // Dummy user object — replace with actual user fetching logic
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin", // Change to "user" for testing normal user view
    enrolledCourses: 5,
    completedCourses: 2,
    totalHours: 48,
  });

  const [adminStats, setAdminStats] = useState({});
  const [recentCourses, setRecentCourses] = useState([
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      progress: 75,
      lastAccessed: "2 hours ago",
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Deep Learning with Python",
      progress: 45,
      lastAccessed: "1 day ago",
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Natural Language Processing",
      progress: 30,
      lastAccessed: "3 days ago",
      category: "AI/ML",
    },
  ]);

  const [stats, setStats] = useState([
    { label: "Courses Enrolled", value: 5, icon: "📚" },
    { label: "Courses Completed", value: 2, icon: "✅" },
    { label: "Learning Hours", value: 48, icon: "⏰" },
    { label: "Certificates Earned", value: 2, icon: "🏆" },
  ]);

  const fetchAdminStats = async () => {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setAdminStats(data.stats);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user.role === "admin") {
      fetchAdminStats();
    }
  }, [user.role]);

  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-container">

          <div className="dashboard-header">
            <h1>Welcome back, {user.name}!</h1>
            <p>{user.role === "admin" ? "Admin Panel" : "Continue your AI learning journey"}</p>
          </div>

          {/* Admin Stats */}
          {user.role === "admin" && (
            <div className="admin-stats">
              <h2>Admin Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">📚</div>
                  <div className="stat-content">
                    <div className="stat-value">{adminStats.totalCourses || 0}</div>
                    <div className="stat-label">Total Courses</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🎥</div>
                  <div className="stat-content">
                    <div className="stat-value">{adminStats.totalLectures || 0}</div>
                    <div className="stat-label">Total Lectures</div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-content">
                    <div className="stat-value">{adminStats.totalUsers || 0}</div>
                    <div className="stat-label">Total Users</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Stats */}
          {user.role !== "admin" && (
            <>
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
                            style={{ width: `${course.progress}%` }}
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

              <div className="learning-streak">
                <div className="streak-content">
                  <div className="streak-icon">🔥</div>
                  <div className="streak-info">
                    <h3>7 Day Learning Streak!</h3>
                    <p>Keep it up! You're on a roll.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
