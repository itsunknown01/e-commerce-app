import Link from "next/link";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <section className="bg-zinc-100">
      <div className="m-auto bg-white max-w-[60vw] px-20 py-10 rounded-xl border-white bottom-1 translate-y-1/2">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="justify-self-end self-end">
            <Link href="/contact">
              <Button variant="primary" className="px-9 py-5 uppercase">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="px-0 pt-44 pb-4 bg-gray-800">
        <div className="grid grid-cols-[1fr_1.2fr_0.5fr_0.8fr] gap-10 max-w-7xl mx-auto mb-8">
          <div>
            <h3 className="text-white mb-9">Unknown</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-8">Subscribe to get important updates</h3>
            <form action="#">
                <input type="email" placeholder="your e-mail" className="text-gray-800 py-4 px-9 uppercase max-w-3xl" />
                <input type="submit" value="subscribe" className="mt-8 max-w-xs bg-[rgb(98_84_243)] py-3 px-8 uppercase cursor-pointer "/>
            </form>
          </div>

          <div>
            <h3 className="text-white mb-8">Follow Me</h3>
            <div className="flex gap-8">
                <div className="p-4 rounded-[50%] border-[2px] border-solid border-white">
                    <FaDiscord className="text-white relative cursor-pointer"/>
                </div>
                <div className="p-4 rounded-[50%] border-[2px] border-solid border-white">
                    <FaInstagram className="text-white relative cursor-pointer"/>
                </div>
                <div className="p-4 rounded-[50%] border-[2px] border-solid border-white">
                    <FaInstagram className="text-white relative cursor-pointer"/>
                </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3 className="text-white mb-9">Call Us</h3>
            <h3 className="text-white mb-9">+91 8092623457</h3>
          </div>
        </div>

        <Separator color="ghost" />

        <div className="flex flex-col items-center justify-center w-full h-24 bg-gray-800">
          <div className="flex flex-row items-center pl-20 w-full h-full">
            <p className="text-sm text-white">
              © 2023 All Rights Reserved by Unknown
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
