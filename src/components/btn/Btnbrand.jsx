export default function Btnbrand(props){
    return (
        <a href={props.url} target="_blank" rel="noreferrer" className="">
            <img src={props.img} alt={props.alt} className="w-10 lg:w-12 mr-2  hover:scale-110 transition ease-in-out duration-200 hover:opacity-80" />
        </a>
    )
}