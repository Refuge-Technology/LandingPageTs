const HumanitarianOrgs = () => {
  return (
    <div className="bg-background sm:pt-5 lg:pt-10 border-l-2 border-t-2 border-secondary bg-hero-pattern2 bg-contain bg-no-repeat bg-right">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-6xl">
            <div className="border-l-1 border-yellow relative px-6 py-32 sm:py-20 lg:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto lg:mx-auto">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  </div>
                </div>
                <h1 className="text-4xl tracking-tight text-white sm:text-6xl text-center">
				Working with <span className='italic text-secondary w-min px-1'> Humanitarian Organizations </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white text-center">
				Refuge Technology is aiming to work pro bono with reputable and established humanitarian organizations
				on the ground to help us distribute our software to those who need it most.
				</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export  {HumanitarianOrgs};