import React from "react";
import { createRoot } from "react-dom/client";
import TodoApp from "./main/org/example/ToDoApp/Todo-app.js";
import "./styles.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<TodoApp />);
