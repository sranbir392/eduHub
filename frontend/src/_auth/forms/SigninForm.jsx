import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./signUpForm.css";
import { useContext, useEffect, useState } from "react";
import { Button, CircularProgress, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginData, signupPost } from "../../redux/action";
import { AuthContextData } from "../../authProvider/AuthContainer";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Password must be at least 2 characters")
    .required("Required"),
});

function SigninForm() {
  const toast = useToast();
  const { checkout, setcheckout } = useContext(AuthContextData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resData = useSelector((pre) => pre.reducer);

  const [loading, setLoading] = useState(false);

  const handleAdminLogin = async () => {
    try {
      // Set admin credentials
      const adminCredentials = {
        email: "ranbir@gmail.com",
        password: "123456",
      };

      // Dispatch login action with admin credentials
      setLoading(true);
      await dispatch(loginData(adminCredentials));
      setLoading(false);

      // Navigate to the next route
      navigate("/home");

      // Show success toast
      toast({
        title: "Logged in as admin",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      setLoading(false);
      // Show error toast if login fails
      toast({
        title: "Failed to log in as admin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (resData.status >= 400 && resData.status < 500) {
      toast({
        title: "Email is not exist or wrong password ",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (resData.status === 200 && checkout) {
      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/home");
    } else if (resData.status >= 600 && resData.status < 700) {
      toast({
        title: "something wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [resData.status, checkout, navigate, toast]);

  return (
    <div className="signup-container bg-white lg:h-[600px] sm:h-[100%] sm:w-[100%] lg:w-[400px] m-auto border-2  p-6 rounded-2xl">
      <div className="flex flex-center flex-col">
        <p className="text-2xl md:text-2xl font-bold text-center py-5">
          Login Your Account
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          setLoading(true);
          setcheckout(true);
          try {
            await dispatch(loginData(values));
            setLoading(false);
            navigate("/home");
          } catch (error) {
            setLoading(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="signup-form ">
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

            <Button
              bg={"blue.500"}
              type="submit"
              className="btn"
              style={{ color: "white" }}
              isLoading={loading}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Button
        mt={3}
        mb={2}
        bg={"blue.500"}
        color={"white"}
        w={"100%"}
        onClick={handleAdminLogin}
      >
        Log In As Admin
      </Button>
      <div className="mt-3 text-center">
        <p>
          Create a new Account ?{" "}
          <Link to={"/"}>
            <span className="text-blue-900 underline ">Signup</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default SigninForm;
