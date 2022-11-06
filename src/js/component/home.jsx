import React, { useState, useContext, useEffect } from "react";
import { updateTodos } from '../async-functions.js';

// import components
import { AppContext } from './AppContext.jsx';
import TodoInput from './todo-input.jsx';
import TodoItems from './todo-items.jsx';
import ListFooter from './list-footer.jsx';
import StackedCardsEffect from './stacked-cards-effect.jsx';
import UsernameInput from "./username-input.jsx";
import PageHeader from "./page-header.jsx";
import NewUserModal from "./new-user-modal.jsx";
import ActionButtons from "./action-buttons.jsx";

//create your first component
const Home = () => {

	const {store} = useContext(AppContext);

	useEffect(() => {

        // Update todo list for current user on the server when new item added or item removed
		if (store.username) {
			
			if (store.todos.length) updateTodos(store.username, store.todos);
			// Sending an empty todo list to server causes errors so we send this sample todo
			else updateTodos(store.username, [{label: 'sample task', done: false}]);
		}

    }, [store.todos]);
	
	return (
		<>
		{store.showModal ? <NewUserModal /> : null}
		<div className="container-fluid mx-auto w-50">
			<PageHeader />
			<UsernameInput />
			<ActionButtons />
					<div className="card rounded-0 shadow-lg">
						<ul className="list-group list-group-flush">

							<TodoInput />
							<TodoItems />
							{store.todos.length ? <ListFooter /> : null}

						</ul>
					</div>

			<StackedCardsEffect cardHeight={8} marginX={5} />
		</div>
		</>
	);
};

export default Home;