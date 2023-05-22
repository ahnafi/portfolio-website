const CardPort = (props) => {
  return (
    <div className="w-full max-w-sm px-4 py-2 bg-white  shadow-lg rounded-lg flex flex-col ">
      {props.children}
    </div>
  );
};
export default CardPort;

function Header(props) {
  return (
    <div className="rounded-lg w-full py-4">
      <img src={props.img} alt="product" className="" />
    </div>
  );
}
function Body(props) {
  return (
    <div className="px-2 h-full">
      <a href="">
        <h3 className="text-black text-2xl font-bold my-2 tracking-tight">
          {props.title}
        </h3>
      </a>
      <p className="text-sm text-black">{props.children}</p>
    </div>
  );
}
function Footer(props) {
  return (
    <div className=" px-2 py-4">
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2 bg-blue-500 font-semibold shadow hover:opacity-80 rounded-lg text-white "
      >
        visit
      </a>
    </div>
  );
}
CardPort.Head = Header;
CardPort.Body = Body;
CardPort.Footer = Footer;
