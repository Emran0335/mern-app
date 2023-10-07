import axios from "axios";

const API_URL = "http://localhost:5000/api/goals/";

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    Headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, goalData, config);
  return response.data;
};

// Get goals
const getGoals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete goal
const deleteGoal = async (goalId) => {
  const response = await axios.delete(API_URL + goalId);
  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
