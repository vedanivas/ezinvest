import React, { useState } from 'react';
import { sectors, investmentGoals, timeHorizons } from '../data/mockData';
import type { InvestmentPreferences } from '../types';

interface PreferencesFormProps {
  onComplete: (preferences: InvestmentPreferences) => void;
}

export default function PreferencesForm({ onComplete }: PreferencesFormProps) {
  const [preferences, setPreferences] = useState<InvestmentPreferences>({
    sectors: [],
    goals: [],
    timeHorizon: '',
  });

  const handleSectorToggle = (sector: string) => {
    setPreferences((prev) => ({
      ...prev,
      sectors: prev.sectors.includes(sector)
        ? prev.sectors.filter((s) => s !== sector)
        : [...prev.sectors, sector],
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setPreferences((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Preferred Sectors</h3>
        <p className="text-sm text-gray-500 mb-4">
          Select the sectors you're interested in investing in
        </p>
        <div className="grid grid-cols-2 gap-4">
          {sectors.map((sector) => (
            <label
              key={sector}
              className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={preferences.sectors.includes(sector)}
                onChange={() => handleSectorToggle(sector)}
                className="h-4 w-4 text-indigo-600 rounded"
              />
              <span className="ml-3">{sector}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Investment Goals</h3>
        <p className="text-sm text-gray-500 mb-4">
          What are your primary investment objectives?
        </p>
        <div className="grid grid-cols-2 gap-4">
          {investmentGoals.map((goal) => (
            <label
              key={goal}
              className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={preferences.goals.includes(goal)}
                onChange={() => handleGoalToggle(goal)}
                className="h-4 w-4 text-indigo-600 rounded"
              />
              <span className="ml-3">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Time Horizon</h3>
        <p className="text-sm text-gray-500 mb-4">
          How long do you plan to keep your money invested?
        </p>
        <div className="space-y-4">
          {timeHorizons.map((horizon) => (
            <label
              key={horizon}
              className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name="timeHorizon"
                value={horizon}
                checked={preferences.timeHorizon === horizon}
                onChange={(e) =>
                  setPreferences({ ...preferences, timeHorizon: e.target.value })
                }
                className="h-4 w-4 text-indigo-600"
              />
              <span className="ml-3">{horizon}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm"
      >
        Continue to Recommendations
      </button>
    </form>
  );
}