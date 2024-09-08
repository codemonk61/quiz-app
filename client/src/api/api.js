export const fetchAllQuestions = () => {

  const questions = [
    {
      question: 'What is the capital of France?',
      image_url: "",
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
      type: 'single'
    },
    {
      question: 'Which of the following are programming languages?',
      image_url: "",
      options: ['JavaScript', 'HTML', 'CSS', 'Python'],
      answer: ['JavaScript', 'Python'],
      type: 'multiple'
    },
    {
      question: 'Which of these are fruits?',
      image_url: "",
      options: ['Apple', 'Carrot', 'Banana', 'Tomato'],
      answer: ['Apple', 'Banana', 'Tomato'],
      type: 'multiple'
    },
    {
      question: 'What is the largest planet in our solar system?',
      image_url: "",
      options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
      answer: 'Jupiter',
      type: 'single'
    },
    {
      question: 'Which of these are prime numbers?',
      image_url: "",
      options: ['2', '4', '5', '6', '7'],
      answer: ['2', '5', '7'],
      type: 'multiple'
    },
    {
      question: 'Which elements are gases at room temperature?',
      image_url: "",
      options: ['Oxygen', 'Iron', 'Hydrogen', 'Gold'],
      answer: ['Oxygen', 'Hydrogen'],
      type: 'multiple'
    },
    {
      question: 'What is the main ingredient in guacamole?',
      image_url: "",
      options: ['Tomato', 'Avocado', 'Pepper', 'Onion'],
      answer: 'Avocado',
      type: 'single'
    },
    {
      question: 'Which of these countries are located in Africa?',
      image_url: "",
      options: ['Egypt', 'Brazil', 'Australia', 'Nigeria'],
      answer: ['Egypt', 'Nigeria'],
      type: 'multiple'
    },
    {
      question: 'What is the chemical symbol for gold?',
      image_url: "",
      options: ['Au', 'Ag', 'Pb', 'Fe'],
      answer: 'Au',
      type: 'single'
    },
    {
      question: 'Which of the following are classical elements?',
      image_url: "",
      options: ['Earth', 'Wind', 'Fire', 'Water', 'Ether'],
      answer: ['Earth', 'Fire', 'Water', 'Ether'],
      type: 'multiple'
    }
  ];


  return questions;
}