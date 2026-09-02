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
        <div className="task-container">
            <h1>Task Manager</h1>

            <p className="task-subtitle">
                Organize your tasks and stay productive.
            </p>

            <form className="task-form" onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />

                <button className="add-button" type="submit">
                    Add Task
                </button>
            </form>

            {tasks.length === 0 ? (
                <p className="empty-message">
                    No tasks yet. Add your first task!
                </p>
            ) : (
                <ul className="task-list">
                    {tasks.map((task) => (
                        <li className="task-item" key={task.id}>
                            <span className="task-title">{task.title}</span>

                            <button
                                className="delete-button"
                                onClick={() =>
                                    router.delete(`/tasks/${task.id}`)
                                }
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
