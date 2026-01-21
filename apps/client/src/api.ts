const BASE_URL = "http://localhost:8080/";

const api = {
  async getAllActivities() {
    const response = await fetch(`${BASE_URL}activities`);
    return await response.json();
  },

  async createLog(logData) {
    const response = await fetch(`${BASE_URL}logs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logData),
    });
    return await response.json();
  },

  async getLatestLogs() {
    const response = await fetch(`${BASE_URL}logs/latest`);
    return await response.json();
  },

  async getTodayLogs() {
    const response = await fetch(`${BASE_URL}logs/today`);
    return await response.json();
  },

  async updateLog(id, updateData) {
    const response = await fetch(`${BASE_URL}logs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    return await response.json();
  },

  async deleteLog(id) {
    const response = await fetch(`${BASE_URL}logs/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  },
};

export default api;
