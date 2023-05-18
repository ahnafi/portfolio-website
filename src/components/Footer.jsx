
export default function Footer(){
  
  return (
      <footer className="bg-slate-800 pt-24 pb-12 ">
      <div className="container">
        <div className="flex flex-wrap ">

          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="text-white text-4xl font-bold mb-5">ATIK AHNAFI SULTHON</h2>
            <h3 className="font-bold mb-2 text-2xl">email</h3>
            <p>sulthongohome@gmail.com</p>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/2">
            <h3 className="font-semibold text-xl text-white mb-5">
              Random Quotes 
            </h3>
            <ul className="text-slate-300">
              <li>
                <p className="inline-block text-base hover:text-primary mb-3">
                "Jangan takut untuk gagal. Gagal bukanlah akhir dari segalanya. Dari kegagalan, kita bisa belajar dan menjadi lebih kuat." ~Elon Musk
                </p>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 mb-12 md:w-auto ">
            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="inline-block text-base hover:text-primary mb-3"
                  >Beranda</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-block text-base hover:text-primary mb-3"
                  >about</a
                >
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="inline-block text-base hover:text-primary mb-3"
                  >Portfolio</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block text-base hover:text-primary mb-3"
                  >contact</a
                >
              </li>
            </ul>
          </div>

        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          {/* <div className="flex items-center gap-2 justify-center mb-5">
            <a
              href="/"
              target="_blank"
              className="btn-brand hover:border-red-500 hover:bg-youtube"
              ><img src="img/youtube.svg" alt="youtube" width="20"
            /></a>
            <a
              href="/"
              target="_blank"
              className="btn-brand hover:border-pink-400 hover:bg-instagram"
              ><img src="img/instagram.svg" alt="instagram.svg" width="20"
            /></a>
            <a
              href="/"
              target="_blank"
              className="btn-brand hover:border-sky-500 hover:bg-facebook"
              ><img src="img/facebook.svg" alt="facebook.svg" width="20"
            /></a>
          </div> */}
          <p className="text-center font-medium text-xs text-slate-500">
          © 2021  <span className="text-white">Atik Ahnafi Sulthon.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}