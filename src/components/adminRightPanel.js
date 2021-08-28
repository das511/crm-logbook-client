import { Col, Container, Row, Table } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "..";
import { statusColor } from "../assets/style";

const AdminRightPanel = ({setShowAddress}) => {
    const { order } = useContext(Context)

    return ( 
        <Col md="10" style={{height:(window.innerHeight/100)*92, overflowY:'scroll', marginBottom:150}}>
            <Container>
                <Row>
                    <Col className="m-3 border border-success rounded">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Адрес</th>
                                    <th>Дом</th>
                                    <th>Корпус</th>
                                    <th>Жилой массив</th>
                                </tr>
                            </thead>
                            <tbody>    
                                {
                                    order.address.map(({id,value, house,liter,nameZkId})=> 
                                    <tr key={ id } className="m-1 p-2" onClick={()=>setShowAddress(true)}>
                                        <td>{ value }</td>
                                        <td>{ house }</td>
                                        <td>{ liter }</td>
                                        <td>{ order.nameZk.find(zk => nameZkId === zk.id).value }</td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col className="m-3 border border-success rounded">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Статус</th>
                                    <th>Цвет</th>
                                </tr>
                            </thead>
                            <tbody>    
                                {
                                    order.status.map(({id,value, color})=> 
                                        <tr key={id} className="m-1 p-2">
                                            <td>{ value }</td>
                                            <td style={statusColor(color)} className="text-center">{ color }</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="m-3 border border-success rounded">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Жилой массив</th>
                                </tr>
                            </thead>
                            <tbody>    
                                {
                                    order.nameZk.map(({id,value })=> <tr key={id} className="m-1 p-2"><td>{ value }</td></tr>)
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col className="m-3 border border-success rounded">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Типы заявки</th>
                                </tr>
                            </thead>
                            <tbody>    
                                {
                                    order.postType.map(({id,value })=> <tr key={id} className="m-1 p-2"><td>{ value }</td></tr>)
                                }
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="m-3 border border-success rounded">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Локация</th>
                                </tr>
                            </thead>
                            <tbody>    
                                {
                                    order.location.map(({id,value })=> <tr key={id} className="m-1 p-2"><td>{ value }</td></tr>)
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>  
        </Col> 
        );
}
 
export default AdminRightPanel;