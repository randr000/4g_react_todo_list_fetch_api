import React from "react";

// import components
import TodoItem from './todo-item.jsx';
import TodoInput from './todo-input.jsx';

//create your first component
const Home = () => {

	let todoList = [
		<TodoItem />,
		<TodoItem />,
		<TodoItem />
	];

	return (
		<div className="container-fluid mx-auto w-50">
			<h1 className="display-1 text-center">todos</h1>
			<div className="card">
				<ul className="list-group list-group-flush">
					<TodoInput />
					{todoList}
  				</ul>
			</div>
		</div>
	);
};

export default Home;
