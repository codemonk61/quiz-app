// const questions = [
//   {
//     question: 'What is the capital of France?',
//     options: ['Paris', 'London', 'Berlin', 'Madrid'],
//     answer: 'Paris',
//     type: 'single' 
//   },
//   {
//     question: 'Which of the following are programming languages?',
//     options: ['JavaScript', 'HTML', 'CSS', 'Python'],
//     answer: ['JavaScript', 'Python'],
//     type: 'multiple' 
//   },
//   {
//     question: 'Which of these are fruits?',
//     options: ['Apple', 'Carrot', 'Banana', 'Tomato'],
//     answer: ['Apple', 'Banana', 'Tomato'],
//     type: 'multiple' 
//   }
// ];

// const userAnswers = {
//   "0": "Paris",
//   "1": [
//     "JavaScript",
//     "Python"
//   ],
//   "2": [
//     "Apple",
//     "Banana",
//      'Tomato'
//   ]
// };

export const calculateResults = (questions, userAnswers) => {
  let correctCount = 0;
  let incorrectCount = 0;

  questions.forEach((question, index) => {
    const correctAnswer = question.answer;
    const userAnswer = userAnswers[index];

    let isCorrect = false;

    if (question.type === 'single') {
      isCorrect = correctAnswer === userAnswer;
    } else if (question.type === 'multiple') {
      if (Array.isArray(userAnswer) && Array.isArray(correctAnswer)) {
        const correctFreq = getFrequency(correctAnswer);
        const userFreq = getFrequency(userAnswer);

        isCorrect = compareFrequencies(correctFreq, userFreq);
      }
    }

    if (isCorrect) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const totalQuestions = questions.length;
  const percentage = (correctCount / totalQuestions) * 100;

  return {
    percentage,
    results: [
      { value: correctCount, type: "correct" },
      { value: incorrectCount, type: "incorrect" }
    ]
  };
}

const getFrequency =(array)=> {
  return array.reduce((freq, item) => {
    freq[item] = (freq[item] || 0) + 1;
    return freq;
  }, {});
}

const compareFrequencies =(freq1, freq2)=> {
  const keys1 = Object.keys(freq1);
  const keys2 = Object.keys(freq2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => freq2[key] === freq1[key]);
}

// const result = calculateResults(questions, userAnswers);
// console.log(result);
