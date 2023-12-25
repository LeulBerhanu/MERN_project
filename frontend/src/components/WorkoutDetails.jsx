import React from "react";
import { useWorkoutContext } from "../../hooks/useWorkoutsContext";
import { MdDelete } from "react-icons/md";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const p_style = "m-0 text-sm text-[#555]";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div>
      <h4 className="text-primary text-lg mb-2  ">{workout.title}</h4>
      <p className={p_style}>
        <strong>Load (kg): </strong> {workout.load}
      </p>
      <p className={p_style}>
        <strong>Reps: </strong> {workout.reps}
      </p>
      <p className={p_style}>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span
        onClick={handleDelete}
        className="absolute top-5 right-5 cursor-pointer bg-[#f1f1f1] text-[#333] p-2 rounded-[50%]"
      >
        <MdDelete />
      </span>
    </div>
  );
};

export default WorkoutDetails;
