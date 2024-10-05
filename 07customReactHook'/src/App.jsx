import { useState } from 'react';
import { InputBox } from './components'; // Import InputBox component
import useCurrencyInfo from './hooks/useCurrencyInfo'; // Custom hook to fetch currency information
import './App.css'; // Import CSS for styling

function App() {
  // State to hold amount, 'from' currency, 'to' currency, and result after conversion
  const [amount, setAmount] = useState(0); // State to manage the input amount
  const [from, setFrom] = useState('inr'); // State to manage the 'from' currency selection
  const [to, setTo] = useState('usd'); // State to manage the 'to' currency selection
  const [result, setResult] = useState(0); // State to store the result after conversion

  // Fetch currency information for the 'from' currency using a custom hook
  const currencyInfo = useCurrencyInfo(from);

  // Extract available currencies from the fetched currency data
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  // Swap the 'from' and 'to' currencies, and update amounts accordingly
  const swap = () => {
    setFrom(to); // Set 'from' currency to 'to'
    setTo(from); // Set 'to' currency to 'from'
    setAmount(result); // Set the input amount to the previous conversion result
    setResult(amount); // Set result to the previous amount
  };

  // Perform the currency conversion based on the fetched exchange rate
  const convert = () => {
    // if (currencyInfo && currencyInfo[to]) {
      setResult(amount * currencyInfo[to]); // Multiply the amount by the conversion rate for 'to' currency
    // } else {
      console.warn(`Conversion rate for "${to}" not available.`); // Handle cases where the exchange rate is not available
    // }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-800 text-2xl">
      {/* Main container */}
      <div className="max-w-md mx-auto border border-red-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        {/* Form to handle currency conversion */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            convert(); // Trigger conversion on form submit
          }}
        >
          {/* Input for the 'from' currency */}
          <div className="w-full mb-1">
            <InputBox
              label="From" // Label for the 'from' input
              amount={amount} // Controlled input for the amount
              currencyOption={options} // List of available currencies
              onCurrencyChange={(currency) => setFrom(currency)} // Update 'from' currency
              selectCurrency={from} // Selected 'from' currency
              onAmountChange={setAmount} // Update the amount value
            />
          </div>

          {/* Swap button to exchange 'from' and 'to' currencies */}
          <div className="relative w-full h-2">
            <button
              type="button"
              className="absolute -translate-x-1/2 -translate-y-1/2 border-2 rounded-2xl border-white bg-blue-600 text-white px-4 py-1"
              onClick={swap} // Swap 'from' and 'to' currencies
            >
              Swap
            </button>
          </div>

          {/* Input for the 'to' currency */}
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To" // Label for the 'to' input
              amount={result} // Controlled input for the conversion result (read-only)
              currencyOption={options} // List of available currencies
              onCurrencyChange={(currency) => setTo(currency)} // Update 'to' currency
              selectCurrency={to} // Selected 'to' currency
              amountDisable // Disable the amount input as it's controlled by the conversion result
            />
          </div>

          {/* Submit button to trigger the conversion */}
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()} {/* Display 'from' and 'to' currencies in uppercase */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
