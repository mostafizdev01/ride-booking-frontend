import { features } from "@/components/data/features";


export function FeaturesSection() {
    return (
        <section className="box-border pt-12 md:pt-24">
            <h2 className="text-neutral-900 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">So, why choose us?</h2>
            <div className="box-border gap-x-4 grid grid-cols-[1fr] gap-y-4 mt-6 md:grid-cols-[1fr_1fr_1fr] md:mt-12">
                {features?.map((feature) => (
                    <div key={feature.id} className="items-start bg-white shadow-[rgba(20,20,20,0.1)_0px_12px_16px_0px] box-border gap-x-5 flex flex-row gap-y-5 p-8 rounded-[32px] md:flex-col md:pb-10 md:px-10">
                        <div className="items-center bg-lime-400 box-border flex h-16 justify-center min-w-16 rounded-[20px]">
                            <img src={feature.icon} alt="Icon" className={feature.iconClass} />
                        </div>
                        <div className="box-border">
                            <h3 className="text-neutral-900 text-[22px] font-bold box-border inline-block tracking-[-0.44px] leading-7 z-0 mb-2 font-agrandir md:text-3xl md:tracking-[-0.6px] md:leading-8">{feature.title}</h3>
                            <p className="text-neutral-900 text-sm font-semibold box-border leading-[21px] font-poppins md:text-base md:leading-6">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
