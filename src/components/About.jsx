
import { Svgup } from '../assets/svg/Svg'
import foto from '../assets/img/me.jpg'

export default function About(){
  return (
    <>
    <section id="about" className="pt-28  bg-slate-100">
      <div className="container " >
            <h4 className="font-bold uppercase mb-20 text-dark text-3xl lg:text-5xl text-center "
            >
              About Me 
            </h4>
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 flex justify-center items-center">
            <div className='overflow-hidden w-[300px] items-center flex h-[300px] rounded-full group transition-all'
            
            >
              <img src={foto} className='w-full group-hover:scale-110 transition  group-hover:duration-300 ease-in-out'alt="foto"  />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h2
              className="font-semibold text-dark mb-5 text-3xl max-w-md lg:text-4xl"
            >
              ...
            </h2>
            <p className="text-dark text-base font-normal max-w-xl md:text-lg lg:text-xl">
              Hai semuanya ,nama saya Atik Ahnafi Sulthon. Saya seorang Junior Front End Developer. Hobi saya bermain video game dan Coding.
              <br /><br />
              Saya tinggal di Banyumas ,Jawa Tengah ,Indonesia.
              umur saya 18 tahun. Saya adalah mahasiswa teknik Informatika Universitas Jenderal Soedirman Purwokerto   
            </p>

            <h3
              className="font-bold text-dark mt-5 mb-4 text-2xl md:text-4xl lg:pt-10"
            >
              Pendidikan
            </h3>
            {/* pb 24 di hilangkan ketika ada tambahan */}
            <div className='ml-4 pb-24'>
            <h4 className='font-semibold text-dark text-xl mb-2'>Sekolah Menengah Kejuruan</h4>
            <p className="text-dark text-base font-normal max-w-xl md:text-lg lg:text-xl">
                SMK MAARIF NU 1 Ajibarang <br />
                Teknik Komputer Dan Jaringan <br />
                2020 - 2023
            </p>
            </div>
          </div>
        </div>
      </div>
      <Svgup/>
    </section>
    </>
    )
}