import { observer } from "mobx-react-lite";
import { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/appRouter";
import NavBar from "./components/navBar";
import { check } from "./http/userApi";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      check().then(data=>{
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(()=>setLoading(false))
    },1000)
    
  }, [user])
 
  if(loading){
    return <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}><div className="cp-spinner cp-round" ></div></Container>
  }

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
})

export default App;
