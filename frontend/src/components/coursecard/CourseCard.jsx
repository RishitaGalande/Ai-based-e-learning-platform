import React from 'react';
import './courseCard.css';

const CourseCard = () => {
  console.log("CourseCard component is rendering");

  const courses = [
    {
      id: 1,
      title: "Web Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      rating: 4.8,
      hours: 24,
      students: 1250,
      price: "$99",
      category: "Development"
    },
    {
      id: 2,
      title: "React.js Masterclass",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      rating: 4.9,
      hours: 32,
      students: 890,
      price: "$149",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Data Science with Python",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      rating: 4.7,
      hours: 40,
      students: 2100,
      price: "$199",
      category: "Data Science"
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
      rating: 4.6,
      hours: 18,
      students: 750,
      price: "$89",
      category: "Design"
    },
    {
      id: 5,
      title: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      rating: 4.8,
      hours: 36,
      students: 680,
      price: "$179",
      category: "Mobile"
    },
    {
      id: 6,
      title: "Machine Learning Basics",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      rating: 4.9,
      hours: 45,
      students: 1500,
      price: "$249",
      category: "AI/ML"
    }
  ];

  console.log("Courses data:", courses);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2>Available Courses</h2>
        <p>Discover our comprehensive learning programs</p>
      </div>
      
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <div className="course-category">{course.category}</div>
            </div>
            
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              
              <div className="course-rating">
                <div className="stars">
                  {renderStars(course.rating)}
                </div>
                <span className="rating-number">({course.rating})</span>
                <span className="students-count">{course.students} students</span>
              </div>
              
              <div className="course-info">
                <div className="course-duration">
                  <span className="duration-icon">🕒</span>
                  <span>{course.hours} hours</span>
                </div>
                <div className="course-price">{course.price}</div>
              </div>
              
              <button className="enroll-btn" onClick={() => window.location.href = `/course/${course.id}`}>
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;