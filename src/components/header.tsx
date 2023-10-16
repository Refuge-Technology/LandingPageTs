import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { socials } from "../assets/data/links";
import { navigation } from "../assets/data/links";

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-background">
			<nav
				className="flex items-center justify-between max-w-full p-6 mx-auto lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5 text-white">
						<span className="sr-only ">Refuge Technology</span>
						<h1 className="text-3xl"> {"<🤍/>"}</h1>
						<h3 className="pl-20 -mt-4 -ml-2 text-3xl font-light tracking-wider text-secondary">
							Refuge Technology
						</h3>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-links"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="w-6 h-6 " aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => {
						return (
							<a
								key={item.name}
								href={item.href}
								className="leading-6 transition-colors duration-200 text-links hover:text-primary"
							>
								{item.name}
							</a>
						);
					})}
				</div>
				<div className="hidden gap-4 lg:flex text-links lg:flex-1 lg:justify-end ">
					{socials.map((item) => {
						return (
							<a
								key={item.name}
								href={item.href}
								className="transition duration-200 hover:text-primary"
							>
								<item.icon />
							</a>
						);
					})}
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-background sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Refuge Technology</span>
							<h1 className="text-2xl text-white"> {"<🤍/>"}</h1>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-400"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="w-6 h-6" aria-hidden="true" />
						</button>
					</div>
					<div className="flow-root mt-6">
						<div className="-my-6 divide-y divide-gray-500/25">
							<div className="py-6 space-y-2">
								{navigation.map((item) => {
									return (
										<a
											key={item.name}
											href={item.href}
											className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg hover:bg-gray-800"
										>
											{item.name}
										</a>
									);
								})}
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 w-full justify-around rounded-lg px-3 py-2.5 text-base flex font-semibold leading-7 text-white fill-white"
								>
									{socials.map((item) => {
										return (
											<a
												key={item.name}
												href={item.href}
												className="flex p-4 rounded-lg w-min hover:bg-gray-800"
											>
												<item.icon />
											</a>
										);
									})}
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export { Header };
