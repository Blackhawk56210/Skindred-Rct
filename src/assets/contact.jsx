import placeholder1 from "./images/misc/misc.jpg";
import placeholder2 from "./images/tatoo-img/Mitch/mitch sleeve.jpg";
import placeholder3 from "./images/tatoo-img/Alex/alex eminem.jpg";

function Contact() {
  return (
    <div>
      <section id="contact" className="py-20 bg-neutral-900">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          id="el-mzy22g6q"
        >
          <div className="text-center mb-16" id="el-amtxeyjn">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              id="el-84ceox8a"
            >
              Contact
            </h2>
            <p
              className="text-xl text-neutral-300 max-w-2xl mx-auto"
              id="el-addl81c9"
            >
              Book your consultation and start your tattoo journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12" id="el-ltrb5dq5">
            <div className="space-y-8" id="el-riniogs7">
              <div className="bg-neutral-800 rounded-lg p-8" id="el-slz8nxt4">
                <h3
                  className="text-2xl font-bold text-white mb-6"
                  id="el-bb6i21j9"
                >
                  Book Appointment
                </h3>
                <form className="space-y-6" id="el-zolh0enf">
                  <div id="el-m5c34jq7">
                    <label
                      className="block text-sm font-medium text-neutral-300 mb-2"
                      id="el-xyepqrh3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:border-red-600"
                      placeholder="Your name"
                      required=""
                      id="el-ddg9zpvh"
                    />
                  </div>
                  <div id="el-23up01t5">
                    <label
                      className="block text-sm font-medium text-neutral-300 mb-2"
                      id="el-hgtutaaq"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:border-red-600"
                      placeholder="your@email.com"
                      required=""
                      id="el-7abfvz75"
                    />
                  </div>
                  <div id="el-etg16khp">
                    <label
                      className="block text-sm font-medium text-neutral-300 mb-2"
                      id="el-femrkc2o"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:border-red-600"
                      placeholder="(555) 123-4567"
                      required=""
                      id="el-z0up80kv"
                    />
                  </div>
                  <div id="el-xbx7geh1">
                    <label
                      className="block text-sm font-medium text-neutral-300 mb-2"
                      id="el-ykfytc3s"
                    >
                      Artist Preference
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:border-red-600"
                      id="el-xk3zisxp"
                    >
                      <option id="el-n7ooakt0">Any Available Artist</option>
                      <option id="el-crnpb505">Alex Rivera</option>
                      <option id="el-ifdbyqco">Sarah Chen</option>
                      <option id="el-xb4v1ugn">Marcus Johnson</option>
                    </select>
                  </div>
                  <div id="el-dmrusfjk">
                    <label
                      className="block text-sm font-medium text-neutral-300 mb-2"
                      id="el-0vemm5la"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-400 focus:outline-none focus:border-red-600"
                      placeholder="Tell us about your tattoo idea..."
                      id="el-2rw8wuaw"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md font-semibold transition-colors duration-200"
                    id="el-jxpqtncz"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6" id="el-otqzmun8">
              <img
                src={placeholder1}
                alt="Tattoo studio interior"
                className="w-full h-80 object-cover rounded-lg shadow-2xl active-edit-image"
                loading="lazy"
              />

              <img
                src={placeholder2}
                alt="Studio workspace with books"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
                loading="lazy"
              />

              <img
                src={placeholder3}
                alt="Tattoo studio interior detail"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
