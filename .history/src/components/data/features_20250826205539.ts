export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
    iconClass: string;
}

export const features: Feature[] = [
    {
        id: 'fair-prices',
        title: 'Fair prices',
        description: 'Choose the best offer at your price',
        icon: "https://c.animaapp.com/merd0x40UYBnNr/assets/icon-11.svg",
        iconClass: "box-border h-[35px] w-[37px]"
    },
    {
        id: 'verified-drivers',
        title: 'Verified drivers',
        description: 'Choose your driver based on their rating, reviews, and car',
        icon: "https://c.animaapp.com/merd0x40UYBnNr/assets/icon-12.svg",
        iconClass: "box-border h-11 w-11"
    },
    {
        id: 'door-to-door',
        title: 'Door-to-door service',
        description: 'You can be picked up and dropped off directly at your desired location',
        icon: "https://c.animaapp.com/merd0x40UYBnNr/assets/icon-13.svg",
        iconClass: "box-border h-10 w-10"
    }
] as const;
