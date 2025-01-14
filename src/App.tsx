import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import AuthForm from './components/AuthForm';
import RiskAssessment from './components/RiskAssessment';
import PreferencesForm from './components/PreferencesForm';
import Suggestions from './components/Suggestions';
import type { AuthView, RiskAssessment as RiskAssessmentType, InvestmentPreferences } from './types';

function App() {
  const [step, setStep] = useState<'auth' | 'risk' | 'preferences' | 'suggestions'>('auth');
  const [authView, setAuthView] = useState<AuthView>('login');
  const [riskAssessment, setRiskAssessment] = useState<RiskAssessmentType | null>(null);
  const [preferences, setPreferences] = useState<InvestmentPreferences | null>(null);

  const handleAuth = (email: string, password: string) => {
    // In a real app, implement proper authentication
    console.log('Auth:', { email, password });
    setStep('risk');
  };

  const handleRiskAssessment = (assessment: RiskAssessmentType) => {
    setRiskAssessment(assessment);
    setStep('preferences');
  };

  const handlePreferences = (prefs: InvestmentPreferences) => {
    setPreferences(prefs);
    setStep('suggestions');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                InvestWise
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 'auth' && (
          <div className="flex min-h-[80vh]">
            <div className="flex-1 flex items-center justify-center">
              <AuthForm
                onSubmit={handleAuth}
                view={authView}
                setView={setAuthView}
              />
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-center bg-indigo-600 rounded-xl">
              <div className="max-w-md text-center text-white p-8">
                <h1 className="text-4xl font-bold mb-4">
                  Start Your Investment Journey
                </h1>
                <p className="text-indigo-100">
                  Get personalized investment recommendations based on your risk
                  tolerance and preferences.
                </p>
              </div>
            </div>
          </div>
        )}

        {step === 'risk' && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Let's Assess Your Risk Tolerance
            </h1>
            <RiskAssessment onComplete={handleRiskAssessment} />
          </div>
        )}

        {step === 'preferences' && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Investment Preferences
            </h1>
            <PreferencesForm onComplete={handlePreferences} />
          </div>
        )}

        {step === 'suggestions' &&
          riskAssessment &&
          preferences && (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Your Investment Recommendations
              </h1>
              <Suggestions
                riskAssessment={riskAssessment}
                preferences={preferences}
              />
            </div>
          )}
      </main>
    </div>
  );
}

export default App;