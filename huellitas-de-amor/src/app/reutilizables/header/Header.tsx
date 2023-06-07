import LogoHeader from './LogoHeader'
import TituloHeader from './TituloHeader'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css'

function Header() {
    return (
        <Row className="header">
            <Col xs={4}><LogoHeader /></Col>
            <Col xs={8}><TituloHeader /></Col>
        </Row>
    )
}

export default Header