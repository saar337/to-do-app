import React, { useState, useEffect } from "react";
import Title from "./Title.jsx";
import AddToDo from "./AddToDo.jsx";
import TodoList from "./TodoList.jsx";
import FilterToolbar from "./FilterToolbar";
import AddSubject from "./AddSubject.jsx";

const TodoApp = () => {

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];});
    const [filter, setFilter] = useState("all");
    const [subject, setSubject] = useState("");
    const [subjects, setSubjects] = useState(() => {
        const saved = localStorage.getItem("subjects");
        return saved ? JSON.parse(saved) : [{ id: "all", name: "All" }];});
    const [selectedSubject, setSelectedSubject] = useState(() => { return localStorage.getItem("selectedSubject") ?? "all";});
    const [isAddTodoOpen, setIsAddTodoOpen] = useState(false);
    const handleDelete = (id) => {setTodos(todos.filter((todo) => todo.id !== id));};
    const handleAdd = (newTodo) => {setTodos([...todos, {id: Date.now(), text: newTodo.text, description: newTodo.description, completed: false, subjectId: String(newTodo.subjectId), urgency: "low"}]);};
    const handleAddSubject = () => {
        if (subject.trim() === "") return;
        setSubjects([...subjects, {id: String(Date.now()), name: subject}]);
        setSubject("");
        };
    const toggleTodo = (id) => {setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed }: todo));};
    const subjectFilter = todos.filter((todo) => {
        if (selectedSubject === "all") return true;
        return todo.subjectId === selectedSubject;});
    const filteredTodos = subjectFilter.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;});

    useEffect(() => {localStorage.setItem("todos", JSON.stringify(todos));}, [todos]);
    useEffect(() => {localStorage.setItem("subjects", JSON.stringify(subjects));}, [subjects]);
    useEffect(() => {localStorage.setItem("selectedSubject", selectedSubject);}, [selectedSubject]);


return (
    <div className="app-container">

        <div className="sidebar">
            
            <AddSubject
            subject={subject}
            setSubject={setSubject}
            onAddSubject={handleAddSubject}
            />

            {/* הצגת הנושאים ישירות */}
            {subjects.map((subject) => (
                <div key={subject.id}
                onClick={() => setSelectedSubject(String(subject.id))}
                style={{cursor: "pointer", fontWeight: selectedSubject === subject.id ? "bold" : "normal"}}>
                    {subject.name}
                </div>
                ))}

        </div>

        <div className="main">
            <Title text="My To-Do App" />

            <FilterToolbar 
            filter={filter}
            setFilter={setFilter}
            />

            <button onClick={() => setIsAddTodoOpen(true)}>
            + הוסף משימה
            </button>

            {isAddTodoOpen && (
            <AddToDo
                onAdd={handleAdd}
                onClose={() => setIsAddTodoOpen(false)}
                subjects={subjects}
            />
            )}

            <TodoList
            todos={filteredTodos}
            onDelete={handleDelete}
            onToggle={toggleTodo}
            />
        </div>

    </div>
);}

export default TodoApp