import { socialLinks, appStoreLinks } from '../components/data/footerData';

export function Footer() {
    return (
        <footer className="bg-purple-50 mt-20 box-border py-20">
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
                        The inDrive online passenger transportation aggregator is not a taxi service and is not involved in the relationship of Users. All requests are created, sent and performed by users independently.
                    </p>
                    <div className="box-border">
                        <span className="text-sm font-semibold box-border inline-block leading-[21px] mr-2 font-poppins md:text-base md:leading-6">Support:</span>
                        <a href="mailto://support@indrive.com" className="text-sm font-semibold box-border leading-[21px] font-poppins md:text-base md:leading-6">
                            support@indrive.com
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
                    <p className="text-sm font-semibold box-border leading-[21px] font-poppins md:text-base md:leading-6">© SUOL INNOVATIONS LTD, 2013-2025</p>
                </div>
                <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-26.svg" alt="Icon" className="box-border h-[50px] w-[498px]" />
            </div>
        </footer>
    );
}
