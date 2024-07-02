import { useDispatch } from 'react-redux';
import { deleteGoal, updateGoal } from '../features/goals/goalSlice';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(goal.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    dispatch(updateGoal({ id: goal._id, goalData: { text: newText } }));
    setIsEditing(false);
  };

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      {isEditing ? (
        <form className="center-content" onSubmit={handleUpdate}>
          <input
            type="text"
            name="text"
            id="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <br></br>
          <button className="bttn" type="submit">
            Update
          </button>
        </form>
      ) : (
        <h2>{goal.text}</h2>
      )}
      <button className="edit" onClick={handleEdit}>
        <FaEdit />
      </button>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <FaTrash />
      </button>
    </div>
  );
}

export default GoalItem;
