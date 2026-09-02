import { useForm, router } from "@inertiajs/react";

export default function Index({ tasks }) {
    const { data, setData, post, reset } = useForm({
        title: "",
    });

    function addTask(e) {
        e.preventDefault();

        post("/tasks", {
            onSuccess: () => reset("title"),
        });
    }

    return (
        <div>
            <h1>Task Manager</h1>

            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />

                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}

                        <button
                            onClick={() => router.delete(`/tasks/${task.id}`)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
