import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../component/Exercises";
import HeroBanner from "../component/HeroBanner";
import SearchExercises from "../component/SearchExercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyParts={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
