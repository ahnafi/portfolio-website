export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-800 pt-24 pb-12 ">
      <div className="container">
        <div className="flex flex-wrap lg:items-center lg:justify-between">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="text-white text-4xl font-bold mb-5 -translate-y-1/2">
              ATIK AHNAFI SULTHON
            </h2>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3" id="contact">
            <h3 className="font-bold text-4xl text-white mb-5">
              Contact Me
            </h3>
            <ul className="text-slate-200">
              <li>
                <h3 className="font-bold mb-2 text-xl">Email</h3>
                <a href="mailto:sulthongohome@gmail.com">
                  <b>sulthongohome@gmail.com</b>
                </a>
              </li>
              <li>
                <h3 className="font-bold mb-2 text-xl">WhatsApp</h3>
                <a
                  href="https://wa.me/6281226998037?text=hi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>link</b>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 mb-12 md:w-auto ">
            <h3 className="font-bold text-4xl text-white mb-5">Tautan</h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  skills
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <p className="text-center font-medium text-sm text-slate-500">
            © 2021 <span className="text-white">Atik Ahnafi Sulthon.</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
