import { UseCaseCard } from "@/components/use-case-card"
import { AnimatedLogo } from "@/components/animated-logo"
import { DataTransformAnimation } from "@/components/data-transform-animation"
import { WaitlistButton } from "@/components/waitlist-button"

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen bg-background">
      {/* Logo in absolute top left */}
      <div className="absolute top-8 left-8">
        <AnimatedLogo />
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen gap-16 px-4">
        <div className="flex flex-col items-center pt-32">
          <div className="space-y-8 text-center mb-16">
            <h1 className="text-5xl font-serif tracking-tight text-center">
              Be your own data vendor.
            </h1>
            <div className="space-y-2">
              <p className="text-xl">
                We are the function <span className="font-serif italic">ϕ</span>: <span className="font-serif">D</span> ↦ <span className="font-serif">D′</span>
              </p>
              <p className="text-lg">
                where <span className="font-serif">D</span> is your original dataset, and <span className="font-serif">D′</span> is its optimized, high-fidelity counterpart.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <DataTransformAnimation />
          </div>

          <div className="space-y-8 text-center">
            <div className="max-w-[42rem]">
              <p className="text-lg">
                We democratize synthetic data for everyone with open-source tooling for general use cases, code generation for data-scarce languages, tool use, and soon, multimodal capabilities like browser use.
              </p>
            </div>

            <WaitlistButton url="https://forms.fillout.com/t/6vMHbGQYpQus" />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-32">
        <h2 className="text-3xl font-bold text-center mb-16">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <UseCaseCard 
            title="Custom Benchmark Generation"
            description="Generate realistic, diverse test cases to stress-test the model before production."
          />
          <UseCaseCard 
            title="Automated Annotation"
            description="Align a judge to annotate like an SME with <30 demonstrations - evaluate and curate data at scale."
          />
          <UseCaseCard 
            title="Reasoning Chain + QA Generation"
            description="Generate reasoning chain + QA pairs from documents to improve reasoning, RAG, and function-calling performance on domain-specific tasks."
          />
          <UseCaseCard 
            title="Preference Data Generation"
            description="Isolate failed test cases and responses from production and generate preference datasets to target these failure modes."
          />
        </div>
      </section>
    </main>
  )
}
