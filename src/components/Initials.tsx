interface IProps {
  isVisible: boolean;
}

const Initials = ({ isVisible }) => {
  return (
  <div className="text-4xl md:text-7xl font-ultra leading-10 relative" >
     <p className="dark:text-slate-200 relative z-10">JR.</p>
     {isVisible && <p className="text-slate-200/90 dark:text-slate-800/80 transform translate-x-2 absolute top-0 z-1 translate-y-2" >JR.</p>}
  </div>
  )
}

export default Initials;