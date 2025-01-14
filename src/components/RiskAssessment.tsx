import React, { useState } from 'react';
import type { RiskAssessment } from '../types';

interface RiskAssessmentProps {
  onComplete: (assessment: RiskAssessment) => void;
}

export default function RiskAssessmentForm({ onComplete }: RiskAssessmentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<RiskAssessment>({
    riskTolerance: 5,
    investmentExperience: '',
    financialSituation: '',
    emergencyFunds: false,
  });

  const questions = [
    {
      title: 'Risk Tolerance',
      description: 'How comfortable are you with investment risk?',
      component: (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Risk Tolerance Level (1-10)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={answers.riskTolerance}
            onChange={(e) =>
              setAnswers({ ...answers, riskTolerance: parseInt(e.target.value) })
            }
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Conservative</span>
            <span>Aggressive</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Investment Experience',
      description: 'What is your level of investment experience?',
      component: (
        <div className="space-y-4">
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <label
              key={level}
              className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name="experience"
                value={level}
                checked={answers.investmentExperience === level}
                onChange={(e) =>
                  setAnswers({ ...answers, investmentExperience: e.target.value })
                }
                className="h-4 w-4 text-indigo-600"
              />
              <span>{level}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: 'Financial Situation',
      description: 'How would you describe your current financial situation?',
      component: (
        <div className="space-y-4">
          {[
            'Stable income with savings',
            'High income with investments',
            'Variable income',
            'Currently building savings',
          ].map((situation) => (
            <label
              key={situation}
              className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name="situation"
                value={situation}
                checked={answers.financialSituation === situation}
                onChange={(e) =>
                  setAnswers({ ...answers, financialSituation: e.target.value })
                }
                className="h-4 w-4 text-indigo-600"
              />
              <span>{situation}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: 'Emergency Fund',
      description: 'Do you have an emergency fund in place?',
      component: (
        <div className="space-y-4">
          <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={answers.emergencyFunds}
              onChange={(e) =>
                setAnswers({ ...answers, emergencyFunds: e.target.checked })
              }
              className="h-4 w-4 text-indigo-600"
            />
            <span>I have 3-6 months of expenses saved</span>
          </label>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      onComplete(answers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{currentQ.title}</h2>
        <p className="mt-2 text-gray-600">{currentQ.description}</p>
      </div>

      <div className="mb-8">{currentQ.component}</div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          disabled={currentQuestion === 0}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        <div className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
}