
export default function Navbar({pname, colorLinkNavbar}) {
  return (
    <>
        <div className="w-full flex items-center justify-between px-20 pt-5">

            <div className="">
                <span className="text-[#00FF90] text-3xl">{'>_'}</span>
                <span className="text-white text-3xl font-bold">Seksan SAU</span>
            </div>

            <div className="flex gap-5 items-center">
                <a href="/" className="text-white" style={{color: pname == 'h' ? colorLinkNavbar : '#ffffff'}}>Home</a>
                <a href="/about" className="text-white" style={{color: pname == 'a' ? colorLinkNavbar : '#ffffff'}}>About</a>
                <a href="/contract" className="text-white" style={{color: pname == 'c' ? colorLinkNavbar : '#ffffff'}}>Contract</a>
                <a href="/portfolio" className="text-white border-2 border-white px-3 py-1 rounded-2xl" style={{color: pname == 'p' ? colorLinkNavbar : '#ffffff'}}>Let's Talk</a>
            </div>
        </div>
    </>
  )
}
