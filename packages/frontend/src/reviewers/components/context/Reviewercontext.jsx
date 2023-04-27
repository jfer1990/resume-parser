import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ReviewerContext = createContext({
  // !!FIXME: POR QUE RAYOS HAY EN EL CONTEXTO COSAS ACERCA DEL WIDTH DE LA APLICACIÓN??
  // !! HAY QUE QUITAR ESTO Y RESOLVERLO CON CONSTANTES EN TODO CASO Y CON CSS
  drawerWidth: 0,
  reviewers: [],
  setReviewers: null,
  students: [],
  setStudents: null,
});

const ReviewerProvider = ({ children }) => {
  // !!FIXME: POR QUE RAYOS HAY EN EL CONTEXTO COSAS ACERCA DEL WIDTH DE LA APLICACIÓN??
  // !! HAY QUE QUITAR ESTO Y RESOLVERLO CON CONSTANTES EN TODO CASO Y CON CSS
  const drawerWidth = 280;

  const [students, setStudents] = useState([]);

  const [reviewers, setReviewers] = useState([]);

  // const onAddStudent = () => {
  //   setStudents([...students, "hola"]);
  // };

  return (
    <ReviewerContext.Provider
      value={{
        drawerWidth,
        reviewers,
        setReviewers,
        students,
        setStudents,
        // onAddStudent,
      }}
    >
      {children}
    </ReviewerContext.Provider>
  );
};

ReviewerProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { ReviewerProvider };
