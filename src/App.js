import { observer } from "mobx-react-lite";
import { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/appRouter";
import NavBar from "./components/navBar";
import { check } from "./http/userApi";
import { fetchAll } from "./http/guideApi";
import { fetchAllOrder } from "./http/orderApi";

const App = observer(() => {
  const {user} = useContext(Context)
  const {order} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      fetchAll('status').then(data=>order.setStatus(data))
      fetchAll('postType').then(data=>order.setPostType(data))
      fetchAll('location').then(data=>order.setLocation(data))
      fetchAll('nameZk').then(data=>order.setNameZk(data))

      fetchAllOrder().then(data=>order.setOrders(data.rows))

      check().then(data=>{
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(()=>setLoading(false))
    },1000)
    
  }, [user,order])
 
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
