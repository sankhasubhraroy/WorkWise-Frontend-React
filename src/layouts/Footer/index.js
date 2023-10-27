import { footerLinks } from "../../utils/constants";
import BrandLogo from "./BrandLogo";
import Column from "./Column";

const Footer = () => {
  return (
    <footer>
      <div className="ELEMENTOR">
        <section className="border-t-[1px] border-secondary py-20">
          <div className="container flex flex-wrap justify-between gap-4">
            <div className="MAIN-COLUMN py-4 px-8">
              <BrandLogo />

              <div className="DETAILS my-8">
                <p>
                  Sunview Park, Asansol, Paschim Bardhaman, West Bengal, 713303,
                  India.
                </p>
                <p>support@workwise.com</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="news" className="relative">
                  <input
                    id="news"
                    type="email"
                    name="email"
                    placeholder="Your email adress"
                    className="w-full h-16 rounded-full border-[1px] border-primary outline-none px-4 placeholder:text-subtext"
                  />

                  <button
                    type="submit"
                    className="bg-pale-purple h-14 w-32 rounded-full text-primary absolute right-1 top-1/2 -translate-y-1/2 max-sm:text-sm max-sm:w-24"
                  >
                    Subscribe
                  </button>
                </label>
              </form>
            </div>

            <Column heading="Categories" links={footerLinks.categories} />
            <Column heading="Community" links={footerLinks.community} />
            <Column heading="Support" links={footerLinks.support} />
          </div>
        </section>
      </div>

      <div className="COPYRIGHT border-t-[1px] border-primary py-6">
        <div className="container">
          <p className="text-secondary text-center">
            Copyright © 2023 WorkWise All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
