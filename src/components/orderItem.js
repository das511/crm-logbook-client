import { useHistory } from "react-router-dom";
import { ORDER_ROUTE } from "../utils/consts";
import { Pricetag } from '../assets/img/pricetag'
import { useContext } from "react";
import { Context } from "..";

const OrderItem = ({order}) => {
    const {status} = useContext(Context).order
    const {user} = useContext(Context).order
    const history = useHistory()
    return ( 
        <tr onClick={()=> history.push(ORDER_ROUTE + '/' + order.id)}>
            <td>
                <Pricetag currentFill={ status.find(s => order.statusId === s.id).color } className="m-1"/>
                { order.id  }
            </td>
            <td>{ order.createdAt }</td>
            <td>{ order.address }</td>
            <td>{ order.customer }</td>
            <td>{ user.find(u => order.userId === u.id).surname }</td>
            <td>{ order.comment }</td>
        </tr>
     );
}
 
export default OrderItem;