
export default function HeroSection() {
    return (
        <div>
            <div className="text-white items-center box-border flex flex-col text-center mt-4 px-3 md:mt-0 md:pt-16 md:px-8">
                <h1 className="text-[32px] font-bold box-border tracking-[-0.64px] leading-[38px] max-w-[1150px] mb-5 font-agrandir md:text-[64px] md:tracking-[-1.28px] md:leading-[64px] md:mb-12">
                    City to city rides at{' '}
                    <mark className="relative text-black text-[32px] items-center bg-transparent box-border inline-flex justify-center tracking-[-0.64px] leading-[38px] md:text-[64px] md:tracking-[-1.28px] md:leading-[64px]">
                        <span className="relative text-[32px] box-border block tracking-[-0.64px] leading-[38px] z-[1] md:text-[64px] md:tracking-[-1.28px] md:leading-[64px]">your fare</span>
                        <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-4.svg" alt="Icon" className="absolute text-[32px] box-border h-[60px] left-[-5px] tracking-[-0.64px] leading-[38px] z-0 -top-1.5 md:text-[64px] md:tracking-[-1.28px] md:leading-[64px] md:top-[9px]" />
                    </mark>
                </h1>
                <div className="text-base font-normal box-content leading-[normal] max-w-none min-h-0 min-w-0 mb-0 font-times md:text-lg md:font-semibold md:aspect-auto md:box-border md:leading-6 md:max-w-[920px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mb-14 md:scroll-m-0 md:scroll-p-[auto] md:font-poppins">
                    Explore hundreds of intercity routes. Suggest your price and choose one of our verified drivers
                </div>
            </div>
        </div>
    )
}
