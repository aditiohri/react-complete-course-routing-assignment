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

  //   courseSelectedHandler = (id) => {
  //     // this.props.history.push(`/courses/${id}`);
  //     console.log(id);
  //   };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <Link
                to={{
                  pathname: `/${course.id}`,
                  hash: course.title,
                  search: course.title,
                }}
                className="Course"
                key={course.id}
                // onClick={() => this.courseSelectedHandler(course.id)}
              >
                {course.title}
              </Link>
            );
          })}
          {/* <Route path={`${this.props.match.url}/:id`} exact component={Course} /> */}
        </section>
      </div>
    );
  }
}

export default Courses;
