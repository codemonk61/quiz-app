export const fetchAllQuestions = () => {

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
      type: 'single'
    },
    {
      question: 'Which of the following are programming languages?',
      options: ['JavaScript', 'HTML', 'CSS', 'Python'],
      answer: ['JavaScript', 'Python'],
      type: 'multiple'
    },
    {
      question: 'Which of these are fruits?',
      options: ['Apple', 'Carrot', 'Banana', 'Tomato'],
      answer: ['Apple', 'Banana', 'Tomato'],
      type: 'multiple'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
      answer: 'Jupiter',
      type: 'single'
    },
    {
      question: 'Which of these are prime numbers?',
      options: ['2', '4', '5', '6', '7'],
      answer: ['2', '5', '7'],
      type: 'multiple'
    },
    {
      question: 'Which elements are gases at room temperature?',
      options: ['Oxygen', 'Iron', 'Hydrogen', 'Gold'],
      answer: ['Oxygen', 'Hydrogen'],
      type: 'multiple'
    },
    {
      question: 'What is the main ingredient in guacamole?',
      options: ['Tomato', 'Avocado', 'Pepper', 'Onion'],
      answer: 'Avocado',
      type: 'single'
    },
    {
      question: 'Which of these countries are located in Africa?',
      options: ['Egypt', 'Brazil', 'Australia', 'Nigeria'],
      answer: ['Egypt', 'Nigeria'],
      type: 'multiple'
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Pb', 'Fe'],
      answer: 'Au',
      type: 'single'
    },
    {
      question: 'Which of the following are classical elements?',
      options: ['Earth', 'Wind', 'Fire', 'Water', 'Ether'],
      answer: ['Earth', 'Fire', 'Water', 'Ether'],
      type: 'multiple'
    }
  ];


  return questions;
}