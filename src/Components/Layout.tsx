// Layout.tsx
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link, Outlet } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

const routes = [
    { path: "/", name: "MainPage" },
    { path: "/other", name: "OtherPage" },
];

export const Layout = () => {
    const location = useLocation();
    const { instance } = useMsal();
    const user = instance.getAllAccounts()[0];

    return (
        <>
            <Navbar expand="lg" bg="primary" variant="dark" style={{ width: "100%" }}>
                <Container>
                    <Nav activeKey={location.pathname}>
                        {routes.map((route) => (
                            <Nav.Item key={route.name}>
                                <Nav.Link eventKey={route.path} as={Link} to={route.path}>
                                    <h4>{route.name}</h4>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <FontAwesomeIcon icon={faUser} className="text-light me-2" />
                        <Navbar.Text className='text-light'>
                            Hello <b>{user?.name ?? user?.username ?? "Unknown"}</b>!
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};
