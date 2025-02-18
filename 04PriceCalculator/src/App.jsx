import './App.css'
import { useState } from 'react'
import Heading from './components/Heading'
import Input from './components/Input'
import Dropdown from './components/Dropdown'
import Button from './components/Button'
import Output from './components/Output'

export default function App() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [platformFee, setPlatformFee] = useState('')
  const [isCalculate, setIsCalculate] = useState(false)

  const priceValue = Number(price) || 0;
  const discountValue = Number(discount) || 0;
  const platformFeeValue = Number(platformFee) || 0;

  const discPrice = priceValue - ((discountValue / 100) * priceValue)
  const additionalCost = discPrice * (platformFeeValue / 100)

  const finalDiscount = (priceValue * (discountValue / 100)).toFixed(2);
  const finalPrice = (discPrice + additionalCost).toFixed(2);
  function handleCalculate() {
    setIsCalculate(true)
  }


  function handleReset() {
    setPrice('')
    setDiscount('')
    setPlatformFee('')
    setIsCalculate(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <Heading />

        <div className="space-y-4">
          <Input
            text="Original Price"
            placeholder="Enter price"
            setValue={setPrice}
            value={price}
            setIsCalculate={setIsCalculate}
          />
          <Input
            text="Discount %"
            placeholder="Enter discount %"
            setValue={setDiscount}
            value={discount}
            setIsCalculate={setIsCalculate}
          />
          <Dropdown
            text="Platform fee %"
            placeholder="Enter platform fee %"
            value={platformFee}
            setValue={setPlatformFee}
          />
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <Button text="Calculate" bg="blue" onHandleClick={handleCalculate} />
          <Button text="Reset" bg="gray" onHandleClick={handleReset} />
        </div>

        {isCalculate && <><Output text="Discount" value={finalDiscount} />
          <Output text="Final Price" value={finalPrice} /></>}
      </div>
    </div>
  )
}


