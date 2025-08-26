import { useState } from "react";
import { Button } from "./ui/button";


export default function Hero() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

    return (
        <div>
            <header className="relative items-center self-start box-border flex justify-between w-full z-[2] mx-auto px-4 py-2 md:px-8 md:py-6">
                <a href="/en" className="text-neutral-500 box-border block underline">
                    <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-1.svg" alt="Icon" className="box-content block h-auto align-middle w-auto md:aspect-auto md:box-border md:inline md:h-[50px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-[498px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                </a>
                <div className="items-center box-border flex ml-2">
                    <div className="box-border w-full">
                        <div className="relative box-border flex justify-end mr-4">
                            {/* <button
                                type="button"
                                className="relative text-neutral-900 text-lg font-semibold items-center bg-white flex shrink-0 h-12 justify-center leading-7 max-w-full min-w-12 text-center px-[19px] py-0 rounded-xl border-solid border-white font-poppins before:accent-auto before:box-border before:text-neutral-900 before:hidden before:text-lg before:not-italic before:normal-nums before:font-semibold before:h-[calc(100%_+_10px)] before:left-[-5px] before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:top-[-5px] before:visible before:w-[calc(100%_+_10px)] before:border-blue-500 before:rounded-[14px] before:border-separate before:border-[3px] before:border-solid before:font-poppins"
                                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                            >
                                <div className="items-center box-border gap-x-3 flex justify-center gap-y-3 text-ellipsis text-nowrap overflow-hidden">
                                    <div className="items-center box-border flex shrink-0 h-6 justify-center text-nowrap w-6">
                                        <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-2.svg" alt="Icon" className="box-border h-[50px] text-nowrap w-5" />
                                    </div>
                                    <span className="box-border block text-ellipsis text-nowrap overflow-hidden -mt-0.5">En</span>
                                </div>
                            </button> */}
                            <div className={`absolute bg-white shadow-[rgba(0,0,0,0.08)_0px_8px_32px_0px] box-border hidden flex-col z-[1000] overflow-auto rounded-lg top-[50px] ${isLanguageDropdownOpen ? 'block' : 'hidden'}`}>
                                <div className="box-border min-w-[200px]">
                                    {/* {languageOptions.map((language) => (
                                        <div key={language.code} className="box-border min-w-[200px]">
                                            <a href={language.href} className="relative text-neutral-900 box-border block leading-[22px] min-h-10 w-full px-4 py-[9px]">
                                                {language.name}
                                            </a>
                                        </div>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button type="button" aria-label="Log in" className="relative ">
                        <div className="items-center box-border gap-x-3 flex justify-center gap-y-3 text-ellipsis text-nowrap overflow-hidden">
                            <div className="items-center box-border flex shrink-0 h-6 justify-center text-nowrap w-6">
                                <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-3.svg" alt="Icon" className="box-border h-[50px] text-nowrap w-5" />
                            </div>
                            <span className="box-content inline min-h-0 min-w-0 text-clip text-wrap mt-0 md:aspect-auto md:box-border md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-mt-0.5 md:scroll-m-0 md:scroll-p-[auto]">Log in</span>
                        </div>
                    </Button>
                </div>
            </header>
        </div>
    )
}
