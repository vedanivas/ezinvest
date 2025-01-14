import React from 'react';
import { mockSuggestions } from '../data/mockData';
import type { RiskAssessment, InvestmentPreferences } from '../types';
import { PieChart, DollarSign, Clock } from 'lucide-react';

interface SuggestionsProps {
  riskAssessment: RiskAssessment;
  preferences: InvestmentPreferences;
}

export default function Suggestions({
  riskAssessment,
  preferences,
}: SuggestionsProps) {
  const getRiskProfile = () => {
    const score = riskAssessment.riskTolerance;
    if (score <= 3) return 'conservative';
    if (score <= 7) return 'moderate';
    return 'aggressive';
  };

  const suggestion = mockSuggestions[getRiskProfile()];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {suggestion.title}
        </h2>
        <p className="text-gray-600 mb-6">{suggestion.description}</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <PieChart className="h-8 w-8 text-indigo-600 mb-2" />
            <h3 className="font-medium text-gray-900">Portfolio Allocation</h3>
            <ul className="mt-2 space-y-2">
              {suggestion.allocation.map((item) => (
                <li key={item.type} className="text-sm text-gray-600">
                  {item.type}: {item.percentage}%
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <DollarSign className="h-8 w-8 text-indigo-600 mb-2" />
            <h3 className="font-medium text-gray-900">Selected Sectors</h3>
            <ul className="mt-2 space-y-2">
              {preferences.sectors.map((sector) => (
                <li key={sector} className="text-sm text-gray-600">
                  {sector}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <Clock className="h-8 w-8 text-indigo-600 mb-2" />
            <h3 className="font-medium text-gray-900">Investment Timeline</h3>
            <p className="mt-2 text-sm text-gray-600">{preferences.timeHorizon}</p>
            <div className="mt-4">
              <h4 className="font-medium text-gray-900">Investment Goals</h4>
              <ul className="mt-2 space-y-2">
                {preferences.goals.map((goal) => (
                  <li key={goal} className="text-sm text-gray-600">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-xl">
        <h3 className="text-lg font-medium text-indigo-900 mb-2">
          Next Steps
        </h3>
        <ul className="space-y-2 text-indigo-700">
          <li>Review your personalized investment plan</li>
          <li>Schedule a consultation with a financial advisor</li>
          <li>Start building your portfolio</li>
        </ul>
      </div>
    </div>
  );
}