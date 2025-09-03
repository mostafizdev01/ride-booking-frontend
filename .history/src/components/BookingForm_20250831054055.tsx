import React, { useState } from 'react';

export function BookingForm() {
    const [rideType, setRideType] = useState('private');
    const [passengers, setPassengers] = useState(1);
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [fare, setFare] = useState('');

    const handlePassengerChange = (increment: boolean) => {
        if (increment) {
            setPassengers(prev => prev + 1);
        } else if (passengers > 1) {
            setPassengers(prev => prev - 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            rideType,
            passengers,
            fromCity,
            toCity,
            fare
        });
    };

    return (
        <div className="items-center box-border flex flex-col justify-center px-3 md:px-8">
            <div className="relative text-neutral-900 bg-white shadow-[rgba(50,57,66,0.14)_0px_4px_20px_0px] box-border max-w-[1544px] text-center w-full z-[1] p-4 rounded-[32px] md:shadow-none md:pt-8 md:pb-7 md:px-10">
                <form className="box-border" onSubmit={handleSubmit}>
                    <div role="group" className="box-border flex flex-wrap gap-y-2 md:flex-nowrap">
                        <div role="radiogroup" className="box-border gap-x-2 flex flex-wrap gap-y-2">
                            <span
                                role="button"
                                className={rideType === 'private' ? "relative text-white text-sm items-center bg-neutral-800 box-border gap-x-1 flex shrink-0 h-8 justify-center leading-5 mr-2 px-2 py-1.5 rounded-2xl border-2 border-solid border-transparent md:text-base md:h-10 md:leading-[22px] md:px-5 md:py-2 md:rounded-3xl" : "relative text-sm items-center bg-neutral-100 box-border gap-x-1 flex shrink-0 h-8 justify-center leading-5 mr-2 px-2 py-1.5 rounded-2xl border-2 border-solid border-transparent md:text-base md:h-10 md:leading-[22px] md:px-5 md:py-2 md:rounded-3xl"}
                                onClick={() => setRideType('private')}
                            >
                                <span className="text-sm items-center box-border flex basis-[0%] grow leading-5 text-ellipsis text-nowrap md:text-base md:leading-[22px]">Private ride</span>
                                {rideType === 'private' && (
                                    <span className="text-neutral-500 text-sm items-center box-border flex h-5 justify-center leading-5 w-5 md:text-base md:leading-[22px]">
                                        <div className="text-sm items-center box-border flex leading-5 md:text-base md:leading-[22px]">
                                            <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-5.svg" alt="Icon" className="text-sm box-border h-6 leading-5 w-6 md:text-base md:leading-[22px]" />
                                        </div>
                                    </span>
                                )}
                            </span>
                            <span
                                role="button"
                                className={rideType === 'shared' ? "relative text-white text-sm items-center bg-neutral-800 box-border gap-x-1 flex shrink-0 h-8 justify-center leading-5 mr-2 px-2 py-1.5 rounded-2xl border-2 border-solid border-transparent md:text-base md:h-10 md:leading-[22px] md:px-5 md:py-2 md:rounded-3xl" : "relative text-sm items-center bg-neutral-100 box-border gap-x-1 flex shrink-0 h-8 justify-center leading-5 mr-2 px-2 py-1.5 rounded-2xl border-2 border-solid border-transparent md:text-base md:h-10 md:leading-[22px] md:px-5 md:py-2 md:rounded-3xl"}
                                onClick={() => setRideType('shared')}
                            >
                                <span className="text-sm items-center box-border flex basis-[0%] grow leading-5 text-ellipsis text-nowrap md:text-base md:leading-[22px]">Shared ride</span>
                                {rideType === 'shared' && (
                                    <span className="text-neutral-500 text-sm items-center box-border flex h-5 justify-center leading-5 w-5 md:text-base md:leading-[22px]">
                                        <div className="text-sm items-center box-border flex leading-5 md:text-base md:leading-[22px]">
                                            <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-5.svg" alt="Icon" className="text-sm box-border h-6 leading-5 w-6 md:text-base md:leading-[22px]" />
                                        </div>
                                    </span>
                                )}
                            </span>
                        </div>
                        <div className="box-border flex justify-between"></div>
                    </div>

                    <div className="box-border gap-x-3 grid grid-cols-[repeat(12,1fr)] grid-rows-[repeat(1,1fr)] gap-y-3 text-start w-full mt-3 md:mt-[18px]">
                        <div className="box-border flex flex-col col-end-[span_12] col-start-1 md:col-end-[span_6]">
                            <div className="static box-content min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[168px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="box-content block flex-row md:aspect-auto md:box-border md:flex md:flex-col md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="static [align-items:normal] bg-transparent box-content block h-auto min-h-0 min-w-0 w-auto p-0 rounded-none md:relative md:items-center md:aspect-auto md:bg-neutral-100 md:box-border md:flex md:h-14 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:border-neutral-100 md:[mask-position:0%] md:bg-left-top md:px-3 md:py-4 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:border-2 md:border-solid">
                                        <div className="text-black [align-items:normal] self-auto box-content block h-auto justify-normal min-h-0 min-w-0 mr-0 md:text-neutral-500 md:items-center md:self-center md:aspect-auto md:box-border md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                            <span className="text-black text-base [align-items:normal] bg-transparent box-content gap-x-[normal] inline leading-[normal] min-h-0 min-w-0 p-0 rounded-none md:text-neutral-900 md:text-sm md:items-center md:aspect-auto md:bg-white md:box-border md:gap-x-1 md:flex md:leading-[19px] md:min-h-[auto] md:min-w-max md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-2.5 md:py-0.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                                                <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-6.svg" alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-3 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-3 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                                From city
                                            </span>
                                        </div>
                                        <input
                                            placeholder="Address"
                                            type="text"
                                            value={fromCity}
                                            onChange={(e) => setFromCity(e.target.value)}
                                            className="font-normal bg-white box-content inline-block leading-[normal] min-h-0 min-w-0 text-clip text-wrap w-auto font-arial md:font-medium md:aspect-auto md:bg-neutral-100 md:box-border md:block md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:font-noto_sans"
                                            required
                                        />
                                        <div className="text-black [align-items:normal] self-auto box-content block h-auto justify-normal min-h-0 min-w-0 w-auto md:text-neutral-500 md:items-center md:self-center md:aspect-auto md:box-border md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <div role="button" className="static [align-items:normal] self-auto bg-transparent box-content block justify-normal max-h-none max-w-none min-h-0 min-w-0 rounded-none md:relative md:items-center md:self-center md:aspect-auto md:bg-neutral-100 md:box-border md:flex md:justify-center md:max-h-10 md:max-w-10 md:min-h-10 md:min-w-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:border-4 md:border-solid md:border-white">
                                                <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-7.svg" alt="Icon" className="text-black box-content h-auto align-middle w-auto md:text-stone-300 md:aspect-auto md:box-border md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-content block justify-normal min-h-0 min-w-0 md:aspect-auto md:box-border md:flex md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                                </div>
                                <div className="static bg-transparent box-content min-w-0 transform-none w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-white md:box-border md:min-w-[360px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-14 md:w-full md:z-[1001] md:border md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:border-solid md:border-transparent md:left-0 md:top-0"></div>
                            </div>
                            <div className="box-border flex justify-between"></div>
                        </div>

                        <div className="box-border flex flex-col col-end-[span_12] col-start-1 -mt-1.5 md:col-end-[span_6] md:col-start-7 md:mt-0">
                            <div className="static box-content min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[168px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="box-content block flex-row md:aspect-auto md:box-border md:flex md:flex-col md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="static [align-items:normal] bg-transparent box-content block h-auto min-h-0 min-w-0 w-auto p-0 rounded-none md:relative md:items-center md:aspect-auto md:bg-neutral-100 md:box-border md:flex md:h-14 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:border-neutral-100 md:[mask-position:0%] md:bg-left-top md:px-3 md:py-4 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:border-2 md:border-solid">
                                        <div className="text-black [align-items:normal] self-auto box-content block h-auto justify-normal min-h-0 min-w-0 mr-0 md:text-neutral-500 md:items-center md:self-center md:aspect-auto md:box-border md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                                            <span className="text-black text-base [align-items:normal] bg-transparent box-content gap-x-[normal] inline leading-[normal] min-h-0 min-w-0 p-0 rounded-none md:text-neutral-900 md:text-sm md:items-center md:aspect-auto md:bg-white md:box-border md:gap-x-1 md:flex md:leading-[19px] md:min-h-[auto] md:min-w-max md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-2.5 md:py-0.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                                                <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-8.svg" alt="Icon" className="box-content h-auto align-middle w-auto md:aspect-auto md:box-border md:h-3 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-3 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                                To city
                                            </span>
                                        </div>
                                        <input
                                            placeholder="Address"
                                            type="text"
                                            value={toCity}
                                            onChange={(e) => setToCity(e.target.value)}
                                            className="font-normal bg-white box-content inline-block leading-[normal] min-h-0 min-w-0 text-clip text-wrap w-auto font-arial md:font-medium md:aspect-auto md:bg-neutral-100 md:box-border md:block md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:font-noto_sans"
                                            required
                                        />
                                    </div>
                                    <div className="box-content block justify-normal min-h-0 min-w-0 md:aspect-auto md:box-border md:flex md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                                </div>
                                <div className="static bg-transparent box-content min-w-0 transform-none w-auto z-auto rounded-none left-auto top-auto md:absolute md:aspect-auto md:bg-white md:box-border md:min-w-[360px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-14 md:w-full md:z-[1001] md:border md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:border-solid md:border-transparent md:left-0 md:top-0"></div>
                            </div>
                            <div className="box-border flex justify-between"></div>
                        </div>

                        <div className="box-content block flex-row col-end-auto col-start-auto min-h-0 min-w-0 md:aspect-auto md:box-border md:flex md:flex-col md:col-end-[span_3] md:col-start-1 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <span className="static text-black text-base box-content inline leading-[normal] z-auto left-auto top-auto md:absolute md:text-neutral-500 md:text-sm md:aspect-auto md:box-border md:block md:leading-[19px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-4 md:top-2">When</span>
                                <div className="box-content block w-auto md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="static box-content block w-auto md:relative md:aspect-auto md:box-border md:inline-block md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="[align-items:normal] box-content block w-auto md:items-center md:aspect-auto md:box-border md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <div className="[align-items:normal] bg-transparent box-content block h-auto min-h-0 min-w-0 w-auto p-0 rounded-none md:items-end md:aspect-auto md:bg-neutral-100 md:box-border md:flex md:h-14 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:border-neutral-100 md:[mask-position:0%] md:bg-left-top md:px-4 md:py-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:border-2 md:border-solid">
                                                <input type="button" value="Mon, 25 Aug, 17:15" className="font-normal [align-items:normal] bg-white box-content inline-block h-auto leading-[normal] min-h-0 min-w-0 text-clip text-wrap w-auto md:font-medium md:items-end md:aspect-auto md:bg-transparent md:box-border md:flex md:h-5 md:leading-5 md:min-h-[auto] md:min-w-max md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto]" />
                                                <div className="box-content block md:aspect-auto md:box-border md:hidden md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">Mon, 25 Aug, 17:15</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-content block justify-normal min-h-0 min-w-0 md:aspect-auto md:box-border md:flex md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                        </div>

                        <div className="box-content block flex-row col-end-auto col-start-auto min-h-0 min-w-0 md:aspect-auto md:box-border md:flex md:flex-col md:col-end-[span_3] md:col-start-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static box-content min-h-0 min-w-0 md:relative md:aspect-auto md:box-border md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <div className="box-content block flex-row md:aspect-auto md:box-border md:flex md:flex-col md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static [align-items:normal] bg-transparent box-content block h-auto min-h-0 min-w-0 w-auto p-0 rounded-none md:relative md:items-center md:aspect-auto md:bg-neutral-100 md:box-border md:flex md:h-14 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:border-neutral-100 md:[mask-position:0%] md:bg-left-top md:px-4 md:py-3.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:border-2 md:border-solid">
                                            <input
                                                type="text"
                                                value={passengers.toString()}
                                                readOnly
                                                className="font-normal bg-white box-content inline-block leading-[normal] min-h-0 min-w-0 text-clip text-wrap w-auto mt-0 font-arial md:font-medium md:aspect-auto md:bg-neutral-100 md:box-border md:block md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:mt-[18px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:font-noto_sans"
                                            />
                                            <div className="static [align-items:normal] box-content block h-auto leading-[normal] w-auto px-0 left-auto top-auto md:absolute md:items-center md:aspect-auto md:box-border md:flex md:h-full md:leading-[22px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:px-4 md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0">
                                                <label className="text-black text-base font-normal box-content inline min-h-0 min-w-0 text-clip text-wrap transform-none origin-[50%_50%] md:text-neutral-500 md:text-sm md:font-medium md:aspect-auto md:box-border md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:translate-y-[-11px] md:origin-[0px_50%] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">Passengers</label>
                                            </div>
                                        </div>
                                        <div className="box-content block justify-normal min-h-0 min-w-0 md:aspect-auto md:box-border md:flex md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                                    </div>
                                </div>
                                <div className="static [align-items:normal] bg-transparent shadow-none box-content block justify-normal max-w-none w-auto z-auto rounded-none left-auto top-auto md:absolute md:items-center md:aspect-auto md:bg-white md:shadow-[rgba(50,57,66,0.14)_0px_4px_20px_0px] md:box-border md:hidden md:justify-between md:max-w-48 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-48 md:z-[1] md:[mask-position:0%] md:bg-left-top md:p-5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl md:left-0 md:top-14">
                                    <button
                                        type="button"
                                        className="static text-black font-normal [align-items:normal] bg-zinc-100 inline-block shrink h-auto justify-normal leading-[normal] max-w-none min-w-0 text-center w-auto rounded-none md:relative md:text-stone-300 md:font-medium md:items-center md:aspect-auto md:bg-zinc-50 md:inline-flex md:shrink-0 md:h-10 md:justify-center md:leading-6 md:max-w-10 md:min-w-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:border-zinc-50 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:border-solid before:md:accent-auto before:md:box-border before:md:text-stone-300 before:md:hidden before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-medium before:md:h-[calc(100%_+_10px)] before:md:left-[-5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:absolute before:md:text-center before:md:indent-[0px] before:md:normal-case before:md:top-[-5px] before:md:visible before:md:w-[calc(100%_+_10px)] before:md:border-blue-500 before:md:rounded-[14px] before:md:border-separate before:md:border-[3px] before:md:border-solid before:md:font-noto_sans"
                                        onClick={() => handlePassengerChange(false)}
                                        disabled={passengers <= 1}
                                    >
                                        <div className="[align-items:normal] box-content gap-x-[normal] block justify-normal gap-y-[normal] text-clip text-wrap md:items-center md:aspect-auto md:box-border md:gap-x-2 md:flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <div className="[align-items:normal] box-content block shrink h-auto justify-normal text-wrap w-auto md:items-center md:aspect-auto md:box-border md:flex md:shrink-0 md:h-5 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-9.svg" alt="Icon" className="box-content h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                            </div>
                                        </div>
                                    </button>
                                    <span className="text-base box-content leading-[normal] md:text-xl md:aspect-auto md:box-border md:leading-[27px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">{passengers}</span>
                                    <button
                                        type="button"
                                        className="static font-normal [align-items:normal] bg-zinc-100 inline-block shrink h-auto justify-normal leading-[normal] max-w-none min-w-0 text-center w-auto rounded-none md:relative md:font-medium md:items-center md:aspect-auto md:bg-lime-400 md:inline-flex md:shrink-0 md:h-10 md:justify-center md:leading-6 md:max-w-10 md:min-w-10 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-10 md:border-lime-400 md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl md:border-solid before:md:accent-auto before:md:box-border before:md:text-neutral-900 before:md:hidden before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-medium before:md:h-[calc(100%_+_10px)] before:md:left-[-5px] before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:absolute before:md:text-center before:md:indent-[0px] before:md:normal-case before:md:top-[-5px] before:md:visible before:md:w-[calc(100%_+_10px)] before:md:border-blue-500 before:md:rounded-[14px] before:md:border-separate before:md:border-[3px] before:md:border-solid before:md:font-noto_sans"
                                        onClick={() => handlePassengerChange(true)}
                                    >
                                        <div className="[align-items:normal] box-content gap-x-[normal] block justify-normal gap-y-[normal] text-clip text-wrap md:items-center md:aspect-auto md:box-border md:gap-x-2 md:flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            <div className="[align-items:normal] box-content block shrink h-auto justify-normal text-wrap w-auto md:items-center md:aspect-auto md:box-border md:flex md:shrink-0 md:h-5 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                                <img src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-10.svg" alt="Icon" className="box-content h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="box-content block justify-normal min-h-0 min-w-0 md:aspect-auto md:box-border md:flex md:justify-between md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                        </div>

                        <div className="box-border flex flex-col col-end-[span_12] col-start-1 md:col-end-[span_3] md:col-start-7">
                            <div className="relative box-border">
                                <div className="box-border flex flex-col">
                                    <div className="relative items-center bg-neutral-100 box-border flex h-14 w-full border-neutral-100 px-4 py-3.5 rounded-lg border-2 border-solid">
                                        {/* <input
                                            type="text"
                                            value={fare}
                                            onChange={(e) => setFare(e.target.value)}
                                            name="price"
                                            className="font-medium bg-neutral-100 box-border block leading-5 text-ellipsis text-nowrap w-full mt-[18px] p-0 font-noto_sans"
                                            placeholder="Enter your fare"
                                        /> */}
                                        <input
                                            placeholder="Address"
                                            type="text"
                                            value={fromCity}
                                            onChange={(e) => setFromCity(e.target.value)}
                                            className="font-normal bg-white box-content inline-block leading-[normal] min-h-0 min-w-0 text-clip text-wrap w-auto font-arial md:font-medium md:aspect-auto md:bg-neutral-100 md:box-border md:block md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:font-noto_sans"
                                            required
                                        />
                                        {/* 
                                        
                                        */}
                                        <div className="absolute items-center box-border flex h-full leading-[22px] w-full px-4 left-0 top-0">
                                            <label className="text-neutral-500 font-medium box-border block text-ellipsis text-nowrap origin-[0px_50%] overflow-hidden">Offer your fare (optional)</label>
                                        </div>
                                    </div>
                                    <div className="box-border flex justify-between"></div>
                                </div>
                            </div>
                            <div className="box-border flex justify-between"></div>
                        </div>

                        <input type="hidden" value="" className="text-black bg-transparent box-border hidden p-0" />
                        <input type="hidden" value="UTC" className="text-black bg-transparent box-border hidden p-0" />

                        <button type="submit" className="relative text-xl font-medium items-center bg-lime-400 flex shrink-0 col-end-[span_12] col-start-1 h-14 justify-center leading-7 max-w-full min-w-14 text-center w-full border-lime-400 px-[23px] py-0 rounded-lg border-solid md:col-end-[span_3] md:col-start-10 md:w-auto before:accent-auto before:box-border before:text-neutral-900 before:hidden before:text-xl before:not-italic before:normal-nums before:font-medium before:h-[calc(100%_+_10px)] before:left-[-5px] before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:top-[-5px] before:visible before:w-[calc(100%_+_10px)] before:border-blue-500 before:rounded-[14px] before:border-separate before:border-[3px] before:border-solid before:font-noto_sans">
                            <div className="items-center box-border gap-x-3 flex justify-center gap-y-3 text-ellipsis text-nowrap overflow-hidden">
                                <span className="box-border block text-ellipsis text-nowrap overflow-hidden -mt-0.5">Find a driver</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
