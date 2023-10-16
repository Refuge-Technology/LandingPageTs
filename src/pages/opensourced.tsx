const OpenSourced = () => {
	return (
		<div className="relative bg-background">
			<div className="relative overflow-hidden bg-left bg-auto border-t-2 border-r-2 border-secondary isolate pt-14 bg-hero-pattern">
				<div className="max-w-2xl py-8 mx-auto sm:py-32 lg:py-40">
					<div className="flex flex-col gap-4 leading-3 text-center">
						<h1 className="flex flex-col items-center gap-2 text-2xl tracking-tight text-white sm:text-6xl">
							Open Source &
							<span className="pr-3 italic text-white rounded-sm w-min bg-secondary">
								Distributed
							</span>
						</h1>
						<div className="p-2 rounded-md">
							<p className="text-lg leading-8 text-white sm:mt-6">
								We are spread all over the world, and are
								entirely open source.
							</p>
							<p className="mt-6 text-lg leading-8 text-white">
								There are no barriers to who can contribute to
								or use our technology.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { OpenSourced };
