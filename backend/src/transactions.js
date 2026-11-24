const transactions = [
  { id: 1, accountId: "ACC101", amount: 500 },
  { id: 2, accountId: "ACC101", amount: 200 },
  { id: 3, accountId: "ACC102", amount: 1000 },
];

export const getTrasactions = (accId) => {
  return transactions.find((txn) => txn.accountId === accId);
};
export const getAllTransactions = () => {
  return transactions;
};
