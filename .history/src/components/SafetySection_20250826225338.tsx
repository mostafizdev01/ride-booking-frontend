import { safetyFeatures } from '../components/data/SafetyFeature';
import safeDriver from "../assets/images/SafeDriver.png"

export function SafetySection() {
    return (
        <section className="box-border pt-20 md:pt-[120px]">
            <h2 className="text-neutral-900 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">
                We care about{' '}
                <mark className="relative text-black text-4xl items-center bg-transparent box-border inline-flex justify-center leading-9 md:text-[64px] md:leading-[64px]">
                    <span className="relative text-4xl box-border block leading-9 z-[1] md:text-[64px] md:leading-[64px]">safety</span>
                    <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-14.svg" alt="Icon" className="absolute text-4xl box-border h-[68px] leading-9 w-[218px] z-0 md:text-[64px] md:leading-[64px]" />
                </mark>
            </h2>
            <div className="bg-white shadow-[rgba(20,20,20,0.04)_0px_40px_40px_0px] box-border gap-x-[60px] grid grid-cols-[1fr] gap-y-[60px] mt-12 pb-0 px-2 rounded-3xl md:gap-x-20 md:grid-cols-[1fr_1fr] md:gap-y-[normal] md:pb-10 md:px-10">
                <div className="relative items-center box-border flex h-full justify-center order-1 bottom-0 md:items-end md:order-none md:-bottom-10">
                    <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-15.svg" alt="Icon" className="absolute box-border h-[545px] w-full md:w-[529px]" />
                    <img
                        alt="We care about safety"
                        sizes="100vw"
                        src={safeDriver}
                        // src="https://c.animaapp.com/merd0x40UYBnNr/assets/5.png"
                        className="relative text-transparent box-border w-full"
                    />
                </div>
                <div className="box-border flex flex-col justify-center -order-1 gap-y-6 pt-8 pb-10 px-8 md:order-none md:gap-y-10 md:pt-10 md:pb-0 md:px-0">
                    {safetyFeatures.map((feature) => (
                        <div key={feature.id} className="box-border">
                            <h3 className="text-neutral-900 text-[22px] font-bold box-border leading-7 mb-2 font-agrandir md:text-3xl md:leading-8">{feature.title}</h3>
                            <p className="text-neutral-900 text-sm font-semibold box-border leading-[21px] font-poppins md:text-xl md:leading-[27px]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
