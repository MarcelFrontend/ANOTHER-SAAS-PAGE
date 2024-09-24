import SectionHeader from "../components/SectionHeader";
import Cube from '@/assets/icons/ecosystem.svg'

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export default function Features() {
  return (
    <section id="features" className="container my-12 md:my-24 lg:my-36">
      <SectionHeader
        main="Everything you need"
        mainClasses="max-w-none lg:max-w-none text-[2.9rem] leading-[38px] md:text-6xl lg:text-[5.3rem] pb-1"
        p="Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
        pClasses="max-w-md px-10 lg:px-5 md:max-w-[35rem] lg:max-w-3xl xl:max-w-6xl lg:text-xl"
      />
      <ul className="flex items-center justify-center flex-col gap-10 md:flex-row mt-10 lg:mt-14">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="max-w-xs md:max-w-[17.2rem] lg:max-w-xs xl:max-w-md xl:h-80 flex items-center flex-col gap-1 text-center border-2 bg-purple-400 dark:bg-black border-purple-950 dark:border-purple-500 rounded-xl lg:rounded-2xl 
              py-9 md:pt-10 px-4 md:px-2 text-black dark:text-white shadow-[inset_0px_5px_10px_1px_#9729ff] dark:shadow-[inset_0px_5px_20px_5px_#5800ab]"
          >
            <Cube className="h-14 w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 mb-2.5 bg-white text-black p-3 rounded-xl" />
            <span className="font-black text-xl lg:text-2xl xl:text-3xl">
              {feature.title}
            </span>
            <p className="text-base lg:text-lg xl:text-2xl px-5 tracking-tight dark:text-gray-300 dark:lg:text-gray-200">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
