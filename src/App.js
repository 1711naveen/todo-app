import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalCompleteItems from './components/TotalCompleteItems';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<TaskInput />
			<TaskList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;
