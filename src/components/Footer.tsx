import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col gap-8 items-center md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="DevaStore" width={36} height={36} />
          <p className="hidden md:block text-md font-medium traking-wider text-white">
            DevaStore
          </p>
        </Link>
        <p className="text-sm text-gray-400">&copy; 2025 DevaStore</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50">Products</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrial</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400">
        <p className="text-sm text-amber-50">Company</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
