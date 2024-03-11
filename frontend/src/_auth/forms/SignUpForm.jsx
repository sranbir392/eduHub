import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./signUpForm.css";
import { useContext, useEffect, useState } from "react";
import { Button, CircularProgress, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { signupPost } from "../../redux/action";
import { AuthContextData } from "../../authProvider/AuthContainer";

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Password must be at least 2 characters")
    .required("Required"),

  conform_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

function SignUpForm() {
  const {checkout,setcheckout}=useContext(AuthContextData)
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const resData = useSelector((pre) => pre.reducer);

  const [signup, SetSignup] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    if (resData.status >= 400 && resData.status<500) {
      toast({
        title: "Email already register",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (resData.status === 200&&checkout) {
      toast({
        title: "Resistration successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
     
      navigate("/home")
    }
 
  }, [resData.status]);
  return (
    <div className="signup-container bg-white lg:h-[600px] sm:h-[100%] sm:w-[100%] lg:w-[400px] m-auto border-2  p-6 rounded-2xl " >
      <div className="flex flex-center flex-col ">
        {/* <img src="../../../public/assets/images/logo.svg" alt="signLogo" /> */}
        <p className="text-2xl md:text-2xl font-bold text-center py-5">
  Create a new Account
</p>
      </div>
      <Formik
        initialValues={{
          Name: "",
          email: "",
          password: "",
          conform_password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          setLoading(true);
          setcheckout(true)
          // SetSignup({...signup,email:values.email,name:values.Name,password:values.password})
          dispatch(
            signupPost({
              email: values.email,
              name: values.Name,
              password: values.password,
            })
          )
            .then(() => SetSignup(values))
            .then(() => setLoading(false));
        }}
      >
        {({ errors, touched }) => (
          <Form className="signup-form">
            <div className="form-group">
              <label>Name:</label>
              <Field
                name="Name"
                placeholder="First Name"
                className="form-control"
              />
              {errors.Name && touched.Name ? (
                <div className="error">{errors.Name}</div>
              ) : null}
            </div>

            <div className="form-group">
              <label>Email:</label>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <Field
                name="password"
                type="password"
                placeholder="password"
                className="form-control"
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Conform Password:</label>
              <Field
                name="conform_password"
                type="password"
                placeholder="conform_password"
                className="form-control"
              />
              {errors.conform_password && touched.conform_password ? (
                <div className="error">{errors.conform_password}</div>
              ) : null}
            </div>
            <Button  type="submit" bg={'red'}>
              {loading ? (
                <CircularProgress isIndeterminate size="35px" color="red.500" />
              ) : (
                <> Submit</>
              )}
            </Button>
          </Form>
        )}
      </Formik>
      <div className="mt-3 text-center">
        <p>
          Already have an Acoount ?{" "}
          <Link to={"/signin"}>
            <span className="text-blue-400 underline ">Signin</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
