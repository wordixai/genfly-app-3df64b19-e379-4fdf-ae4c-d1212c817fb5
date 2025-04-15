import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [prevInput, setPrevInput] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (num: string) => {
    if (input === '0' || input === '-0') {
      setInput(num);
    } else {
      setInput(input + num);
    }
  };

  const handleOperationClick = (op: string) => {
    if (input === '0' && op === '-') {
      setInput('-0');
      return;
    }
    setPrevInput(input);
    setInput('0');
    setOperation(op);
  };

  const handleEquals = () => {
    if (!operation || prevInput === '') return;

    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(input);
    let result = 0;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    setInput(result.toString());
    setPrevInput('');
    setOperation('');
  };

  const handleClear = () => {
    setInput('0');
    setPrevInput('');
    setOperation('');
  };

  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput(input + '.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-80">
      <div className="bg-gray-100 rounded p-4 mb-4 text-right">
        <div className="text-gray-500 text-sm h-5">
          {prevInput} {operation}
        </div>
        <div className="text-3xl font-semibold overflow-x-auto">{input}</div>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        <button 
          onClick={handleClear}
          className="col-span-2 bg-red-500 text-white p-3 rounded hover:bg-red-600"
        >
          AC
        </button>
        <button 
          onClick={() => handleOperationClick('/')}
          className="bg-gray-200 p-3 rounded hover:bg-gray-300"
        >
          ÷
        </button>
        <button 
          onClick={() => handleOperationClick('*')}
          className="bg-gray-200 p-3 rounded hover:bg-gray-300"
        >
          ×
        </button>

        {[7, 8, 9].map(num => (
          <button 
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="bg-gray-100 p-3 rounded hover:bg-gray-200"
          >
            {num}
          </button>
        ))}
        <button 
          onClick={() => handleOperationClick('-')}
          className="bg-gray-200 p-3 rounded hover:bg-gray-300"
        >
          -
        </button>

        {[4, 5, 6].map(num => (
          <button 
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="bg-gray-100 p-3 rounded hover:bg-gray-200"
          >
            {num}
          </button>
        ))}
        <button 
          onClick={() => handleOperationClick('+')}
          className="bg-gray-200 p-3 rounded hover:bg-gray-300 row-span-2"
        >
          +
        </button>

        {[1, 2, 3].map(num => (
          <button 
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="bg-gray-100 p-3 rounded hover:bg-gray-200"
          >
            {num}
          </button>
        ))}

        <button 
          onClick={() => handleNumberClick('0')}
          className="bg-gray-100 p-3 rounded hover:bg-gray-200 col-span-2"
        >
          0
        </button>
        <button 
          onClick={handleDecimal}
          className="bg-gray-100 p-3 rounded hover:bg-gray-200"
        >
          .
        </button>
        <button 
          onClick={handleEquals}
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
        >
          =
        </button>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Calculator />
    </div>
  );
};

export default Index;