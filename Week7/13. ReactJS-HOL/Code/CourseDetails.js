import React from 'react';

function CourseDetails({ course }) {
  const hasCourse = course && course.title;
  
  return (
    <div>
      <h2>Course Details</h2>
      {hasCourse && (
        <>
          <p>Title: {course.title}</p>
          <p>Instructor: {course.instructor}</p>
          <p>Duration: {course.duration}</p>
        </>
      )}
      {!hasCourse && <p>No course information available</p>}
    </div>
  );
}

export default CourseDetails;