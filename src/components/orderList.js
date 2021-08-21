import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import OrderItem from "./orderItem";

const OrderList = observer(() => {
    const {order} = useContext(Context)
    return (
        order.orders.map( order => <OrderItem key={ order.id } order={ order }/>)
    );
})
 
export default OrderList;