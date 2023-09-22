type FetchParameters = Parameters<typeof fetch>;
export const apiClient = async <T>(
  input: FetchParameters[0],
  init: FetchParameters[1]
) => {
  const response = await fetch(`${process.env.API_HOST}${input}`, {
    ...init,
    headers: {
      "Content-type": "application/json",
    },
  });

  const jsonResponse = await response.json();
  if (response.ok) {
    return jsonResponse as T;
  }
  throw new Error(jsonResponse.message);
};
