import React from "react";

const p_style = "m-0 text-sm text-[#555]";

const WorkoutDetails = ({ workout }) => {
  return (
    <div>
      <h4 className="text-primary text-lg mb-2 border ">{workout.title}</h4>
      <p className={p_style}>
        <strong>Load (kg): </strong> {workout.load}
      </p>
      <p className={p_style}>
        <strong>Reps: </strong> {workout.reps}
      </p>
      <p className={p_style}>{workout.createdAt}</p>
      <span className="absolute top-5 right-5 cursor-pointer bg-[#f1f1f1] text-[#333] p-2 rounded-[50%]"></span>
    </div>
  );
};

export default WorkoutDetails;
