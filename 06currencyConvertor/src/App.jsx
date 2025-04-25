import { useState } from 'react'
import React from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'

function App() {

  const [amount, setAmount] = useState("");
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) || {}

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (!currencyInfo[to] || isNaN(parseFloat(amount))) return;
    const converted = parseFloat(amount) * currencyInfo[to];
    setConvertedAmount(converted.toFixed(2));
  }

    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
             backgroundImage: `url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg')`
          }}
      >
           <div className="w-full px-4 sm:px-0">
           <div className="w-full max-w-md mx-auto border border-gray-300 shadow-xl rounded-xl p-8 backdrop-blur-md bg-white/60">
          <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-1">
                      <InputBox
                            label="From"
                            amount={amount}
                            currencyOption={options}
                            onCurrencyChange={(currency)=> setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(value) => setAmount(value)}
                          />

                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg transition-all duration-300"
                              onClick={swap}
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOption={options}
                              onCurrencyChange={(currency)=> setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold shadow-md">
                      Convert {from.toUpperCase()} to {to.toUpperCase()} 
                      </button>
                      {convertedAmount !== 0 && convertedAmount !== "" && (
                            <p className="mt-4 text-center text-lg font-bold text-green-800">
                              {amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}
                            </p>
                          )}
                  </form>
              </div>
          </div>
      </div>
  );

  
}

export default App
