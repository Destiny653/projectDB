'use client'
import React, { useState } from 'react';

const Slider = ({ 
  min = 0, 
  max = 100, 
  defaultValue = [0, 100], 
  step = 1, 
  onChange,
  className = '' 
}) => {
  const [values, setValues] = useState(defaultValue);

  const handleChange = (index, newValue) => {
    const newValues = [...values];
    newValues[index] = Math.min(Math.max(newValue, min), max);
    
    // Ensure min thumb doesn't exceed max thumb
    if (index === 0 && newValues[0] > newValues[1]) {
      newValues[0] = newValues[1];
    }
    // Ensure max thumb doesn't go below min thumb
    if (index === 1 && newValues[1] < newValues[0]) {
      newValues[1] = newValues[0];
    }

    setValues(newValues);
    onChange?.(newValues);
  };

  const getPercentage = (value) => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className={`relative w-full h-10 ${className}`}>
      <div className="top-1/2 absolute bg-sky-100 rounded-full w-full h-2 -translate-y-1/2">
        <div
          className="absolute bg-sky-600 rounded-full h-full"
          style={{
            left: `${getPercentage(values[0])}%`,
            right: `${100 - getPercentage(values[1])}%`
          }}
        />
      </div>
      
      {values.map((value, index) => (
        <input
          key={index}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChange(index, Number(e.target.value))}
          className={`
            absolute top-0 h-full w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-sky-600
            [&::-webkit-slider-thumb]:cursor-pointer
          `}
        />
      ))}
    </div>
  );
};

export default Slider;
