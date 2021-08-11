for (let i = 1; i <= 100; i++) {
  let printResult = "";
  if (i % 3 === 0) printResult += "Wizz";
  if (i % 5 === 0) printResult += "Wozz";

  console.log(printResult || i);
}
