import foto1 from '../assets/portfolio/foto1.png'
// import { SvgWaves } from '../assets/svg/Svg'

function PortfolioCoba(){
    return(
        <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
          {/* <SvgWaves /> */}
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl text-center mx-auto mb-16">
            <h4 className="font-semibold text-lg text-dark mb-2">Portfolio</h4>
            <h2 className="font-bold text-3xl text-dark mb-4">
              Project yang pernah saya buat
            </h2>
            <p className="font-medium text-md text-dark">
              ini bukanlah projek terbaik di dunia ,jauh dari kata sempurna .Saya hanya manusia biasa yang mencoba belajar.
            </p>
          </div>
        </div>
        <div
          className="w-full flex flex-wrap justify-center px-4 xl:w-10/12 xl:mx-auto"
        >
          {/*  */}
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="overflow-hidden shadow-md rounded-md">
              <img src={foto1} alt="portfolio" width="w-full" />
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3 mt-5">Website Portfolio</h3>
            <p className="text-base text-dark font-light">
              website portfolio lama saya, dibuat dengan html css boostsrap 
            </p>
            <a href="https://ahnafi.my.id" target='_blank' rel='noreferrer' className='font-serif font-normal text-blue-500'> Kunjungi </a>
          </div>
          {/*  */}
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden shadow-md rounded-md">
              <img src={foto1} alt="portfolio" width="w-full" />
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3 mt-5">Portfolio</h3>
            <p className="text-base text-dark font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque, tempora quam optio unde dignissimos.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}
export default PortfolioCoba