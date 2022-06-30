export async function handleResponse(response) {
  // console.log(response);
  if (response.status >= 400) throw 'request error';
  const res = await response.json();
  return res;
}

export function handleError(e) {
  console.log(e);
}