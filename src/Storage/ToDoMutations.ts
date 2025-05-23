import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Second, WaitFor } from "../Utils/Time";
import { useState } from "react";
import { todoKey } from "./ToDoQueries";

export const useCreateToDo = () => {
    const queryClient = useQueryClient()
    const [creatingToDo, setCreatingToDo] = useState(false)

    const createToDoMutation = useMutation({
        mutationFn: async (newToDo: { title: string; description: string }) => {
            try {
                setCreatingToDo(true)
                await WaitFor(2 * Second) // Simulate a network request
                return { ...newToDo, id: Math.random() * 1000, completed: false }
            } finally {
                setCreatingToDo(false)
            }
        },
        onMutate: (newToDo) => {
            queryClient.cancelQueries({ queryKey: [todoKey] })
            const previousToDos = queryClient.getQueryData([todoKey])
            queryClient.setQueryData([todoKey], (old: any) => {
                return [...old, { ...newToDo, id: 'temp', completed: false }]
            })
            return { previousToDos }
        },
        onError: (_err, _newToDo, context) => {
            queryClient.setQueryData([todoKey], context?.previousToDos)
        }
    })

    return { createToDoMutation, creatingToDo }
}