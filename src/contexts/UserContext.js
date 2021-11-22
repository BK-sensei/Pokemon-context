import { createContext, useState } from "react"
// createContext = une fonction de React => s'utilise en dehors d'un composant
// useState = une hook => s'utilise dans un composant

const UserContext = createContext({})

const UserContextProvider = (props) => {
    const [isLogged, setIsLogged] = useState(false)
    // destructuration de tableau => [valeur, fonction qui mofifiel le state]
    // const [premierElement, deuxiemeElement] = [false, () => {}]

    const value = {
        isLogged: isLogged,
        setIsLogged: setIsLogged
      }
    // Dans 'value' on met tous les states

    return (
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    );
}

export { 
  UserContextProvider, 
  UserContext 
} 
  