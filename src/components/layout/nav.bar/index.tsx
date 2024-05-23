import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap"
import '../../../style.scss'

export default class NavBar extends Component {

    public render() {
        return (
            <Navbar className="navbar">
                <Nav className="flex-column">
                    <Nav.Link href="#upload" style={{
                        color: '#126DF5',
                    }}>
                        <i className="bi bi-upload"/>
                        <strong>
                            Upload
                        </strong>
                    </Nav.Link>
                    <Nav.Link href="#profile" style={{
                        color: '#126DF5',
                    }}>
                        <i className="bi bi-person-circle"></i>
                        <strong>
                            Perfil
                        </strong>
                    </Nav.Link>
                    <Nav.Link href="#trash" style={{
                        color: '#FF0000'
                    }}>
                        <i className="bi bi-trash-fill"></i>
                        <strong>
                            Lixeira
                        </strong>
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
