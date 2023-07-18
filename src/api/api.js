async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Error en la solicitud');
  }
  return response.json();
}

export async function fetchData(baseUrl) {
  const response = await fetch(`${baseUrl}`);
  return handleResponse(response);
}

export async function postData(baseUrl, body) {
  const userWithAdmin = { ...body, isAdmin: false };
  const response = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userWithAdmin),
  });
  return handleResponse(response);
}

export async function putData(baseUrl, body) {
  const response = await fetch(`${baseUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return handleResponse(response);
}

export async function deleteData(baseUrl, id) {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
}
