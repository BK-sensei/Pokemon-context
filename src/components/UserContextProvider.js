import { createContext } from "react"

const UserContext = createContext({})

const UserContextProvider = (props) => {
    const [isLogged, setIsLogged] = useState(false)

    const value = {
        isLogged: isLogged,
        setIsLogged: setIsLogged
      }

    return (
        <UserContext.Provider value={value}>
            {props.children}
      </UserContext.Provider>
    );
}

export default UserContextProvider;