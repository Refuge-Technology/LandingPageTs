const HumanitarianOrgs = () => {
	return (
		<div className="bg-right bg-no-repeat bg-contain border-t-2 border-l-2 bg-background sm:pt-5 lg:pt-10 border-secondary bg-hero-pattern2">
			<div className="relative">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 lg:w-full lg:max-w-6xl">
						<div className="relative px-6 py-32 border-l-1 border-yellow sm:py-20 lg:py-40 lg:px-8 lg:pr-0">
							<div className="mx-auto lg:mx-auto">
								<div className="hidden sm:mb-10 sm:flex">
									<div className="relative px-3 py-1 text-sm leading-6 text-white rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
								</div>
								<h1 className="text-4xl tracking-tight text-center text-white sm:text-6xl">
									Working with
									<span className="px-1 italic text-secondary">
										Humanitarian Organizations
									</span>
								</h1>
								<p className="mt-6 text-lg leading-8 prose text-center text-white">
									Refuge Technology is aiming to work pro bono
									with reputable and established humanitarian
									organizations on the ground to help us
									distribute our software to those who need it
									most.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { HumanitarianOrgs };
