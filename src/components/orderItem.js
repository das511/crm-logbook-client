import { useHistory } from "react-router-dom";
import { ORDER_ROUTE } from "../utils/consts";

const OrderItem = ({order}) => {
    const history = useHistory()
    return ( 
        <tr onClick={()=> history.push(ORDER_ROUTE + '/' + order.id)}>
            <td>{ order.id }</td>
            <td>{ order.cratedAt }</td>
            <td>{ order.address }</td>
            <td>{ order.customer }</td>
            <td>{ order.contractor }</td>
            <td>{ order.comment }</td>
        </tr>
     );
}
 
export default OrderItem;