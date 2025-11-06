// import { howItWorksSteps } from '../components/data/howItWorksSteps';

import { howItWorksSteps } from "@/components/data/howItWorksSteps";


export function HowItWorksSection() {
    return (
        <section className="box-border pt-12 md:pt-28">
            <h2 className="text-neutral-900 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">
                How does{' '}
                <mark className="relative text-black text-4xl items-center bg-transparent box-border inline-flex justify-center leading-9 md:text-[64px] md:leading-[64px]">
                    <span className="relative text-4xl box-border block leading-9 z-[1] md:text-[64px] md:leading-[64px]">it work?</span>
                    <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-16.svg" alt="Icon" className="absolute text-4xl box-border h-[74px] leading-9 w-[229px] z-0 md:text-[64px] md:leading-[64px]" />
                </mark>
            </h2>
            <div className="items-center box-border gap-x-0 grid grid-cols-[1fr] mt-6 md:gap-x-20 md:grid-cols-[1fr_1fr] md:mt-12">
                <div className="items-center bg-white shadow-[rgba(20,20,20,0.04)_0px_40px_40px_0px] box-border flex justify-center px-9 py-16 rounded-[32px] lg:px-[120px]">
                    <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-17.svg" alt="Icon" className="box-border h-[374px] w-full md:w-[373px]" />
                </div>
                <ol className="box-border flex flex-col list-decimal gap-y-9 pt-10 px-4 md:pt-0 md:px-0">
                    {howItWorksSteps?.map((step) => (
                        <li key={step.id} value={step.id} className="relative items-center box-border gap-x-6 flex text-left before:accent-auto before:items-center before:bg-lime-400 before:text-neutral-900 before:flex before:text-2xl before:not-italic before:normal-nums before:font-bold before:h-14 before:justify-center before:tracking-[normal] before:leading-8 before:list-outside before:list-decimal before:min-w-14 before:text-left before:indent-[0px] before:normal-case before:visible before:w-14 before:rounded-2xl before:border-separate before:font-agrandir before:md:text-[28px]">
                            <div className="box-border">
                                <h3 className="text-neutral-900 text-[22px] font-bold box-border inline-block tracking-[-0.88px] leading-7 z-0 font-agrandir md:text-3xl md:tracking-[-1.2px] md:leading-8">{step.title}</h3>
                            </div>
                        </li>
                    ))}

                    {/* <li className="relative items-center box-border gap-x-6 flex text-left before:accent-auto before:items-center before:bg-lime-400 before:text-neutral-900 before:flex before:text-2xl before:not-italic before:normal-nums before:font-bold before:h-14 before:justify-center before:tracking-[normal] before:leading-8 before:list-outside before:list-decimal before:min-w-14 before:text-left before:indent-[0px] before:normal-case before:visible before:w-14 before:rounded-2xl before:border-separate before:font-agrandir before:md:text-[28px]">
                        <div className="box-border">
                            <h3 className="text-neutral-900 text-[22px] font-bold box-border inline-block tracking-[-0.88px] leading-7 z-0 font-agrandir md:text-3xl md:tracking-[-1.2px] md:leading-8">Amar Sonar Bangla</h3>
                        </div>
                    </li> */}
                </ol>
            </div>
        </section>
    );
}
