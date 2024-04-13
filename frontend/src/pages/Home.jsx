import React, { useEffect, useState } from "react";
import { useWorkoutContext } from "../../hooks/useWorkoutsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  const [error, setError] = useState(null);
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/workouts", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await res.json();

        if (!res.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: [] });
          throw new Error(json.error);
        }

        if (res.ok) {
          setError(null);
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="container p-5 mx-auto grid grid-cols-[3fr_1fr] gap-24 ">
      <div className=" ">
        {workouts && workouts.length !== 0 ? (
          workouts.map((workout) => (
            <div
              key={workout._id}
              className="bg-white rounded mx-auto mb-5 p-5 relative shadow-[2px_2px_5px_rgba(0,0,0,0.05)]"
            >
              <WorkoutDetails workout={workout} />
            </div>
          ))
        ) : (
          <p>{error}</p>
        )}
      </div>
      <div>
        <WorkoutForm />
      </div>
    </div>
  );
}

export default Home;
