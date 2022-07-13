import { useState,createContext,useContext } from "react";
const UserContext = createContext();
function ProviderComponent(){
    let name="aman";
    let age = 10;
    return (
    <UserContext.Provider value={{name,age}}>
        <ChildComponent/>
    </UserContext.Provider>
    )

}
function ChildComponent(props){
    const {name} = useContext(UserContext)
    return <><h1>Hi From Child</h1>{name}</>
}
export default ProviderComponent