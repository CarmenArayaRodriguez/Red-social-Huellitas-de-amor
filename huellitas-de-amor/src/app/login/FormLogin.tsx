// Import your Client Component
import Form from 'react-bootstrap/Form';
import './login.css'

function FormLogin() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">CORREO</Form.Label>
                <Form.Control className="input mx-auto" type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">CONTRASEÑA</Form.Label>
                <Form.Control className="input mx-auto" type="password" />
            </Form.Group>
        </Form>
    )
}

export default FormLogin