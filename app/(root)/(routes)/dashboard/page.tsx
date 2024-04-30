import { Check, CreditCard, DollarSign, PersonStanding } from "lucide-react"
import { DashboardCard } from "./_components/dashboard-card"
import { LineGraph } from "./_components/linegraph"
import { BarChart } from "./_components/barchart"

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-5 w-full">
            <h1 className="font-bold text-4xl mx-6 text-center">Dashboard</h1>
            <div className="mx-auto py-8">
                <div className="flex flex-col gap-5 w-full">
                    <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                        <DashboardCard 
                            label="Revenue"
                            Icon={DollarSign}
                            amount='$40,000'
                            description="Total revenue generated this month"
                        />
                         <DashboardCard 
                            label="Customers"
                            Icon={PersonStanding}
                            amount='+300'
                            description="+22 this month"
                        />
                         <DashboardCard 
                            label="Profit"
                            Icon={CreditCard}
                            amount='$8,000'
                            description="Total profit generated this month"
                        />
                         <DashboardCard 
                            label="Sales"
                            Icon={Check}
                            amount='+90'
                            description="+10 this month"
                        />
                    </section>
                    <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
                        <BarChart />
                        <LineGraph />
                    </section>
                </div>
            </div>
        </div>
    )
}