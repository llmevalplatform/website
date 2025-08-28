import React from 'react';

export default function PhinityLanding() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter',sans-serif] antialiased">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-6 tracking-tight">
            Build agents your users actually love
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-3xl font-normal">
          <p>
            We are Phinity Labs, a company that unlocks an improvement flywheel for companies building with LLMs and agents. 
            To do this, our first goal is to help companies understand how their agent behaves in the wild. 
            We're launching our first product - <span className="text-black font-normal">Replay</span>.
          </p>

          <p>
            Our infrastructure captures every production interaction with your agent—every prompt, every response, 
            every failure. When you ship new tool or prompt, we replay thousands of curated user scenario edge 
            cases against your changes. These replays generate actionable insights about what breaks, why it breaks, 
            and which users would be affected. The test suite evolves with your users' patterns, growing from 
            hundreds to thousands of real-world edge cases without any manual test writing.
          </p>

          <p>
            Your worst production incidents become your strongest regression tests and your angriest users become 
            your best QA team, so you don't ship the same bug twice.
          </p>

          <p>
            Teams using Replay ship faster because they know exactly what will break before pushing to 
            production. We eliminate the gap between how developers think agents work and how users actually 
            experience them.
          </p>

          {/* Behavioral Diffs Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-normal text-black mb-6 italic">
              From code diffs to behavioral diffs:
            </h2>
            
            <div className="space-y-4">
              <blockquote className="border-l-2 border-gray-300 pl-6 text-gray-600 italic font-normal">
                "Deploy will fail for 12% of users, specifically those asking about international shipping."
              </blockquote>
              
              <blockquote className="border-l-2 border-gray-300 pl-6 text-gray-600 italic font-normal">
                "This change improves latency by 8% but introduces a 25% higher rate of hallucinations for legal queries."
              </blockquote>
              
              <blockquote className="border-l-2 border-gray-300 pl-6 text-gray-600 italic font-normal">
                "After switching to [model], you experienced +9% increased refusal rate. The model refuses to answer 
                questions related to "financial advice" or "product comparisons" that the previous model handled correctly. 
                You also experienced a -5% success rate for queries in Spanish and German."
              </blockquote>
              <p>
                We make it easy to understand the tradeoffs of every prompt or tool change.
              </p>
            </div>
          </div>

          {/* About Phinity Labs Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-normal text-black mb-6">
              About Phinity Labs
            </h2>
            <p className="text-gray-700 font-normal">
              Our founders have helped train 340B+ parameter models at large foundation model labs, built specialized 
              models and agents for chip design, healthcare, retail, and compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}