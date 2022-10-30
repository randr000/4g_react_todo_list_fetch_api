import React, { useState } from "react";

// import components
import TodoItem from './todo-item.jsx';
import TodoInput from './todo-input.jsx';
import ListFooter from './list-footer.jsx';

//create your first component
const Home = () => {

	const [listKey, setListKey] = useState(0);
	const [todoList, setTodoList] = useState([]);

	return (
		<div className="container-fluid mx-auto w-50">
			<h1 className="display-1 text-center" style={{color: '#C19A6B'}}>todos</h1>
			<div className="card rounded-0 shadow-lg">
				<ul className="list-group list-group-flush">
					<TodoInput todoList={todoList} setTodoList={setTodoList} listKey={listKey} setListKey={setListKey} />
					{
						todoList.length ? 
						todoList.map((item) => <TodoItem key={item.id} itemID={item.id} todoList={todoList} setTodoList={setTodoList} value={item.value} />) :
						<TodoItem key={-1} itemID={-1} todoList={todoList} setTodoList={setTodoList} value="No tasks, add a task" setListKey={setListKey} />
					}
					{todoList.length ? <ListFooter itemsLeft={todoList.length} /> : null}
  				</ul>
				  
			</div>
			<div className="card rounded-0" style={{height: '10px', marginRight: '5px', marginLeft: '5px'}}></div>
			<div className="card rounded-0" style={{height: '10px', marginRight: '10px', marginLeft: '10px'}}></div>
		</div>
	);
};

export default Home;