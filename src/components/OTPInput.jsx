import React, { useRef, useState } from 'react';

export default function OTPInput({ length = 4, onComplete }) {
  const inputs = useRef([]);
  const [vals, setVals] = useState(Array(length).fill(''));

  const handleChange = (i, v) => {
    if (!/^\d?$/.test(v)) return;
    const updated = [...vals];
    updated[i] = v;
    setVals(updated);

    if (v && i < length - 1) {
      inputs.current[i + 1].focus();
    }

    if (updated.every((ch) => ch !== '')) {
      onComplete?.(updated.join(''));
    }
  };

  return (
    <div className="flex justify-center space-x-3">
      {vals.map((v, i) => (
        <input
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="w-14 h-14 text-center text-xl font-medium border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={v}
          onChange={(e) => handleChange(i, e.target.value)}
        />
      ))}
    </div>
  );
}
