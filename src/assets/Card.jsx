
function Card({ images, name, style, bio }) {

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-[32rem] sm:h-[36rem] p-2 m-auto bg-white/20 text-white shadow-md rounded-md overflow-hidden flex flex-col justify-between my-4">
        <div
            className="bg-white rounded-lg overflow-hidden border border-neutral-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img
            src={images}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            alt="artist picture"
            />
            <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
                {name}
            </h3>
            <p className="text-neutral-600 mb-4">
                {style}
            </p>
            <p className="text-sm text-neutral-500">
                {bio}
            </p>
            </div>
        </div>
    </div>
  );
}

export default Card;
