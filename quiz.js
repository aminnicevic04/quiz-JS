function randomQuestion(num) {
  for (let i = 0; i < num; i++) {
    let first = Math.floor(Math.random() * questions.length);
    let second = Math.floor(Math.random() * questions.length);
    let something = questions[first];
    questions[first] = questions[second];
    questions[second] = something;
  }
  console.log(questions);
}
randomQuestion(1000);
