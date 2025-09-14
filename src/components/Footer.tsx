import Link from "next/link";

const Footer = ({ id }: any) => {
  return (
    <footer className="w-full py-8 sm:py-12 text-slate-400 text-sm bg-gradient-to-br from-[#232526]/90 to-[#414345]/90 rounded-2xl shadow-inner border-t border-slate-800/40 backdrop-blur-xl">
      <div className="max-w-3xl mx-auto text-center px-4">
        <p>
          Coded in Visual Studio Code. Built using Next.js, Tailwind CSS and{' '}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-4 decoration-cyan-400 hover:decoration-purple-400 transition-colors"
          >
            Shadcn
          </Link>
          {' '}components and deployed with Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
