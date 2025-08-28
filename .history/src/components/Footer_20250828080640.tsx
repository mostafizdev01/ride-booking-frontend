import { socialLinks, appStoreLinks } from '../components/data/footerData';
import footerLogo from '../assets/images/TextAndLogoWithLime1.png'

export function Footer() {
    return (
        <footer className="bg-indigo-50 mt-20 box-border py-20">
            <div className="box-border flex flex-col-reverse justify-between max-w-[1256px] gap-y-7 w-full mx-auto px-3 md:flex-row md:max-w-[1312px] md:gap-y-[normal] md:px-7">
                <div className="box-border flex flex-col max-w-[422px] gap-y-7 md:gap-y-6">
                    <div className="box-border gap-x-3 flex">
                        {socialLinks.map((link) => (
                            <a key={link.id} href={link.href} className={link.className}>
                                <img src={link.icon} alt="Icon" className={link.iconClass} />
                            </a>
                        ))}
                    </div>
                    <p className="text-sm font-semibold box-border leading-[21px] font-poppins md:text-base md:leading-6">
                        The ZoomRide online passenger transportation aggregator is not a taxi service and is not involved in the relationship of Users. All requests are created, sent and performed by users independently.
                    </p>
                    <div className="box-border">
                        <span className="text-sm font-semibold box-border inline-block leading-[21px] mr-2 font-poppins md:text-base md:leading-6">Support:</span>
                        <a href="mailto://support@indrive.com" className="text-sm font-semibold box-border leading-[21px] font-poppins md:text-base md:leading-6">
                            support@zoomride.com
                        </a>
                    </div>
                    <div className="box-border gap-x-3 flex flex-wrap w-full md:flex-nowrap md:w-auto">
                        {appStoreLinks.map((link) => (
                            <a
                                key={link.id}
                                aria-label={link.ariaLabel}
                                href={link.href}
                                className="text-sm font-semibold box-border block leading-[21px] underline font-poppins md:text-base md:leading-6"
                            >
                                <img src={link.icon} alt="Icon" className={link.className} />
                            </a>
                        ))}
                    </div>
                    <p className="text-sm font-semibold box-border leading-[21px] font-poppins md:text-base md:leading-6">© 2025 Ride-Sharing</p>
                </div>
                <img src={footerLogo} alt="Icon" className="box-border w-[350px]" />
            </div>
        </footer>
    );
}
