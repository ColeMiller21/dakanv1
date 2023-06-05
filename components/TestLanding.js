"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TestLanding = () => {
  const [squares, setSquares] = useState([]);
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  // Calculate the number of columns
  const numberOfSquares = rows * cols; // Calculate the total number of squares

  useEffect(() => {
    const initializeSquares = () => {
      const squaresData = Array.from(Array(numberOfSquares), (_, i) => ({
        index: i,
        state: "black",
      }));
      setSquares(squaresData);
    };

    initializeSquares();
  }, [numberOfSquares]);

  const handleAnimationComplete = (index) => {
    const updatedSquares = [...squares];
    updatedSquares[index].state = "transparent";
    setSquares(updatedSquares);
  };

  useEffect(() => {
    if (window) {
      setRows(Math.ceil(window.innerHeight / 150)); // Calculate the number of rows
      setCols(Math.ceil(window.innerWidth / 150));
    }
    const interval = setInterval(() => {
      const availableSquares = squares.filter(
        (square) => square.state !== "transparent"
      );
      if (availableSquares.length === 0) {
        clearInterval(interval);
      } else {
        const randomIndex = Math.floor(Math.random() * availableSquares.length);
        const updatedSquares = [...squares];
        updatedSquares[availableSquares[randomIndex].index].state = "green";
        setSquares(updatedSquares);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [squares]);

  return (
    <div className="relative w-screen h-screen bg-red-400">
      {squares.map((square) => (
        <motion.div
          key={square.index}
          className={`absolute bg-${square.state}`}
          style={{
            left: `${(square.index % cols) * 150}px`,
            top: `${Math.floor(square.index / cols) * 150}px`,
            width: "150px",
            height: "150px",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: Math.random() }}
          onAnimationComplete={() => handleAnimationComplete(square.index)}
          //   transition=
        />
      ))}
    </div>
  );
};

export default TestLanding;
