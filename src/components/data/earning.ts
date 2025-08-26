export interface EarningSection {
    readonly id: string;
    readonly subtitle: string;
    readonly title: string;
    readonly description: string;
    readonly linkText: string;
    readonly href: string;
    readonly imageSrc: string;
    readonly imageAlt: string;
    readonly tabPanelClassName: string;
}

export const earningSections: readonly EarningSection[] = [
    {
        id: 'driver',
        subtitle: 'Earn money as a Bolt driver',
        title: 'Drive and earn money',
        description:
            'Our 200+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.',
        linkText: 'Register to drive',
        href: '/en/driver/',
        imageSrc: "https://c.animaapp.com/mesvu10d6tGVPE/assets/Index_DT_Media_14_c5e9168f7b_5172b52b9e.webp",
        imageAlt:
            'Person inside a Tesla holding a smartphone displaying the Bolt app navigation screen.',
        tabPanelClassName: "relative items-center box-border caret-transparent gap-x-12 flex flex-col-reverse justify-start break-words gap-y-12 md:gap-x-28 md:flex-row-reverse md:gap-y-28",
    },
    {
        id: 'courier',
        subtitle: 'Become a Bolt courier partner',
        title: 'Earn with every delivery',
        description:
            "You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it's up to you.",
        linkText: 'Register as a courier',
        href: '/en/food/courier/',
        imageSrc: "https://c.animaapp.com/mesvu10d6tGVPE/assets/Index_DT_Media_15_a150897472_e2fb5d478c.webp",
        imageAlt:
            'A Bolt Food courier in a green jacket, holding a phone and standing next to a bicycle, ready for delivery.',
        tabPanelClassName: "relative items-center box-border caret-transparent gap-x-12 flex flex-col-reverse justify-start break-words gap-y-12 md:gap-x-28 md:flex-row md:gap-y-28",
    },
    {
        id: 'merchant',
        subtitle: 'Increase earnings as merchant',
        title: 'Increase your sales and reach new customers',
        description:
            'Millions of our users are ordering food or goods from restaurants and stores just like yours.',
        linkText: 'Register with Bolt Food',
        href: '/en/food/partner/',
        imageSrc: "https://c.animaapp.com/mesvu10d6tGVPE/assets/Index_DT_Media_16_9682e3376b_8e6086d7ac.webp",
        imageAlt:
            'Restaurant worker behind a bar counter displaying a smartphone with the Bolt Food delivery app.',
        tabPanelClassName: "relative items-center box-border caret-transparent gap-x-12 flex flex-col-reverse justify-start break-words gap-y-12 md:gap-x-28 md:flex-row-reverse md:gap-y-28",
    },
    {
        id: 'fleet',
        subtitle: 'Join Bolt with your fleet and earn more',
        title: 'Grow your transport business',
        description:
            'As a fleet owner and Bolt partner, you can manage your assets from one easy-to-use dashboard and grow your transport business.',
        linkText: 'Register your fleet',
        href: '/en/fleet/',
        imageSrc: "https://c.animaapp.com/mesvu10d6tGVPE/assets/Index_DT_Media_17_40d1177c79_9f54189136.webp",
        imageAlt:
            'A driver wearing a grey knit hat and glasses smiling while sitting in a white and green Bolt vehicle.',
        tabPanelClassName: "relative items-center box-border caret-transparent gap-x-12 flex flex-col-reverse justify-start break-words gap-y-12 md:gap-x-28 md:flex-row md:gap-y-28",
    },
] as const;
