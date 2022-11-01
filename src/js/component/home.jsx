import React, { useState, useContext } from "react";

// import components
import TodoItem from './todo-item.jsx';
import TodoInput from './todo-input.jsx';
import ListFooter from './list-footer.jsx';
import StackedCardsEffect from './stacked-cards-effect.jsx';
import { AppContext, ContextWrapper } from './AppContext.jsx';

//create your first component
const Home = () => {

	const [listKey, setListKey] = useState(0);
	const [todoList, setTodoList] = useState([]);
	const {store} = useContext(AppContext);
	
	return (
		<div className="container-fluid mx-auto w-50">
			<h1 className="display-1 text-center" style={{color: '#C19A6B'}}>todos</h1>
				<div>

					{/* Change things below */}

					<div className="card rounded-0 shadow-lg">
						<ul className="list-group list-group-flush">
							<TodoInput />
							{
								todoList.length ?
								todoList.map((item) => <TodoItem key={item.id} itemID={item.id} todoList={todoList} setTodoList={setTodoList} value={item.value} />) :
								<TodoItem key={-1} itemID={-1} todoList={todoList} setTodoList={setTodoList} value="No tasks, add a task" setListKey={setListKey} />
							}
							{store.listLen ? <ListFooter /> : null}
									</ul>
					</div>

					{/* Change things above */}

				</div>
			<StackedCardsEffect cardHeight={8} marginX={5} />
		</div>
	);
};

export default Home;