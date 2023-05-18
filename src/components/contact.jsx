function Contact(){
    return (
      <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl text-center mx-auto mb-16">
            {/* <h4 className="font-semibold text-lg text-slate-700 mb-2">contact</h4> */}
            <h2 className="font-bold text-3xl text-dark mb-4">Contact Me</h2>
            {/* <p className="font-medium text-md text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sed nesciunt, eligendi nihil libero porro.
            </p> */}
          </div>
        </div>
        <form action="">
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base font-bold text-dark"
                >Nama</label
              >
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark rounded-md focus:outline-none p-3 focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base font-bold text-dark"
                >email</label
              >
              <input
                type="text"
                id="email"
                className="w-full bg-slate-200 text-dark rounded-md focus:outline-none p-3 focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="message" className="text-base font-bold text-dark"
                >pesan</label
              >
              <textarea
                type="text"
                id="message"
                className="w-full bg-slate-200 text-dark rounded-md focus:outline-none p-3 h-32 focus:ring-primary focus:ring-1 focus:border-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button
                className="font-semibold bg-pages px-8 rounded-xl py-3 text-white hover:shadow-lg hover:opacity-80 transition ease-in-out duration-300 w-full"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
    )
}
export default Contact