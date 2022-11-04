import React, { useState, useContext } from "react";

// import components
import TodoInput from './todo-input.jsx';
import TodoItems from './todo-items.jsx';
import ListFooter from './list-footer.jsx';
import StackedCardsEffect from './stacked-cards-effect.jsx';
import UsernameInput from "./username-input.jsx";
import PageHeader from "./page-header.jsx";
import { AppContext } from './AppContext.jsx';

//create your first component
const Home = () => {

	const {store} = useContext(AppContext);
	
	return (
		<div className="container-fluid mx-auto w-50">
			<PageHeader />
			<UsernameInput />
			
					<div className="card rounded-0 shadow-lg">
						<ul className="list-group list-group-flush">

							<TodoInput />
							<TodoItems />
							{store.todos.length ? <ListFooter /> : null}

						</ul>
					</div>

			<StackedCardsEffect cardHeight={8} marginX={5} />
		</div>
	);
};

export default Home;