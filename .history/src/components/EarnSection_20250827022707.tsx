import { earningSections } from '../components/data/earning';

export function EarnSection() {
    return (
        <>
            <section className="box-border caret-transparent break-words">
                <div className="items-center box-border caret-transparent flex flex-col grow shrink-0 break-words pt-24 pb-16 px-6 md:pt-32 md:pb-[88px]">
                    <div className="box-border caret-transparent max-w-[1136px] break-words w-full">
                        <div className="box-border caret-transparent flex flex-col justify-startbreak-words">
                            <h2 className="text-neutral-900 text-4xl font-bold box-border inline-block leading-9 text-center w-full z-0 font-agrandir md:text-[64px] md:leading-[64px]">
                                Earn money with Bolt{' '}
                                <mark className="relative text-black text-4xl items-center bg-transparent box-border inline-flex justify-center leading-9 md:text-[64px] md:leading-[64px]">
                                    <span className="relative text-4xl box-border block leading-9 z-[1] md:text-[64px] md:leading-[64px]">safety</span>
                                    <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-14.svg" alt="Icon" className="absolute text-4xl box-border h-[68px] leading-9 w-[218px] z-0 md:text-[64px] md:leading-[64px]" />
                                </mark>
                            </h2>

                        </div>
                    </div>
                </div>
            </section>
            {earningSections.map((section) => (
                <section key={section.id} className="box-border caret-transparent break-words bg-red-200">
                    <div className="items-center box-border caret-transparent flex flex-col grow shrink-0 break-words pb-16 md:pb-[88px]">
                        <div className="box-border caret-transparent break-words w-full">
                            <div className="box-border caret-transparent break-words">
                                <div role="tabpanel" className={section.tabPanelClassName}>
                                    <div className="box-border caret-transparent gap-x-8 flex basis-auto flex-col justify-start break-words gap-y-8 w-full">
                                        <div className="box-border caret-transparent break-words">
                                            <span className="text-zinc-950/60 font-[650] box-border caret-transparent tracking-[-0.176px] break-words mb-2">{section.subtitle}</span>
                                            <h3 className="text-2xl font-[650] box-border caret-transparent tracking-[-0.456px] leading-[30px] break-words md:text-[32px] md:tracking-[-0.704px] md:leading-[39px]">{section.title}</h3>
                                        </div>
                                        <p className="text-zinc-950/60 text-lg box-border caret-transparent tracking-[-0.252px] leading-[26px] break-words md:text-xl md:tracking-[-0.34px]">{section.description}</p>
                                        <div className="box-border caret-transparent gap-x-4 flex flex-col justify-start break-words gap-y-4 w-full md:flex-row md:w-auto">
                                            <a href={section.href} className="text-white text-lg font-[650] items-center bg-green-700 box-border caret-transparent gap-x-3 flex shrink-0 h-12 justify-center tracking-[-0.252px] leading-[26px] break-words gap-y-3 text-center decoration-[oklab(0.423855_-0.10176_0.0613628_/_0.172549)] decoration-1 underline-offset-[2.45px] align-top px-6 rounded-lg md:text-xl md:tracking-[-0.34px] md:underline-offset-[2.5px]">{section.linkText}</a>
                                        </div>
                                    </div>
                                    <div className="box-border caret-transparent basis-auto max-w-none break-words w-full md:basis-6/12 md:max-w-[464px]">
                                        <div className="relative aspect-[4_/_3] box-border caret-transparent h-full break-words w-full overflow-hidden rounded-xl md:aspect-[4_/_5]">
                                            <img
                                                alt={section.imageAlt}
                                                sizes="100vw"
                                                src={section.imageSrc}
                                                className="absolute text-transparent box-border h-full max-w-full object-cover break-words w-full rounded-xl inset-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
