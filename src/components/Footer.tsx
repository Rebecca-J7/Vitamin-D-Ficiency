import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute top-[3900px] h-[100px] w-screen bg-cyan-700">
      <div className="flex flex-col gap-3">
        <div className="relative left-14 flex flex-row gap-7 text-xs text-white">
          <Link href="https://github.com/Rebecca-J7">
            <p>github</p>
          </Link>
        </div>
        <p className="relative left-14 text-xs text-white">
          © {new Date().getFullYear()} Vitamin-D-ficiency. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
