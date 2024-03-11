import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, HStack, Spinner } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { useDispatch, useSelector } from "react-redux";

import { animateScroll } from "react-scroll";
import { AuthContextData } from "../../authProvider/AuthContainer";
import { useNavigate } from "react-router-dom";
const App = ({products,  email, setCheck ,setNewCourse}) => {
  const { obj } = useContext(AuthContextData);
  console.log(obj)
  // const [products,setProducts]=useState(obj.getCourseData)
  const [details, setDetails] = useState({
    title:"",
    level:"",
    description:"",
    instructor:"",
    duration:"",
  });
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const isLoading = false;
  useEffect(() => {
    animateScroll.scrollToTop({ smooth: true });
  }, []);
  const handleSumit = () => {
    if (
      details.title  &&
      details.level  &&
      details.description &&
      details.duration &&
      details.instructor 
    ) {
      setNewCourse(details)
      setState(false)
    } else {
      console.log("fill");
    }
  };
  console.log(details);
  return (
    <Box
      maxW={"95%"}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      {isLoading ? (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
          minHeight={"80vh"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </Flex>
      ) : (
        <>
          {obj == "admin" && (
            <Box mb={10}>
              <HStack>
                <Button
                  colorScheme="blue"
                  width="full"
                  p={3}
                  onClick={(e) => setState((pre) => !pre)}
                >
                  Create Course
                </Button>
                {/* <Button
                  colorScheme="blue"
                  width="full"
                  onClick={(e) => navigate("/main")}
                >
                  Go to DashBoard
                </Button> */}
              </HStack>
            </Box>
          )}

          {state && (
            <>
              <div className="bg-grey-lighter min-h-screen flex flex-col mt-10">
                <div className="container mt-0 max-w-lg  mx-auto flex-1 flex flex-col items-center px-2">
                  <div className="bg-white p-10 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 mt-0  text-3xl text-center">
                      Create Course
                    </h1>
                    <input
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="title"
                      placeholder="Topic Name"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />

                    <input
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="duration"
                      placeholder="Duration"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="level"
                      placeholder="Level"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="instructor"
                      placeholder="Instructor name"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      className="block border border-grey-light w-full p-3 rounded mb-4"
                      name="description"
                      placeholder="description"
                      onChange={(e) =>
                        setDetails({
                          ...details,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />

                    <Button
                      bg={"blue.500"}
                      type="submit"
                      className="w-full  text-center py-3 rounded bg-green  hover:bg-green-dark focus:outline-none my-1" style={{color:"white"}}
                      onClick={handleSumit}
                    >
                      Create Account
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          <ProductGrid>
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                email={email}
                setCheck={setCheck}
              />
            ))}
          </ProductGrid>
        </>
      )}
    </Box>
  );
};

export default App;
