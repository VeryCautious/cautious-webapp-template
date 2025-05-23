import { useMsal } from "@azure/msal-react"
import type { FC } from "react"
import { Button, Card, CardBody, Container } from "react-bootstrap"

export const Login: FC = () => {

    const { instance } = useMsal()
    const request = { scopes: [] }

    const initializeMsSignIn = () => {
        instance.loginRedirect(request)
    }
    return (
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card>
                <CardBody style={{ minWidth: 500 }}>
                    <Container style={{ textAlign: "center" }}>
                        <h3>Welcome</h3>
                        <br />
                        <img src="/vite.svg" width={390} height={111} />
                        <br />
                        <br />
                        <Button onClick={initializeMsSignIn} style={{ padding: 10, width: '100%' }}><b>Login with Microsoft</b></Button>
                    </Container>
                </CardBody>
            </Card>
        </Container>
    )
}