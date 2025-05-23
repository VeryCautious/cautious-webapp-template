import { useQuery } from "@tanstack/react-query"

export const todoKey = 'todos'

export const useToDos = () => {
    const { data, isSuccess } = useQuery({
        queryKey: [todoKey],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return (await response.json()).slice(0, 10) as any[]
        }
    })

    return {
        todos: data,
        isLoading: !isSuccess
    }
}