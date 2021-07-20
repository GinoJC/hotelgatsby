import React from 'react';

const HabitacionPreview = ({habitacion}) => {
  console.log(habitacion);
  return (
    <div>
      <h2>{habitacion.titulo}</h2>
      <p>{habitacion.descripcion}</p>
    </div>
  );
};

export default HabitacionPreview;