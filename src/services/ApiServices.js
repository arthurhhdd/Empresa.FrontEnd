import axios from "axios";

const API_URL = "https://localhost:7022";

export async function getLead(idStatus) {
  const response = await axios.get(`${API_URL}/Leads/${idStatus}`);
  return response.data;
}

export async function updateLeadStatus(id, accepted) {
  const response = await axios.patch(`${API_URL}/Leads/${id}/status`, {
    accepted: accepted,
  });
  return response.data;
}
