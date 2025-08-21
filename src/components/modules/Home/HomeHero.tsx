import { Button } from "@/components/ui/button";
import image from "../../../assets/images/HeroBanner.jpg"

const HomeHero = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center p-6 text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-300">
              Empowering Your Ride Experience
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover the ultimate ride experience with our innovative platform.
            </p>
            <Button className="mt-8 rounded-md px-4 py-2 text-white">
              Get Started
            </Button>
          </div>
          <img
            src={image}
            alt="Hero Image"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
