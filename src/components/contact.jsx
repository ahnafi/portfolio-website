// import { useState } from "react";

function Contact() {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [message, setMessage] = useState();

  // const mailto = `mailto:sulthongohome@gmail.com?subject=message&body=${message}`

  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl text-center mx-auto mb-16">
            <h2 className="font-bold text-3xl text-dark mb-4">Contact Me</h2>
          </div>
        </div>
        <form action="" >
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base font-bold text-dark">
                Nama
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-200 text-dark rounded-md focus:outline-none p-3 focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base font-bold text-dark">
                email
              </label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-200 text-dark rounded-md focus:outline-none p-3 focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-dark"
              >
                pesan
              </label>
              <textarea
                type="text"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-200 text-dark rounded-md focus:outline-none p-3 h-32 focus:ring-primary focus:ring-1 focus:border-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              {/* <a href={`mailto:${email}?subject=${name}&body=${message}`}> */}
                <button
                  className="font-semibold bg-pages px-8 rounded-xl py-3 text-white hover:shadow-lg hover:opacity-80 transition ease-in-out duration-300 w-full"
                  type="submit"
                >
                  Kirim
                </button>
              {/* <a href={mailto}>
                aaaaaaaaaaaaaaaaaa
              </a> */}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
