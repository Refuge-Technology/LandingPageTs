import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { DiscordIcon } from "../assets/svg/discord";
import { GithubIcon } from "../assets/svg/github";
import { XIcon } from "../assets/svg/x";

const navigation = [
	{
		name: "Support Us",
		href: "https://www.buymeacoffee.com/refugetechnology",
	},
	{ name: "Contact Us", href: "mailto:refuge_technology@proton.me" },
];

const socials = [
	{
		icon: <DiscordIcon className="fill-inherit" />,
		href: "https://discord.gg/zggWamh8",
	},
	{
		icon: <GithubIcon className="fill-inherit" />,
		href: "https://github.com/Refuge-Technology",
	},
	{
		icon: <XIcon className="fill-inherit" />,
		href: "https://twitter.com/refuge_tech",
	},
];

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-background">
			<nav
				className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5 text-white">
						<span className="sr-only ">Refuge Technology</span>
						<h1 className="text-3xl"> {"<🤍/>"}</h1>
						<h3 className=" text-3xl pl-20 font-light text-secondary -mt-4 -ml-2 tracking-wider">
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
						<Bars3Icon className="h-6 w-6 " aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="leading-6 text-links hover:text-primary transition-colors duration-200"
						>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 ">
					{socials.map((item) => (
						<a
							href={item.href}
							className="fill-links hover:fill-primary transition duration-200"
						>
							{item.icon}
						</a>
					))}
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
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
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/25">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-gray-800"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 w-full justify-around rounded-lg px-3 py-2.5 text-base flex font-semibold leading-7 text-white fill-white"
								>
									{socials.map((item) => (
										<a
											href={item.href}
											className=" w-min p-4 rounded-lg flex hover:bg-gray-800"
										>
											{item.icon}
										</a>
									))}
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
