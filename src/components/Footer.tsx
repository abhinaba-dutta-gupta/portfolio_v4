import Link from "next/link";

const Footer = ({ id }: any) => {
  return (
    <footer className="sm:py-4 text-slate-400 text-sm">
      <div className="sm:container mx-auto sm:text-center">
        <p className="px-4">
          {`Coded in Visual Studio Code. Built using Next.js, Tailwind CSS and `}
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
