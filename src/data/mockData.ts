export const sectors = [
  'Technology',
  'Healthcare',
  'Finance',
  'Consumer Goods',
  'Energy',
  'Real Estate',
  'Telecommunications',
  'Industrial',
];

export const investmentGoals = [
  'Wealth Growth',
  'Retirement Planning',
  'Regular Income',
  'Capital Preservation',
  'Tax Benefits',
];

export const timeHorizons = [
  'Short Term (< 2 years)',
  'Medium Term (2-5 years)',
  'Long Term (5-10 years)',
  'Very Long Term (10+ years)',
];

export const mockSuggestions = {
  conservative: {
    title: 'Conservative Portfolio',
    description: 'Low-risk investment strategy focused on capital preservation',
    allocation: [
      { type: 'Bonds', percentage: 60 },
      { type: 'Blue-chip Stocks', percentage: 25 },
      { type: 'Cash', percentage: 15 },
    ],
  },
  moderate: {
    title: 'Balanced Portfolio',
    description: 'Moderate-risk strategy balancing growth and stability',
    allocation: [
      { type: 'Stocks', percentage: 50 },
      { type: 'Bonds', percentage: 35 },
      { type: 'Real Estate', percentage: 10 },
      { type: 'Cash', percentage: 5 },
    ],
  },
  aggressive: {
    title: 'Growth Portfolio',
    description: 'High-risk strategy focused on maximum growth potential',
    allocation: [
      { type: 'Growth Stocks', percentage: 70 },
      { type: 'International Stocks', percentage: 20 },
      { type: 'Bonds', percentage: 5 },
      { type: 'Cash', percentage: 5 },
    ],
  },
};