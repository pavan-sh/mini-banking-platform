// CommonJS module export, require
const accounts = [
  { id: "ACC101", balance: 5000 },
  { id: "ACC102", balance: 8000 },
];

const getAccount = (accountId) => {
  return accounts.find((acc) => acc.id === accountId);
};
const getAllAccount = () => {
  return accounts;
};

// exposes functionality from module
module.exports = {
  getAllAccount,
  getAccount,
};
