import React, { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

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
    <div className="container p-5 mx-auto">
      <div>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
}

export default Home;
