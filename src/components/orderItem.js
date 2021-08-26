import { useHistory } from "react-router-dom";
import { ORDER_ROUTE } from "../utils/consts";
import { Pricetag } from '../assets/img/pricetag'

const OrderItem = ({order}) => {
    const history = useHistory()
    return ( 
        <tr onClick={()=> history.push(ORDER_ROUTE + '/' + order.id)}>
            <td>
                <Pricetag currentFill={ order.statusId } className="m-1"/>
                { order.id }
            </td>
            <td>{ order.createdAt }</td>
            <td>{ order.address }</td>
            <td>{ order.customer }</td>
            <td>{ order.userId }</td>
            <td>{ order.comment }</td>
        </tr>
     );
}
 
export default OrderItem;