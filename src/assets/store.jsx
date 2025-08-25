import merch1 from "./images/products/product1.webp";
import merch2 from "./images/products/merch2.jpg";
import merch3 from "./images/products/maerch3.jpg";

function Store() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8 py-5 bg-gray-700" id="el-cbouy5ad">
        <div
          className="bg-neutral-700 rounded-lg shadow-lg overflow-hidden group"
          id="el-1d5bt0du"
        >
          <img
            src={merch1}
            alt="Studio merchandise display"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300 active-edit-image"
            loading="lay"
          />
          <div className="p-6" id="el-edjfrn5g">
            <h3
              className="text-xl font-bold text-red-600 mb-2"
              id="el-5kh3xqry"
            >
              Aftercare Kit
            </h3>
            <p className="text-white mb-4" id="el-rvm245ai">
              Complete healing essentials for your new tattoo
            </p>
            <div className="flex justify-between items-center" id="el-c390cwqy">
              <span
                className="text-2xl font-bold text-red-600"
                id="el-m96gbevn"
              >
                $25
              </span>
              <button
                className="bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors cursor-pointer duration-200"
                id="el-7ax0woi5"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div
          className="bg-neutral-700 rounded-lg shadow-lg overflow-hidden group"
          id="el-k9u19mt1"
        >
          <img
            src={merch2}
            alt="Merchandise collection"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="p-6" id="el-ky7iaowc">
            <h3
              className="text-xl font-bold text-red-600 mb-2"
              id="el-ziicp50y"
            >
              Studio T-Shirt
            </h3>
            <p className="text-white mb-4" id="el-hx8ol2mg">
              Premium cotton with exclusive ink design
            </p>
            <div className="flex justify-between items-center" id="el-nr7ubvht">
              <span
                className="text-2xl font-bold text-red-600"
                id="el-6whblbd5"
              >
                $35
              </span>
              <button className="bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-800 cursor-pointer transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div
          className="bg-neutral-700 rounded-lg shadow-lg overflow-hidden group"
          id="el-p4hqwwp3"
        >
          <img
            src={merch3}
            alt="Store with merchandise display"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="p-6" id="el-pudc8xp7">
            <h3
              className="text-xl font-bold text-red-600 mb-2"
              id="el-3g20avhx"
            >
              Hat Collection
            </h3>
            <p className="text-white mb-4" id="el-cm9asmnn">
              Limited edition artist collab hoodies
            </p>
            <div className="flex justify-between items-center" id="el-h4zaav8n">
              <span
                className="text-2xl font-bold text-red-600"
                id="el-hztp7vob"
              >
                $35
              </span>
              <button
                className="bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-800 cursor-pointer transition-colors duration-200"
                id="el-7ax0woi5-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
