const OrderItem = ({order}) => {
    return ( 
        <tr onClick={()=>console.log('clicked: '+ order.id)}>
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