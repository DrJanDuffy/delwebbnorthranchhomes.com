'use client';

import { useState, useEffect } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

export default function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [includeTaxes, setIncludeTaxes] = useState(true);
  const [propertyTaxRate, setPropertyTaxRate] = useState(0.75); // Nevada average
  const [monthlyInsurance, setMonthlyInsurance] = useState(150);
  const [monthlyHOA] = useState(215); // Del Webb North Ranch HOA

  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // Calculate mortgage
    const downPayment = purchasePrice * (downPaymentPercent / 100);
    const principal = purchasePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let payment = 0;
    if (monthlyRate > 0) {
      payment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else {
      payment = principal / numPayments;
    }

    if (includeTaxes) {
      const monthlyTax = (purchasePrice * (propertyTaxRate / 100)) / 12;
      payment += monthlyTax + monthlyInsurance + monthlyHOA;
    }

    setMonthlyPayment(payment);
  }, [
    purchasePrice,
    downPaymentPercent,
    interestRate,
    loanTerm,
    includeTaxes,
    propertyTaxRate,
    monthlyInsurance,
    monthlyHOA,
  ]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 font-playfair">
              Mortgage Calculator
            </h2>
            <p className="text-text-dark">
              Estimate your monthly payment for a home in Del Webb North Ranch
            </p>
          </div>

          <div className="bg-bg-light rounded-lg shadow-three p-6 md:p-8">
            {/* Purchase Price */}
            <div className="mb-6">
              <label htmlFor="purchase-price" className="block text-sm font-semibold text-primary mb-3">
                Purchase Price: <span className="text-primary font-bold">${purchasePrice.toLocaleString()}</span>
              </label>
              <input
                id="purchase-price"
                type="range"
                min="300000"
                max="700000"
                step="5000"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                aria-label="Purchase price slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$300K</span>
                <span>$700K</span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="mb-6">
              <label htmlFor="down-payment" className="block text-sm font-semibold text-primary mb-2">
                Down Payment: {downPaymentPercent}% (
                <span className="text-primary font-bold">
                  ${((purchasePrice * downPaymentPercent) / 100).toLocaleString()}
                </span>
                )
              </label>
              <select
                id="down-payment"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                aria-label="Down payment percentage"
              >
                {[0, 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70].map((pct) => (
                  <option key={pct} value={pct}>
                    {pct}%
                  </option>
                ))}
              </select>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <label htmlFor="interest-rate" className="block text-sm font-semibold text-primary mb-2">
                Interest Rate: <span className="text-primary font-bold">{interestRate}%</span>
              </label>
              <input
                id="interest-rate"
                type="number"
                step="0.125"
                min="1"
                max="15"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                aria-label="Interest rate percentage"
              />
            </div>

            {/* Loan Term */}
            <div className="mb-6">
              <label htmlFor="loan-term" className="block text-sm font-semibold text-primary mb-2">
                Loan Term
              </label>
              <select
                id="loan-term"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                aria-label="Loan term in years"
              >
                <option value={5}>5 years</option>
                <option value={10}>10 years</option>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
                <option value={35}>35 years</option>
                <option value={40}>40 years</option>
              </select>
            </div>

            {/* Include Taxes Toggle */}
            <div className="mb-6">
              <label htmlFor="include-taxes" className="flex items-center gap-3 cursor-pointer p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  id="include-taxes"
                  type="checkbox"
                  checked={includeTaxes}
                  onChange={(e) => setIncludeTaxes(e.target.checked)}
                  className="w-5 h-5 rounded accent-primary"
                  aria-label="Include taxes and insurance"
                />
                <span className="text-sm font-medium text-text-dark">
                  Include Taxes & Insurance
                </span>
              </label>
            </div>

            {/* Property Tax Rate (shown when includeTaxes is true) */}
            {includeTaxes && (
              <div className="mb-6">
                <label htmlFor="property-tax-rate" className="block text-sm font-semibold text-primary mb-2">
                  Property Tax Rate: <span className="text-primary font-bold">{propertyTaxRate}%</span>
                </label>
                <input
                  id="property-tax-rate"
                  type="number"
                  step="0.25"
                  min="0"
                  max="4"
                  value={propertyTaxRate}
                  onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  aria-label="Property tax rate percentage"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Nevada average: 0.75% (adjustable)
                </p>
              </div>
            )}

            {/* Monthly Insurance (shown when includeTaxes is true) */}
            {includeTaxes && (
              <div className="mb-6">
                <label htmlFor="monthly-insurance" className="block text-sm font-semibold text-primary mb-2">
                  Monthly Insurance: <span className="text-primary font-bold">${monthlyInsurance}</span>
                </label>
                <input
                  id="monthly-insurance"
                  type="number"
                  step="10"
                  min="50"
                  max="500"
                  value={monthlyInsurance}
                  onChange={(e) => setMonthlyInsurance(Number(e.target.value))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  aria-label="Monthly insurance amount"
                  title="Monthly insurance amount"
                />
              </div>
            )}

            {/* Result */}
            <div className="mt-8 p-6 md:p-8 bg-primary rounded-lg text-white text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <p className="text-sm uppercase tracking-wide mb-2 opacity-90">
                Estimated Monthly Payment
              </p>
              <p className="text-3xl md:text-4xl font-bold font-playfair mb-2">
                ${monthlyPayment.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>
              {includeTaxes && (
                <p className="text-sm mt-3 opacity-90">
                  Includes $215/mo HOA • No SIDs or LIDs
                </p>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Estimates are for reference only and may vary. Tax and insurance
              calculations are approximate and can differ depending on location
              and other influencing factors.
            </p>

            {/* Link to Home Value Page */}
            <div className="mt-6 pt-6 border-t border-gray-300 text-center">
              <p className="text-sm text-text-dark mb-3">
                Want to know your current home's value?
              </p>
              <a
                href="/home-value"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Free Home Value Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
