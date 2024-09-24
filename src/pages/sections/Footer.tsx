import SocialX from "@/assets/icons/x-social.svg";
import SocialIns from "@/assets/icons/insta.svg";
import SocialTt from "@/assets/icons/tiktok.svg";
import SocialYt from "@/assets/icons/youtube.svg";

export default function Footer() {
  const linkStyles =
    "size-10 lg:size-12 dark:text-gray-400 dark:hover:text-purple-500 hover:text-purple-800 transitions-colors cursor-pointer";
  return (
    <footer className="w-screen mt-20 border-t border-gray-600 text-black dark:text-white transition-colors">
      <div className="container flex items-center justify-between flex-col md:flex-row gap-3 text-center md:text-start py-5 md:px-16 lg:px-20 ">
        <span className="max-w-xs md:max-w-none md:text-xl lg:text-2xl dark:text-gray-400/75">
          © 2024 Your Company, Inc. All rights reserved
        </span>
        <ul className="flex gap-2">
          <li>
            <SocialX className={linkStyles} />
          </li>
          <li>
            <SocialIns className={linkStyles} />
          </li>
          <li>
            <SocialTt className={linkStyles} />
          </li>
          <li>
            <SocialYt className={linkStyles} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
