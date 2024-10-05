import React, { useId } from 'react';

function InputBox({
  label, // Label for the input field
  amount, // The amount value passed as a prop
  onAmountChange, // Callback function to handle changes in the amount input
  onCurrencyChange, // Callback function to handle changes in the currency selection
  currencyOption = [], // Array of available currency options for the dropdown
  selectCurrency = 'usd', // Default selected currency value
  amountDisable = false, // Flag to disable the amount input field
  currencyDisabled = false, // Flag to disable the currency dropdown
  className = "" // Additional class names for customization
}) {
  const amountInputId = useId(); // Generate unique ID for the amount input field

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Left section: Input field for the amount */}
      <div className="w-1/2">
        {/* Label for the amount input field */}
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        
        {/* Amount input field */}
        <input
          id={amountInputId} // Bind input field to the generated ID
          type="number" // Input type is number to accept numeric values
          className="outline-none w-full bg-transparent py-1.5"
          placeholder='Amount' // Placeholder text for the input field
          disabled={amountDisable} // Disable the input field if amountDisable is true
          value={amount} // Controlled input value for the amount
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value)); // Call the callback onAmountChange with the new amount value
          }}
        />
      </div>

      {/* Right section: Dropdown for currency selection */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        {/* Label for the currency dropdown */}
        <p className="text-black/40 mb-2 w-full"> Currency Type </p>
        
        {/* Currency dropdown */}
        <select
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value={selectCurrency} // Controlled select value for currency selection
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Call the callback onCurrencyChange with the selected currency value
          disabled={currencyDisabled} // Disable the dropdown if currencyDisabled is true
        >
          {currencyOption.map((currency) => (
            <option value={currency} key={currency}>{currency}</option> // Generate an option for each currency in the currencyOption array
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
