const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "In the middle of difficulty lies opportunity. – Albert Einstein",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "The best way to get started is to quit talking and begin doing. – Walt Disney"
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
