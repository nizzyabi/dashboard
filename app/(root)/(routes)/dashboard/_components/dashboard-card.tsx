import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
    label: string;
    amount: string;
    description: string;
    Icon: LucideIcon;
}

export const DashboardCard = ({
    label,
    amount,
    description,
    Icon
}: DashboardCardProps) => {
    return (
        <div className="bg-slate-100/20 shadow flex w-full flex-col gap-3 rounded-[5px] p-5">
            <section className="flex justify-between gap-2">
                <p className="text-sm">{label}</p>
                <Icon className="h-4 w-4" />
            </section>
            <section className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{amount}</h2>
                <p className="text-sm">{description}</p>
            </section>
        </div>
    )
}