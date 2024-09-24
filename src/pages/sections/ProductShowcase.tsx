import appScreen from "@/assets/images/app-screen.png";
import SectionHeader from "../components/SectionHeader";

export default function ProductShowcase() {
  return (
    <section
      id="product"
      className="bg-gradient-to-b from-gray-100 dark:from-black to-[#5a2aa5] dark:to-[#5a2aa5] mt-24
       transition-colors duration-[2s]"
    >
      <div className="relative container flex items-center justify-center flex-col gap-10 md:py-10 lg:pb-36">
        <SectionHeader
          main="Intuitive interface"
          mainClasses="text-[2.8rem]"
          p="Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time."
          pClasses="text-xs md:max-w-md xl:max-w-5xl xl:px-9 leading-5"
        />
        <img
          className="md:w-[90%] lg:w-[80%] xl:w-[85%] h-auto"
          src={appScreen.src}
          height={500}
          width={500}
          alt="Product Showcase"
          loading="lazy"
        />
      </div>
    </section>
  );
}
