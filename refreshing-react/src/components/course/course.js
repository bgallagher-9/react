import React, { Component } from 'react';
import * as courseActions from '../../actions/courseActions';
import { connect } from 'react-redux';
import CourseList from './courseList';

class Courses extends Component {

  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />

      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
