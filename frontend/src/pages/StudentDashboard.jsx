import React, { useEffect, useState } from "react";
import Course from "../courese/Course";
import App from "../courese/product/App";
import { useDispatch, useSelector } from "react-redux";
import { GetstudentData, courseData } from "../redux/action";
import { CircularProgress } from "@chakra-ui/react";
import MainPage from "../components/MainPage";

function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [check, setCheck] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((pre) => pre.reducer);
  const data2 = useSelector((pre) => pre.reducer2);
  console.log(data);
 
  useEffect(() => {
    dispatch(courseData());
  }, []);
  useEffect(() => {
    setCourses(data.getCourseData);
  }, [data]);
  useEffect(() => {
    dispatch(GetstudentData(data.signupData.email));
  }, []);
  useEffect(() => {
    setCheck(data2.emailData);
  }, [data2]);
  console.log(data2);
  console.log(check);
  return (
    <div>
      {/* {check && <MainPage />} */}
      {check ? (
        <MainPage />
      ) : (
        <>
          {courses.length > 0 ? (
            <App products={courses} email={data.signupData.email} />
          ) : (
            <CircularProgress isIndeterminate color="red.500" />
          )}
        </>
      )}
    </div>
  );
}

export default StudentDashboard;
