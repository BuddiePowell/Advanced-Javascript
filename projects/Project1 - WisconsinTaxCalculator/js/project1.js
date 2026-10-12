// Name: Buddie Powell
// Date: 02/20/2026
// Section: Advanced JavaScript Hybrid Mon/Wed 10:30AM - 12:10PM

"use strict";

// Constants for tax calculations
// These brackets are based on the federal min, max, and rate for single filers in 2024
const FEDERAL_BRACKETS = [
  { min: 0, max: 11600, rate: 0.1 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

// These brackets are based on the state min, max, and rate for the state of Wisconsin for single filers in 2024
const STATE_BRACKETS = [
  { min: 0, max: 12760, rate: 0.0354 },
  { min: 12760, max: 25520, rate: 0.0465 },
  { min: 25520, max: 280950, rate: 0.053 },
  { min: 280950, max: Infinity, rate: 0.0765 },
];

// FICA Tax Constants
const MEDICARE_RATE_BASE = 0.0145;
const MEDICARE_RATE_ADDITIONAL = 0.009;
const MEDICARE_THRESHOLD = 200000;
const SOCIAL_SECURITY_RATE = 0.062;
const SOCIAL_SECURITY_THRESHOLD = 168600;

/**
 * Calculates progressive tax based on the provided income and tax brackets.
 */
const calculateProgressiveTax = (income, brackets) => {
  let tax = 0;
  for (const bracket of brackets) {
    if (income > bracket.min) {
      const taxableInBracket = Math.min(income, bracket.max) - bracket.min;
      tax += taxableInBracket * bracket.rate;
      if (income <= bracket.max) {
        break;
      }
    }
  }
  return tax;
};

/**
 * Calculates FICA Medicare tax.
 * 1.45% on income up to $200,000.
 * 2.35% (Base 1.45% + Additional 0.9%) on income over $200,000.
 */
const calculateMedicareTax = (income) => {
  // Tax on income up to the threshold (1.45%)
  const baseTax = Math.min(income, MEDICARE_THRESHOLD) * MEDICARE_RATE_BASE;

  // Tax on income exceeding the threshold (2.35% total rate)
  const excessIncome = Math.max(0, income - MEDICARE_THRESHOLD);
  const excessTax =
    excessIncome * (MEDICARE_RATE_BASE + MEDICARE_RATE_ADDITIONAL);

  return baseTax + excessTax;
};

/**
 * Calculates FICA Social Security tax
 * 6.2% on income up to $168,600.
 */
const calculateSocialSecurityTax = (income) => {
  return Math.min(income, SOCIAL_SECURITY_THRESHOLD) * SOCIAL_SECURITY_RATE;
};

/**
 * Main function to calculate all taxes and net pay.
 * Takes gross salary as input and returns an object with all tax details and net pay.
 */
const calculateTaxes = (grossSalary) => {
  const federalTax = calculateProgressiveTax(grossSalary, FEDERAL_BRACKETS);
  const stateTax = calculateProgressiveTax(grossSalary, STATE_BRACKETS);
  const medicareTax = calculateMedicareTax(grossSalary);
  const socialSecurityTax = calculateSocialSecurityTax(grossSalary);

  const totalTaxes = federalTax + stateTax + medicareTax + socialSecurityTax;
  const netPay = grossSalary - totalTaxes;

  return {
    grossPay: grossSalary.toFixed(2),
    federalTax: federalTax.toFixed(2),
    stateTax: stateTax.toFixed(2),
    medicareTax: medicareTax.toFixed(2),
    socialSecurityTax: socialSecurityTax.toFixed(2),
    totalTaxes: totalTaxes.toFixed(2),
    netPay: netPay.toFixed(2),
  };
};

/**
 * Initializes the application event listeners for tax calculation using the init() method.
 */
const init = () => {
  document.getElementById("taxForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const inputElement = document.getElementById("grossSalary");
    const grossSalary = Number(inputElement.value);

    // Validation: Ensure input is a number and non-negative
    if (isNaN(grossSalary) || grossSalary < 0) {
      alert("Please enter a valid positive whole number.");
      return;
    }

    const results = calculateTaxes(grossSalary);

    // Update the DOM with results
    document.getElementById("grossPay").textContent = results.grossPay;
    document.getElementById("federalTax").textContent = results.federalTax;
    document.getElementById("stateTax").textContent = results.stateTax;
    document.getElementById("medicareTax").textContent = results.medicareTax;
    document.getElementById("socialSecurityTax").textContent =
      results.socialSecurityTax;
    document.getElementById("totalTaxes").textContent = results.totalTaxes;
    document.getElementById("netPay").textContent = results.netPay;

    // Show the results table
    document.getElementById("resultsTable").style.display = "table";

    // Clear the input field for the next entry
    document.getElementById("grossSalary").value = "";
  });
};

// Run initialization when the window loads
window.onload = init;
