import { useFormik } from "formik"
import * as Yup from "yup"
import { Input, Button } from "@chakra-ui/react"
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"

import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

const Login = () => {

  const {isLogged,setIsLogged} = useContext(UserContext)

  const tafonctiondemort = () =>{
    setIsLogged(false)
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: () => {
      setIsLogged(true)
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("Username is required")
        .max(15, "Username is too long"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short")
    }),
    validateOnChange: false
  })

  return (
    <>
      {!isLogged  ?
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="username" w="300px" isInvalid={formik.errors.username}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>

          <FormControl id="password" mt={5} w="300px" isInvalid={formik.errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="teal" variant="solid" w="100%" mt={5}>
            Submit
          </Button>
        </form>
        
        : 
        
        <Button onClick={tafonctiondemort} colorScheme="teal" variant="solid" w="100%" mt={5}>
            Log Out
        </Button>
      }
    </>
  )
}

export default Login
