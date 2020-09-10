import React, { useState } from 'react';
import TodoForm from './TodoForm';
import '../assets/todo.css';
// Material UI Imports
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, props }) => {
	console.log('🍒', props);
	const [edit, setEdit] = useState({
		id: null,
		value: '',
	});

	const [claim, setClaim] = useState(false);
	const [checked, setChecked] = useState(false);

	const submitUpdate = value => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: '',
		});
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} user={props.user} />;
	}

	const handleClaim = (e, claim) => {
		setChecked(e.target.checked);
		console.log('this has been checked', { claim });
	};

	return todos.map((todo, index) => (
		<div
			className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
			key={index}
		>
			<div key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.taskName}
				<br></br>
				{todo.taskDetail}
			</div>
			<div className='icons'>
				<FormControlLabel
					control={
						<Checkbox
							onChange={handleClaim}
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
							name='checkedH'
						/>
					}
					label='Claim this Chore'
				/>
				<RiDeleteBin5Line
					onClick={() => removeTodo(todo.id)}
					className='delete-icon'
				/>
				<TiEdit
					onClick={() => setEdit({ id: todo.id, value: todo.taskName })}
					className='edit-icon'
				/>
			</div>
		</div>
	));
};

export default Todo;
