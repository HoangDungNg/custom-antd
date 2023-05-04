import { ConfigProvider, Button, Radio } from 'antd';
import CustomButton from './components/CustomButton/CustomButton';
import SampleCustom from './components/SampleCustom/SampleCustom';
import './App.css';

function App() {
  return (
    <>
      <SampleCustom color="#ffd43b">
        <Button type="default">Second button</Button>
      </SampleCustom>
      <SampleCustom color="green">
        <Radio>Testing radio</Radio>
      </SampleCustom>
    </>
  );
}

export default App;
