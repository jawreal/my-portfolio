const date = new Date()
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="w-full py-12 flex flex-col items-center border-t border-slate-300 dark:border-slate-800">
      <span className="text-slate-500 dark:text-slate-400 text-sm">&copy; {year} Jorell Relleve. All rights reserved.</span>
    </div>
  );
};

export default Footer;