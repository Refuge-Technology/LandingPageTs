import earthquakeImage from "../assets/images/earthquakeiran.png";

const InternetBased = () => {
	return (
		<div className="border-t-2 border-l-2 bg-background border-secondary">
			<div className="relative">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 lg:w-full lg:max-w-6xl">
						<div className="px-6 py-32 border-l-1 border-yellow sm:py-20 lg:py-40 lg:px-8 lg:pr-0">
							<div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
								<div className="hidden sm:mb-10 sm:flex">
									<div className="relative px-3 py-1 text-sm leading-6 text-white rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
								</div>
								<h1 className="text-4xl tracking-tight text-center text-white sm:text-6xl">
									Internet-based Technology for{" "}
									<span className="italic text-secondary">
										Disasters
									</span>
								</h1>
								<p className="mt-6 text-lg leading-8 text-center text-white">
									Our main mission is to create software that
									helps curtail the impact from crises such as
									terrorism, warfare, natural disasters, and
									disease.
								</p>
								<p className="mt-6 text-lg leading-8 text-center text-white">
									More information about our first
									application, targeted toward helping
									refugees find temporary housing, is coming
									soon.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative bg-gray-50 lg:absolute lg:inset-y-0 lg:right-1 lg:w-2/2">
					<svg
						className="absolute inset-y-0 left-0 hidden h-full transform w-80 -translate-x-1/3 fill-background lg:block"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="0,0 90,0 50,100 0,100" />
					</svg>
					<img
						className="aspect-[2/1] object-cover lg:aspect-auto lg:h-full lg:w-full"
						src={earthquakeImage}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export { InternetBased };
