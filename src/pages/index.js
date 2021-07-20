import React from "react";
import { css } from '@emotion/react';
import Layout from "../components/Layout";
import ImagenHotel from "../components/ImagenHotel";
import ContenidoInicio from "../components/ContenidoInicio";
import useHabitaciones from "../hooks/useHabitaciones";
import HabitacionPreview from "../components/HabitacionPreview";

const IndexPage = () => {
  const habitaciones = useHabitaciones();
  console.log(habitaciones);
  return (
    <Layout>
      <ImagenHotel/>
      <ContenidoInicio/>
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras Habitaciones
      </h2>
      <ul>
        {habitaciones.map(habitacion => 
          <HabitacionPreview key={habitacion.id} habitacion={habitacion}/>
        )}
      </ul>
    </Layout>
  )
}

export default IndexPage;