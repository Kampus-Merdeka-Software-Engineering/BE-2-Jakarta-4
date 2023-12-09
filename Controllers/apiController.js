const getData = (req, res) => {
  //untuk mendapatkan data
  res.json({ message: 'Get data from backend' });
};

const addData = (req, res) => {
  //untuk menambah data
  const newData = req.body;
  res.json({ message: 'Data added to backend', data: newData });
};

module.exports = {
  getData,
  addData,
};

