// import { BootstrapSvg, CssSvg, HtmlSvg } from "../assets/svg/Svg"
import html  from '../assets/icons/html.svg'
import css  from '../assets/icons/css.svg'
import bs  from '../assets/icons/bootstrap.svg'
import tw  from '../assets/icons/tailwind.svg'
import react  from '../assets/icons/logo.svg'
import Jq from '../assets/svg/jquery-1.svg'
import Js from '../assets/icons/js.svg'
import php from '../assets/icons/PHP-logo.svg.png'
import { SvgWaves} from '../assets/svg/Svg'


const Skills = ()=>{
    return (
        <section id="skills" className="bg-pages pt-36 ">
            <div className="container">
                <div className="w-full px-4">
                     <h4 className="font-semibold text-center text-3xl text-white mb-2 md:text-5xl">Skills</h4>
                    <div className=" lg:w-full mx-auto mb-24 flex justify-center">
                        <div className="flex justify-center mt-12 flex-wrap w-full md:max-w-3xl lg:max-w-4xl gap-3 ">
                        
                            <div className="skill-logo">
                                <img src={html} alt="html" />
                            </div>
                            <div className="skill-logo">
                                <img src={css} alt="html" />
                            </div>
                            <div className="skill-logo">
                                <img src={bs} alt="html" />
                            </div>
                            <div className="skill-logo">
                                <img src={tw} alt="html" />
                            </div>
                            <div className="skill-logo">
                                <img src={Js} alt="html" />
                            </div>
                            <div className="skill-logo">
                                <img src={Jq} alt="html" />
                            </div>
                            <div className="skill-logo">
                                <img src={react} alt="html" />
                            </div>
                            <div className="skill-logo">
                                <img src={php} alt="html" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SvgWaves />
        </section>
    )
}
export default Skills