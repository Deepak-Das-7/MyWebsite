import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';

const Courses = () => {
    const { userDetails } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            if (userDetails && userDetails.id) {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/coursesOfUser/${userDetails.id}`);
                    setCourses(response.data);
                } catch (error) {
                    console.error('Failed to fetch courses:', error);
                }
            }
        };

        fetchCourses();
    }, [userDetails]);

    return (
        <div className="container mt-4">
            <h2>My Courses</h2>
            <div className="row">
                {courses.length > 0 ? (
                    courses.map(course => (
                        <div key={course._id} className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.description}</p>
                                    <div className="card-text">
                                        <strong>Students:</strong>
                                        <ul>
                                            {course.students.map(student => (
                                                <li key={student._id}>
                                                    {student.firstName} {student.lastName}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No courses available</div>
                )}
            </div>
        </div>
    );
};

export default Courses;
