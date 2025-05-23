import type { FC } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useToDos } from "../Storage/ToDoQueries";
import { useCreateToDo } from "../Storage/ToDoMutations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const MainPage: FC<{ title: string }> = ({ title }) => {
    const { todos, isLoading } = useToDos()
    const { createToDoMutation, creatingToDo } = useCreateToDo()

    return (
        <Container className="pt-5">
            <h1>{title}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan={3} className="text-center">Loading...</td>
                        </tr>
                    ) : (
                        todos?.map((todo: any) => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "Yes" : "No"}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
            <Button disabled={creatingToDo} onClick={() => createToDoMutation.mutate({ title: 'I like trees!', description: '🌲🌳🎄' })}>
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                {creatingToDo ? (<>{"Creating..."}<Spinner size="sm" className="ms-2" /></>) : "Create ToDo"}
            </Button>
        </Container>
    )
}