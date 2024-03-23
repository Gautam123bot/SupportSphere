import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube, url: "https://www.youtube.com" },
    { label: "Instagram", icon: FaInstagram, url: "https://www.instagram.com" },
    { label: "Twitter", icon: FaXTwitter, url: "https://twitter.com" },
    { label: "Dribbble", icon: FaDribbble, url: "https://dribbble.com" },
  ];

  const links = [
    [
      { label: "Company", key: "header-1", url: "https://github.com/Gautam123bot/care-taker" },
      { label: "About us", key: "item-1-1", url: "https://example.com/about-us" },
      { label: "Blog", key: "item-1-2", url: "https://example.com/blog" },
      { label: "Contact us", key: "item-1-3", url: "https://example.com/contact-us" },
      { label: "Pricing", key: "item-1-4", url: "https://example.com/pricing" },
      { label: "Testimonials", key: "item-1-5", url: "https://example.com/testimonials" }
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1", url: "https://example.com/help-center" },
      { label: "Terms of service", key: "item-2-2", url: "https://example.com/terms-of-service" },
      { label: "Legal", key: "item-2-3", url: "https://example.com/legal" },
      { label: "Privacy policy", key: "item-2-4", url: "https://example.com/privacy-policy" },
      { label: "Status", key: "item-2-5", url: "https://example.com/status" },
    ],
  ];

  return (
    <div className="app min-h-screen flex items-end justify-center font-poppins">
      <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 text-white w-full p-4 relative bg-blue-500">
        <div className="  ">
          <div className="footer-img flex items-center">
            <img
              src={"https://i.imgur.com/520zDfd.png"}
              alt=""
              className="w-16 h-auto"
            />
            <span className="text-3xl font-bold pl-2 text-white">
              Company name
            </span>
          </div>
          <div className="infos text-gray-400">
            <span>Copyright © 2020 Nexcent ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <a key={`social-${index}`} href={socialLink.url} target="_blank" rel="noopener noreferrer">
                  <Icon
                    className="w-14 h-14 p-2 rounded-full bg-green-700 hover:bg-white hover:text-green-700 cursor-pointer"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-gray-400 cursor-pointer ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-white"
                          : ""
                      }`}
                    >
                      <a href={link.url}>{link.label}</a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col  ">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
};
