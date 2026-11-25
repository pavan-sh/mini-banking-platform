console.log("starrt");
setTimeout(() => {
  console.log("Balance fetched");
}, 2000);
console.log("End");

// callback - function passed to another function to be executed later
// async way to handle js code, but becomes complex interdependant tasks with complex nesting
/*
Eg.
checkAccount(fromAccount, (account) => {
  checkBalance(account, (balance) => {
    deductMoney(account, amount, (result) => {
      creditMoney(toAccount, amount, (creditResult) => {
        saveTransaction(result, (transaction) => {
          notifyCustomer(transaction);
        });
        ...
*/

const fetchAccount = (accountId, callback) => {
  setTimeout(() => {
    const account = {
      accountId: accountId,
      balance: 5000,
    };

    callback(account);
  }, 2000);
};

fetchAccount("ACC101", (account) => {
  console.log(account);
});
