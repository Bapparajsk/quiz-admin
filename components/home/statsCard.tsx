import { Card } from "@heroui/react";
import Icon from "../icon/icon";
import { StatsType } from "./type";

export type StatsCardProps = StatsType;

export const StatsCard = ({ label, value, delta, icon }: StatsCardProps) => {
    return (
        <Card key={label} className="border border-[#1E293B] bg-surface p-lg shadow-none">
            <Card.Content className="p-0">
                <div className="mb-4 flex items-start justify-between">
                    <div className="inline-flex rounded-lg bg-surface-container-highest p-2">
                        <Icon name={icon} className="h-5 w-5 text-primary-container" />
                    </div>
                    <span className="flex items-center gap-1 font-label-mono text-label-mono text-primary-container">
                        <Icon name="trending_up" className="h-3.5 w-3.5" />
                        {delta}
                    </span>
                </div>
                <h3 className="mb-1 font-label-mono text-label-mono uppercase text-on-surface-variant">{label}</h3>
                <p className="font-display-lg text-display-lg text-on-surface">{value}</p>
            </Card.Content>
        </Card>
    )
}