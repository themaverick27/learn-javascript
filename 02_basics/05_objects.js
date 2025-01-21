// object de-structure {}

const course = {
    coursename: "javascript-course",
    price: "999",
    courseInstructor: "techiee"
}

// course.coursename

// de-structure
const {coursename} = course
console.log(coursename);

// de-structure
const { coursename: cname} = course;
console.log(cname);
