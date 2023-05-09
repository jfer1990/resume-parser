export async function fetchMembers() {
  try {
    const endPoint = import.meta.env.VITE_REACT_APP_REST_API + '/students/getAll';
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw new Error('Error en la solicitud al endpoint');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al obtener los datos de los estudiantes');
  }
}
export async function fetchReviewers() {
  try {
    const endPoint = import.meta.env.VITE_REACT_APP_REST_API + '/reviewers/getTodayAssignation';
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw new Error('Error en la solicitud al endpoint');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al obtener los datos de los estudiantes');
  }
}

// Función para agregar un nuevo usuario
export async function addUser(newUser) {
  const endPoint = import.meta.env.VITE_REACT_APP_REST_API + '/students/getAll';
  const response = await fetch(endPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  const data = await response.json();
  return data;
}
