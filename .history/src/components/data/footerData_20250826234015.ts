export interface SocialLink {
    id: string;
    href: string;
    icon: string;
    className: string;
    iconClass: string;
}

export interface AppStoreLink {
    id: string;
    ariaLabel: string;
    href: string;
    icon: string;
    className: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: 'social-1',
        href: "https://www.facebook.com/indrive/",
        icon: "https://c.animaapp.com/merd0x40UYBnNr/assets/icon-21.svg",
        className: "relative text-sm font-semibold items-center bg-neutral-900 box-border flex h-10 justify-center leading-[21px] underline w-10 p-3 rounded-xl font-poppins md:text-base md:leading-6",
        iconClass: "box-content h-auto leading-[normal] align-middle w-auto md:aspect-auto md:box-border md:h-6 md:leading-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    },
    {
        id: 'social-2',
        href: "https://www.instagram.com/indrive/",
        icon: "https://c.animaapp.com/merd0x40UYBnNr/assets/icon-22.svg",
        className: "relative text-sm font-semibold items-center bg-neutral-900 box-border flex h-10 justify-center leading-[21px] underline w-10 p-3 rounded-xl font-poppins md:text-base md:leading-6 before:accent-auto before:bg-white before:text-white before:block before:text-sm before:not-italic before:normal-nums before:font-semibold before:h-[19px] before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[19px] before:rounded-lg before:border-separate before:font-poppins before:md:text-base before:md:leading-6",
        iconClass: "static text-black bg-auto box-content h-auto leading-[normal] align-middle w-auto md:relative md:text-neutral-900 md:aspect-auto md:bg-size-[20px_20px] md:box-border md:h-6 md:leading-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
    }
] as const;

export const AppStoreLinks: AppStoreLink[] = [
    {
        id: 'app-store',
        ariaLabel: 'app-store',
        href: '',
        icon: "https://c.animaapp.com/merd0x40UYBnNr/assets/icon-23.svg",
        className: "text-sm box-border h-10 leading-[21px] w-full md:text-base md:h-[50px] md:leading-6 md:w-[120px]"
    },
    {
        id: 'google-play',
        ariaLabel: 'google-play',
        href: '',
        icon: "https://c.animaapp.com/merd0x40UYBnNr/assets/icon-24.svg",
        className: "text-sm box-border h-10 leading-[21px] w-full md:text-base md:h-[50px] md:leading-6 md:w-[136px]"
    },
    {
        id: 'app-gallery',
        ariaLabel: 'app-gallery',
        href: '',
        icon: "https://c.animaapp.com/merd0x40UYBnNr/assets/icon-25.svg",
        className: "text-sm box-border h-10 leading-[21px] w-full md:text-base md:h-[50px] md:leading-6 md:w-[134px]"
    }
] as const;
