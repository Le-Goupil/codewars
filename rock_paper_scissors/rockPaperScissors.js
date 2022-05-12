const rps = (p1, p2) => {
  const paper = "rock";
  const rock = "scissors";
  const scissors = "paper";
  if (eval(p1) === p2) {
    return "Player 1 won!";
  } else if (eval(p2) === p1) {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
};

// console.log(rps('rock', 'scissors'));
// console.log(rps('rock', 'rock'));
// console.log(rps('paper', 'scissors'));
