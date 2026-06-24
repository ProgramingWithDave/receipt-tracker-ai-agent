import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

interface PricePlanProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    freePlan: boolean;
    popular?: boolean;
}

function PricePlan({ title, description, price, features, freePlan, popular }: PricePlanProps) {
    return (
        <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-800 dark:bg-gray-950 relative">
            {popular === true && (
                <div className="absolute -top-3 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                </div>
            )}

            <div className="space-y-2">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{description}</p>
            </div>

            <div className="mt-4">
                <p className="text-4xl font-bold">{price}</p>
                <p className="text-gray-500 dark:text-gray-400">/month</p>
            </div>

            <ul className="mt-6 space-y-2 flex-1">
                {features.map((feature, i) => (
                    <li className="flex items-center" key={i}>
                        <Check className="text-green-500 h-5 w-5 mr-2" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <Link href="/manage-plan">
                    <Button className={`w-full hover:cursor-pointer ${popular && "bg-blue-600 hover:bg-blue-700 text-white hover:text-white"}`}variant="outline" >
                        {freePlan ? "Sign up Free" : "Choose Plan"}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default PricePlan
