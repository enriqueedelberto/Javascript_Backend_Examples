"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../../models/todo");
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.Todo.find();
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
});
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //THis is for casting data type or something similar
        const body = req.body;
        const todo = new todo_1.Todo({
            name: body.name,
            description: body.description,
            status: body.status
        });
        const newTodo = yield todo.save();
        const allTodos = yield todo_1.Todo.find();
        res
            .status(201)
            .json({ message: "Todo added", todo: newTodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
});
