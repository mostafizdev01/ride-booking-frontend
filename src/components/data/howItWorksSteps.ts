export interface HowItWorksStep {
    id: number;
    title: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
    {
        id: 1,
        title: 'Fill in the order form'
    },
    {
        id: 2,
        title: 'Wait for offers from drivers'
    },
    {
        id: 3,
        title: 'Accept the best offer'
    },
    {
        id: 4,
        title: 'Call the driver and discuss the details of your ride'
    }
] as const;
