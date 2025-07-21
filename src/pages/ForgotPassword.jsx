// src/pages/ForgotPassword.jsx
import { useState } from 'react';
import OTPInput from '../components/OTPInput';

export default function ForgotPassword() {
  const [step, setStep] = useState(1);

  return (
    <div className="p-8 max-w-md mx-auto">
      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold">Send OTP via Email</h2>
          <input type="email" placeholder="Email" className="mt-4 w-full border p-2 rounded" />
          <button onClick={()=>setStep(2)} className="mt-4 bg-blue-600 text-white py-2 rounded">Send OTP</button>
        </>
      )}
      {step === 2 && (
        <>
          <h2 className="text-xl font-semibold">Enter OTP</h2>
          <OTPInput length={4} onComplete={() => setStep(3)} />
        </>
      )}
      {step === 3 && (
        <>
          <h2 className="text-xl font-semibold">Reset Password</h2>
          <input type="password" placeholder="New password" className="mt-4 w-full border p-2 rounded" />
          <button className="mt-4 bg-green-600 text-white py-2 rounded">Reset Password</button>
        </>
      )}
    </div>
  );
}
