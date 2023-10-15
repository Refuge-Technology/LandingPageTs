import { HeroBackground } from "../assets/svg/humanitythrucode.svg";

const Home = () => {
	return (
		<div className=" relative bg-background">
			<div className="relative isolate overflow-hidden pt-14">
				<HeroBackground />
				{/* <img
					src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
					alt=""
					className="absolute inset-0 -z-10 h-full w-full object-cover"
				/> */}
				{/* <div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				> */}
				{/* <div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/> */}
				{/* </div> */}
				<div className="mx-auto max-w-2xl py-8 sm:py-48 lg:py-56">
					<div className="flex flex-col text-center gap-4 leading-3">
						<h1 className=" flex flex-col gap-2 items-center text-2xl tracking-tight text-white sm:text-6xl">
							Humanity Through
							<span className="w-min text-white bg-secondary italic px-1">
								Code
							</span>
						</h1>
						<div className="bg-background p-2 rounded-md">
							<p className=" sm:mt-6 text-lg leading-8 text-white">
								Refuge Technology is a group of hackers,
								engineers, and open-source enthusiasts making
								software to help our fellow humans in need.
							</p>
							<p className="mt-6 text-lg leading-8 text-white">
								We are currently building an application to
								allow anyone to offer their homes to displaced
								individuals in
								<span className="italic"> Palestine</span>,
								<span className="italic"> Israel</span>,
								<span className="italic"> Morocco</span>,
								<span className="italic"> Libya</span>, and
								<span className="italic"> Afghanistan</span>.
							</p>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export { Home };
