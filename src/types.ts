export interface User {
  email: string;
  password: string;
}

export interface RiskAssessment {
  riskTolerance: number;
  investmentExperience: string;
  financialSituation: string;
  emergencyFunds: boolean;
}

export interface InvestmentPreferences {
  sectors: string[];
  goals: string[];
  timeHorizon: string;
}

export type AuthView = 'login' | 'register';