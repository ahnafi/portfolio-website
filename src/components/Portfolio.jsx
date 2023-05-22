import CardPort from "./card/CardPort";

function Portfolio() {
  const data = [
    {
      id: 1,
      img: "./portfolio/portfolio.jpg",
      title: "My Portfolio",
      parag: "website portfolio sekarang",
      url: "#",
    },
    {
      id: 2,
      img: "./portfolio/foto1.jpg",
      title: "old Portfolio",
      parag: "website portfolio lama saya, dibuat dengan html css boostsrap",
      url: "https://ahnafi.github.io/newfolio",
    },
    {
      id: 3,
      img: "./portfolio/anfa.jpg",
      title: "Anfa Portfolio latihan",
      parag:
        "website portfolio latihan dari tim Anfa dibuat dengan html css boostsrap",
      url: "https://ahnafi.github.io/anfaportfolio/",
    },
    {
      id: 4,
      img: "./portfolio/filmbiasa.jpg",
      title: "Pencari Detail film",
      parag:
        "website pencari film dengan API dari omdb API ,Jquery ,html ,boostsrap",
      url: "https://ahnafi.github.io/cariFilmPublicAPI",
    },
    {
      id: 5,
      img: "./portfolio/katabijak.png",
      title: "Website Kata Kata Bijak",
      parag:
        "Cari Kata bijak di website saya ini, terdapat fakta ,dan joke bapak bapak",
      url: "https://ahnafi.github.io/kumpulankatakatabijak",
    },
    {
      id: 6,
      img: "./portfolio/doadoa.png",
      title: "Website Doa Doa sehari hari",
      parag: "Kumpulan Doa sehari hari",
      url: "https://ahnafi.github.io/doaharian",
    },
    {
      id: 7,
      img: "./portfolio/mvreact.jpg",
      title: "cari info film",
      parag: "website dibuat dengan reactjs untuk latihan",
      url: "https://ahnafi.github.io/mvreactapp/",
    },
  ];
  return (
    <section id="portfolio" className="pb-36 pt-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl text-center mx-auto mb-16">
            <h4 className="font-semibold text-xl lg:text-3xl text-dark mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-3xl text-dark mb-4">
              Project yang pernah saya buat
            </h2>
            <p className="font-medium font-serif text-md text-dark">
              ini bukanlah projek terbaik di dunia ,jauh dari kata sempurna
              .Saya hanya manusia biasa yang mencoba belajar.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 flex-wrap">
          {data.map((i) => {
            return (
              <CardPort key={i.id}>
                <CardPort.Head img={i.img}></CardPort.Head>
                <CardPort.Body title={i.title}>{i.parag}</CardPort.Body>
                <CardPort.Footer url={i.url}></CardPort.Footer>
              </CardPort>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
