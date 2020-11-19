import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import "./Courses.css";
import Course from "../Course/Course";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  courseSelectedHandler = (id) => {
    this.props.history.push(`${this.props.match.url}/${id}`);
    //   console.log(id);
  };

  render() {
    let courses = this.state.courses.map((course) => {
      return (
        <div
        //   to={{
        //     pathname: `${this.props.match.url}/${course.id}`,
        //     hash: course.title,
        //     search: course.title,
        //   }}
          className="Course"
          key={course.id}
          onClick={() => this.courseSelectedHandler(course.id)}
        >
          {course.title}
        </div>
      );
    });
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">{courses}</section>
        <Route path={`${this.props.match.url}/:id`} component={Course} />
      </div>
    );
  }
}

export default Courses;
