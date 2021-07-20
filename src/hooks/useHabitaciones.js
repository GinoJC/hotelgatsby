import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          contenido
          slug
          imagen {
            fluid(maxWidth: 1200) {
              srcSet
            }
          }
        }
      }
    }
  `);
  
  return data.allDatoCmsHabitacion.nodes;
}

export default useHabitaciones;