import earthquakeImage from '../assets/svg/images/earthquakeiran.png';

const InternetBased = () => {
  return (
    <div className="bg-background sm:pt-5 lg:pt-10 border-l-2 border-t-2 border-secondary">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-6xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-background lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="border-l-1 border-yellow relative px-6 py-32 sm:py-20 lg:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  </div>
                </div>
                <h1 className="text-4xl tracking-tight text-white sm:text-6xl text-center">
				Internet-based Technology for <span className='italic text-secondary'> Disasters </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white text-center">
				Our main mission is to create software that helps curtail the impact from crises such as terrorism, warfare, natural disasters, and disease.
                </p>
				<p className='mt-6 text-lg leading-8 text-white text-center'>
				More information about our first application, targeted toward helping refugees find temporary housing, is coming soon.
				</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-1 lg:w-2/2">
          <img
            className="aspect-[2/1] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={earthquakeImage}
            alt=""
          />
        </div>
      </div>
    </div>
  )
};

export  {InternetBased};