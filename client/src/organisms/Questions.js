import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import QuestionCard from '../molecules/QuestionCard'
import CircleProgressBar from '../atoms/ProgressBar';
import Button from '../atoms/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Text from '../atoms/Text';
import { fetchAllQuestions } from '../api/api';
import {useDispatch} from 'react-redux'
import { setQuestions, setAnswersInStore } from '../redux/redux';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../layout/PageContainer';

const CircularBarWrapper = styled.div`
   position: absolute;
   top: 0%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: #fff;
   border-radius: 50%;
   padding: 8px;
`;

const FixedButton = styled.div`
  position: fixed;
   right: 20px;
  bottom: 20px;
  display: block;
`


const Questions = () => {

    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [answers, setAnswers] = useState({});

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOptionChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        const question = allQuestions[currentQuestionIndex];
    
        if (question.type === 'multiple') {
          setSelectedOptions((prevSelectedOptions) =>
            isChecked
              ? [...prevSelectedOptions, value]
              : prevSelectedOptions.filter((option) => option !== value)
          );
        } else {
          // For single answer type questions
          setSelectedOptions([value]);
        }
      };

      const handleNext = () => {
        const question = allQuestions[currentQuestionIndex];
    
        if (question.type === 'single' && selectedOptions.length !== 1) {
          alert('Please select exactly one option.');
          return;
        }
    
        if (question.type === 'multiple' && selectedOptions.length === 0) {
          alert('Please select at least one option.');
          return;
        }
    
        // Save the answer for the current question
        const answer = question.type === 'multiple' ? selectedOptions : selectedOptions[0];
        
        // Use a callback to ensure the latest state is captured
        setAnswers((prevAnswers) => {
          const updatedAnswers = {
            ...prevAnswers,
            [currentQuestionIndex]: answer
          };
          // Check if this is the last question
          if (currentQuestionIndex === allQuestions.length - 1) {
            console.log('Quiz submitted:', updatedAnswers);
            dispatch(setAnswersInStore(updatedAnswers))
            navigate('/resultscreen')

          }
          return updatedAnswers;
        });
    
        if (currentQuestionIndex < allQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOptions([]); // Reset selected options for the next question
        }
      };
    
      const question = allQuestions[currentQuestionIndex];
    
      console.log(answers)
    
    useEffect(() => {
        const questions = fetchAllQuestions()
        setAllQuestions(questions)
        dispatch(setQuestions(questions))
    }, [dispatch])


    return (
        <PageContainer>
                <CircularBarWrapper>
                    <CircleProgressBar
                        total={allQuestions.length}
                        attempt={currentQuestionIndex + 1}
                        size="100px"
                        strokeWidth="6px"
                        color="#4caf50"
                        bgcolor="#e0e0e0"
                        textcolor="#000"
                        attemptFontSize="30px"
                        attemptFontWeight="bold"
                        totalFontSize="18px"
                        totalFontWeight="normal"
                    />
                </CircularBarWrapper>
                {allQuestions.length > 0 && <Text ml="15px" mr="8px" mt="30px" mb="30px" fontSize="20px" fontWeight="bold">{question.question}</Text>}
                {/* <img 
                 src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fplotdigitizer.com%2Fextrac-data-graph-image&psig=AOvVaw0jGvtgNKU9vgVE8K1QD1Lr&ust=1725798781035000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiPjc7rsIgDFQAAAAAdAAAAABAE"
                alt="question_link"
                /> */}
                {allQuestions.length > 0 && question.options.map((option, index) => {
                    return <QuestionCard
                        key={`option${index}`}
                        type={question.type === 'single' ? 'radio' : 'checkbox'}
                        id={`option${index}`}
                        name="quizOption"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        disabled={question.type === 'single' && selectedOptions.length > 0 && question.type === 'single'}
                        option={option}
                        onAnswerChange={handleOptionChange}
                    />
                })
                }
           
            <FixedButton>
                <Button
                    bgcolor="red"
                    color="#fff"
                    borderradius="20px"
                    fontSize="18px"
                    hoverbgcolor="#218838"
                    icon={faArrowRight}
                    iconspace="12px"
                    onClick={handleNext}
                >{allQuestions.length - 1 === currentQuestionIndex ? "Submit" : "Next"}
                </Button>
            </FixedButton>
       </PageContainer>
    )
}

export default Questions