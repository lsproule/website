"use client";
import React, { useEffect, useState } from "react";

type Star = {
  left?: string;
  top?: string;
  opacity?: string;
  right?: string;
  size?: string;
  tailLength?: string;
  animationDuration?: string;
  animationDelay?: string;
  type?: string;
};

export function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      // Estrellas estáticas con movimiento lento hacia la izquierda
      for (let i = 0; i < 250; i++) {
        newStars.push({
          left: `${Math.random() * 150}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 1.5 + 1}px`,
          animationDuration: `${Math.random() * 100 + 100}s`, // Duración entre 30 y 60 segundos
          animationDelay: `${Math.random() * -30}s`, // Retraso aleatorio negativo
          type: "static",
        });
      }

      // Estrellas fugaces con retraso secuencial
      for (let i = 0; i < 5; i++) {
        newStars.push({
          right: `-50px`,
          top: `${Math.random() * -30}%`,
          opacity: `${Math.random() * 0.2 + 0.1}`,
          size: `${Math.random() * 1.5 + 1}px`,
          tailLength: `${Math.random() * 100 + 50}px`,
          animationDuration: `${Math.random() * 4 + 20}s`,
          animationDelay: `${i * 2 + Math.random() * 2}s`, // Retraso secuencial
          type: "shooting",
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);
  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          className={`absolute ${
            star.type === "shooting" ? "shooting-star" : "static-star"
          }`}
          style={{
            left: star.left,
            top: star.top,
            opacity: star.opacity,
            right: star.right,
            width: star.type === "shooting" ? star.tailLength : star.size,
            height: star.size,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </>
  );
}
