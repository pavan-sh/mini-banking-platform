// process information
console.log("Node.js version", process.version);
console.log("platform", process.platform);
console.log("Current directory", process.cwd());
console.log("Current PID", process.pid);

// command line arguments (process.argv[])

const accNumber = process.argv[2];
const money = Number(process.argv[3]);

if (!accNumber || !Number.isFinite(money) || money <= 0) {
  console.log("Invalid account ID");
  process.exitCode = 1;
} else {
  console.log("account number is - ", accNumber);
  console.log("money is - ", money);
  console.log(`Transfer request: ${accNumber} => ${money}`);
}

// env variables
const environment = process.env.NODE_ENV || "production";

console.log("Current environment - ", environment);
