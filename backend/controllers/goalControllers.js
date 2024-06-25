//@desc   Get Gols
//@route  GET /api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({ messege: 'Get Goals' });
};

//@desc   Set Gols
//@route  POST /api/goals
//@access Private
const setGoals = (req, res) => {
  console.log(req.body);

  res.status(200).json({ messege: 'Set Goals' });
};

//@desc   Update Gols
//@route  PUT /api/goals/:id
//@access Private
const updateGoals = (req, res) => {
  res.status(200).json({ messege: `Update Goals ${req.params.id}` });
};

//@desc   Delete Gols
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ messege: `Delete Goals ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
