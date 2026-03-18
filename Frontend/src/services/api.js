const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export const fetchTodos = async () => {
  const response = await fetch(`${API_BASE_URL}/todos`);
  return response.json();
};
