let choices_amount = 3;
const endpoint = "https://dog.ceo/api/breeds/image/random/" + choices_amount;
let question = {};

async function getQuestion() {
  let randomInt = getRandomAnswer(choices_amount);
  const response = await fetch(endpoint);
  console.log(response);

  const data = await response.json();

  question = {
    choices: [
      findbreed(data.message[0]),
      findbreed(data.message[1]),
      findbreed(data.message[2]),
    ],
    correctAnswer: randomInt,
    corrAnswerImgUrl: data.message[randomInt],
  };
  console.log(question);
  buildHTML(question);
}
getQuestion();