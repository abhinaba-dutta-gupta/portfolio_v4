import Link from "next/link";

const Footer = ({ id }: any) => {
  return (
    <footer className="py-6 bg-gray-900 text-accent text-sm">
      <div className="sm:container mx-auto sm:text-center">
        <p>
          {`Coded in Visual Studio Code. Built with Next.js, Tailwind CSS and `}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Shadcn
          </Link>
          {` components and deployed with Vercel.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
