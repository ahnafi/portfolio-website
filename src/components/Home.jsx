import foto from '../assets/img/pert.png'
import Svg from '../assets/svg/Svg'
import fb from '../assets/img/social-media/icons8-facebook-100.png'
import ig from '../assets/img/social-media/icons8-instagram-100.png'
import git from '../assets/img/social-media/icons8-github-100.png'
import Btnbrand from './btn/Btnbrand'


function Home (){
    return (
        <section id="home" className="pt-32 bg-pages">
        <div className="container">
          <div className="flex flex-wrap lg:p-5">
            <div className="w-full self-center px-4 lg:w-1/2"
            
            >
              <h1 className="text-lg font-semibold text-white md:text-2xl lg:text-4xl">
                Hi ,My Name Is
                <span className="font-bold  text-cyan-300 block text-4xl mt-1 md:text-5xl xl:text-8xl">
                 Sulthon
                </span>
              </h1>
              <h2 className="font-medium text-white font-mono text-lg md:text-xl mb-2">
                Junior <span className='text-teal-200'> Front end Developer </span>
              </h2>
              <p className="font-medium font-serif text-white mb-10 leading-relaxed md:text-lg lg:text-2xl">
                cuman orang biasa yang ingin menjadi programer cuaks. 
              </p>
              {/* <a
                href="#contact"
                className="font-semibold bg-secondary shadow-sm  px-8 rounded-full py-3 text-white hover:shadow-lg hover:opacity-80 transition ease-in-out duration-300"
                >Hubungi Saya</a
              > */}

            <div className="flex items-center gap-2">
              
              <Btnbrand 
              img={fb}
              url="https://web.facebook.com/profile.php?id=100018204182301"
              alt="facebook"
              />
              <Btnbrand 
              img={ig}
              url="https://instagram.com/ahnafi.s"
              alt="facebook"
              />
              <Btnbrand 
              img={git}
              url="https://github.com/ahnafi"
              alt="facebook"
              />

            </div>

            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 relative lg:mt-0 lg:right-0">
                <img
                  src={foto}
                  alt="profile"
                  className=" mx-auto max-w-full rounded-full rounded-tr-none border-b-2 border-e border-b-teal-200 border-e-teal-100 "
                  />
                  
              </div>
            </div>
          </div>
        </div>
        <Svg/>
      </section>
    )
}
export default Home