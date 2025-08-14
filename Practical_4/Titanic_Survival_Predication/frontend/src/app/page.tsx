'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

// Define an interface for the expected API response for a successful prediction
interface PredictionResponse {
  prediction: number;
}

// Define an interface for the expected API response when an error occurs
interface ErrorResponse {
  error: string;
}

export default function Home() {
  // State variables to hold the form data with explicit types
  const [pclass, setPclass] = useState<string>('1');
  const [age, setAge] = useState<string>('');
  const [fare, setFare] = useState<string>('');
  const [sex, setSex] = useState<string>('0'); // 0 for male, 1 for female

  // State variables to hold the prediction result, errors, and loading status
  const [prediction, setPrediction] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Handles the form submission.
   * It sends the form data to the Flask backend and updates the state with the prediction.
   * @param {FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsLoading(true);
    setPrediction(null);
    setError(null);

    // Basic validation
    if (!age || !fare) {
        setError('Age and Fare are required fields.');
        setIsLoading(false);
        return;
    }

    try {
      // The URL of the Flask backend.
      // Make sure your Flask app is running and accessible at this URL.
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Pclass: parseInt(pclass, 10),
          Age: parseFloat(age),
          Fare: parseFloat(fare),
          Sex: parseInt(sex, 10),
        }),
      });

      // Type assertion to tell TypeScript what shape to expect from the JSON response
      const result: PredictionResponse | ErrorResponse = await response.json();

      if (response.ok) {
        // Type guard to check if 'prediction' exists on the result
        if ('prediction' in result) {
            setPrediction(result.prediction);
        }
        setError(null);
      } else {
        // Type guard to check if 'error' exists on the result
        if ('error' in result) {
            setError(result.error);
        } else {
            setError('An unknown error occurred.');
        }
        setPrediction(null);
      }
    } catch (err) {
      // Handle network errors
      setError('Failed to connect to the server. Please ensure the backend is running.');
      setPrediction(null);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Titanic Survival Prediction
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Enter passenger details to predict their chance of survival.
        </p>

        {/* Prediction Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pclass Input */}
          <div>
            <label htmlFor="pclass" className="block text-sm font-medium text-gray-700 mb-1">
              Passenger Class (Pclass)
            </label>
            <select
              id="pclass"
              value={pclass}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setPclass(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="1">1st Class</option>
              <option value="2">2nd Class</option>
              <option value="3">3rd Class</option>
            </select>
          </div>

          {/* Age Input */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
              placeholder="e.g., 30"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          {/* Fare Input */}
          <div>
            <label htmlFor="fare" className="block text-sm font-medium text-gray-700 mb-1">
              Fare
            </label>
            <input
              type="number"
              id="fare"
              step="0.01"
              value={fare}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFare(e.target.value)}
              placeholder="e.g., 71.28"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>

          {/* Sex Input */}
          <div>
            <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-1">
              Sex
            </label>
            <select
              id="sex"
              value={sex}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setSex(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 transition-all duration-300"
            >
              {isLoading ? 'Predicting...' : 'Predict Survival'}
            </button>
          </div>
        </form>

        {/* Display Prediction Result or Error */}
        <div className="mt-8 text-center">
            {error && (
                <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                    <span className="font-medium">Error:</span> {error}
                </div>
            )}
            {prediction !== null && (
                 <div className={`p-4 mb-4 text-sm rounded-lg ${prediction === 1 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} role="alert">
                    <span className="font-bold text-lg">
                        {prediction === 1 ? "This passenger likely Survived!" : "This passenger likely did NOT Survive."}
                    </span>
                 </div>
            )}
        </div>
      </div>
    </main>
  );
}
