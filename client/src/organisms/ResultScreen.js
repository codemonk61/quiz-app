import React, { useEffect, useState } from 'react';
import PageContainer from '../layout/PageContainer'; 
import ResultMeter from '../atoms/ResultMeter';
import ResultStatusCard from '../molecules/ResultStatusCard';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getResult } from '../redux/redux';

const FixedButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: block;
`;

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ResultScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.result);
  const [resultData, setResultData] = useState(null);

  useEffect(() => {

    const storedResults = localStorage.getItem('resultData');
    if (storedResults) {
      setResultData(JSON.parse(storedResults));
    } else {
    
      dispatch(getResult());
    }
  }, [dispatch]);

  useEffect(() => {

    if (data && Object.keys(data).length > 0) {
      
      //used localstorage here because when user refresh the page data remain persist
      localStorage.setItem('resultData', JSON.stringify(data));
      setResultData(data);
    }
  }, [data]);

  if (!resultData) return null; 
  console.log("data>>>>>",data)
  console.log(resultData,">>>>>>>>")
  return (
    <PageContainer>
      <DivWrapper>
        <Text fontSize="20px" fontWeight="bold">Your Result</Text>
        <ResultMeter percentage={resultData.percentage} />
      </DivWrapper>
      {resultData.results.map((result, index) => (
        <ResultStatusCard key={index} value={result.value} type={result.type} />
      ))}
      <FixedButton>
        <Button
          bgcolor="red"
          color="#fff"
          borderradius="20px"
          fontSize="18px"
          hoverbgcolor="#218838"
          iconspace="12px"
          onClick={() => {
            localStorage.removeItem('resultData');
            navigate('/');
          }}
        >
          Start Again
        </Button>
      </FixedButton>
    </PageContainer>
  );
};

export default ResultScreen;
