import React, { useState } from "react";
import { useWorkoutContext } from "../../hooks/useWorkoutsContext";

const inputStyle =
  "p-2 mt-2 mb-5 w-full border border-[#ddd] rounded cursor-pointer";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={`${
          emptyFields.includes("title")
            ? `${inputStyle} border-error`
            : inputStyle
        }`}
      />

      <label>Load (in Kg): </label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={`${
          emptyFields.includes("load")
            ? `${inputStyle} border-error`
            : inputStyle
        }`}
      />

      <label>Reps: </label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={`${
          emptyFields.includes("reps")
            ? `${inputStyle} border-error`
            : inputStyle
        }`}
      />

      <button className="bg-primary text-white p-2 rounded cursor-pointer focus:outline-none">
        Add Workout
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
