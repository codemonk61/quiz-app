import React,  {useState} from 'react'
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import CircleProgressBar from '../atoms/ProgressBar';
import SmallCircle from '../atoms/Checkbox';
import Text from '../atoms/Text';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Input from '../atoms/Input';

const StyleGuides = () => {
  const [radioChecked, setRadioChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
    return (
        <>
          <Button
            bgcolor="#28a745"
            color="#fff"
            borderradius="8px"
            fontSize="18px"
            hoverbgcolor="#218838"
            icon={faCoffee}
            iconspace="12px"
            onClick={()=>window.alert}
          >
            Click Me
          </Button>
          <Card
            margin="20px"
            padding="30px"
            paddingmobile="20px"
            marginmobile="15px"
            bgcolor="#f5f5f5"
            borderradius="12px"
            border="1px solid #ddd"
            noshadow
          >
            <h2>Card Title</h2>
            <p>This is a customizable card component.</p>
          </Card>
          <CircleProgressBar
            total={5}
            attempt={3}
            size="120px"
            strokeWidth="12px"
            color="#4caf50"
            bgcolor="#e0e0e0"
            textcolor="#000"
            attemptFontSize="30px"
            attemptFontWeight="bold"
            totalFontSize="18px"
            totalFontWeight="normal"
          />
          <CircleProgressBar
            total={10}
            attempt={7}
            size="100px"
            strokeWidth="8px"
            color="#2196f3"
            bgcolor="#d0d0d0"
            textcolor="#333"
            attemptFontSize="24px"
            attemptFontWeight="bold"
            totalFontSize="16px"
            totalFontWeight="normal"
          />
           <SmallCircle ticked={true} size="15px"/>
           <SmallCircle ticked={false} size="15px"/>
          <Text mt="20px" color="red">Lorem Ipsum</Text>
          <h1>Custom Input Component</h1>
      <Input
        type="radio"
        title="Radio Option"
        checked={radioChecked}
        onChange={() => setRadioChecked(!radioChecked)}
      />
      <Input
        type="checkbox"
        title="Checkbox Option"
        checked={checkboxChecked}
        onChange={() => setCheckboxChecked(!checkboxChecked)}
      />
        </>
      );
}

export default StyleGuides