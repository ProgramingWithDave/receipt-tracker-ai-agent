import { ArrowRight, BarChart,  Search, Shield, Upload } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Feature from "@/components/home/Feature";
import PricePlan from "@/components/home/PricePlan";
import PDFDropZone from "@/components/PDFDropZone";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pu-20 md:py-28 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl ">Intelligent Receipt Scanning</h1>
              <p className="mx-auto max-w-[780px] text-gray-500 md:text-xl dark:text-gray-400">Scan, analyze and organize your receipts effortlessly with AI-powered precision. Save time and gain insights from your expenses.</p>
            </div>

            <div className="space-x-4">
              <Link href="/receipts">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* PDF dropzone */}
        <div className="mt-12 flex justify-center">
           <PDFDropZone />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Powerful Features</h2>

              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Our AI-powered platform transforms how you handle receipts and tracks expenses</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Feature 1 */}
              <Feature
                Icon={Upload}
                iconOuterLayerStyles="bg-blue-100 dark:bg-blue-900"
                iconStyles="text-blue-600 dark:text-blue-400"
                title="Easy Uploads"
                description="Drags and drop your PDF receipts for instant scanning and processing"
              />
              {/* Feature 2 */}
              <Feature
                Icon={Search}
                title="AI Analysis"
                description="Automatically extract and categorize expense data with intelligent  AI"
                iconOuterLayerStyles="bg-green-100 dark:bg-green-900"
                iconStyles="text-green-600 dark:text-green-400"
              />
              {/* Feature 3 */}
              <Feature
                Icon={BarChart}
                title="Expense Insights"
                description="Generate reports and gain valuable insights from your spending"
                iconOuterLayerStyles="bg-purple-100 dark:bg-purple-900"
                iconStyles="text-purple-600 dark:text-purple-400"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple Pricing</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that works best for your needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {/* Free Plan */}
            <PricePlan
              freePlan={true}
              title="Free"
              description="Free tier for all to try!"
              price="$0.00"
              features={[
                "2 Scans per month",
                "Basic data extraction",
                "7-day history",
              ]}
            />

            {/* Starter Plan */}
            <PricePlan
              freePlan={false}
              title="Starter"
              description="Perfect for individuals and small teams."
              price="$4.99"
              features={[
                "50 Scans per month",
                "Enhanced data extraction",
                "30-day history",
                "Basic export options",
              ]}
            />

            {/* Pro Plan */}
            <PricePlan
              freePlan={false}
              title="Pro"
              popular={true}
              description="Advanced features for growing businesses."
              price="$9.99"
              features={[
                "300 Scans per month",
                "Advanced AI data extraction",
                "AI Summaries",
                "Expense categories && tags",
                "Unlimited history",
              ]}
            />
          </div>
        </div>
      </section>
      {/* Info */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Start scanning Today</h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">Join thousands of users who save time and gain insights from their receipts.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6 py-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-semibold">Expensio</span>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500 dark:text-400">Expensio. The smarter way to track your money</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
