var input = 1;
while (input <= 100) {
  console.log(input);
  input++;
}

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Wizz");
  } else if (i % 5 === 0) {
    console.log("Wozz");
  } else if (i % 3 === 0 && i % 5 === 0);
  {
    console.log("WizzWozz");
  }
}
