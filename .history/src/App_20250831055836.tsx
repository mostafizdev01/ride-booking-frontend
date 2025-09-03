import FindDriverForm from "./components/BookingForm"
import { EarnSection } from "./components/EarnSection"
import { FeaturesSection } from "./components/FeaturesSection"
import { Footer } from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/heroSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { SafetySection } from "./components/SafetySection"
import { ServiceSection } from "./components/ServiceSection"
import { StatsSection } from "./components/StatsSection"
import Testimonial2 from "./components/Testimonial"

function App() {

  return (
    <>
      <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border block tracking-[normal] leading-[18.4px] list-outside list-disc text-start indent-[0px] normal-case visible w-full border-separate font-noto_sans">
        <div className="box-border">
          <div className="box-border h-full w-full">
            <div className="box-border">
              <section className="relative bg-[url('https://intercity.indrive.com/assets/images/bg_hero.png')] bg-size-[450%] box-border z-[2] bg-[position:70%_0px] pb-8 md:bg-cover md:bg-left-top md:pb-12">
                <Header />
                <HeroSection />
                <FindDriverForm />
              </section>
              <div className="bg-neutral-100 box-border">
                <div className="box-border max-w-[1256px] overflow-x-hidden overflow-y-auto w-full mx-auto px-3 md:max-w-[1312px] md:px-7">
                  <FeaturesSection />
                  <SafetySection />
                  <ServiceSection />
                  <HowItWorksSection />
                  <EarnSection />
                  <Testimonial2 />
                  <StatsSection />
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute box-border inset-0">
          <section className="fixed items-center box-border flex flex-col max-h-full max-w-full w-full z-[1002] px-4 top-auto bottom-4 md:px-0 md:top-[68px] md:bottom-auto"></section>
        </div>
        <div className="absolute box-border z-[3]"></div>
        <div className="box-border"></div>
        {/* <CookieConsent /> */}
        <iframe src="https://web.cmp.usercentrics.eu/cdcs/v/1.0.0/index.html" className="box-border hidden border-zinc-100"></iframe>
      </div>
    </>
  )
}

export default App
