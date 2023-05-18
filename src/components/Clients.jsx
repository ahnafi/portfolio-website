function Clients(){
    return(
        <section id="clients" className="pt-36 pb-32 bg-slate-700">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl text-center mx-auto mb-16">
            <h4
              className="font-semibold text-lg text-primary mb-2 hover:text-white"
            >
              Clients
            </h4>
            <h2 className="font-bold text-3xl text-white mb-4 sm:text-4xl">
              clients yang pernah bekerja sama
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sed nesciunt, eligendi nihil libero porro.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap justify-center items-center">
            <a
              href="https://www.google.com"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="img/Google_2015_logo.svg" alt="google" />
            </a>
            <a
              href="https://www.google.com"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="img/Gojek_logo_2019.svg" alt="google" />
            </a>
            <a
              href="https://www.google.com"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="img/Tokopedia.svg" alt="google" />
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Clients