import React, { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:4000/api/workouts");
      const json = await res.json();

      if (res.ok) setWorkouts(json);
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="container p-5 mx-auto grid grid-cols-[3fr_1fr] gap-24 ">
      <div className=" ">
        {workouts &&
          workouts.map((workout) => (
            <div
              key={workout._id}
              className="bg-white rounded mx-5 my-auto p-5 relative shadow-[2px_2px_5px_rgba(0,0,0,0.05)]"
            >
              <WorkoutDetails workout={workout} />
            </div>
          ))}
      </div>
      <div>
        <WorkoutForm />
      </div>
    </div>
  );
}

export default Home;
