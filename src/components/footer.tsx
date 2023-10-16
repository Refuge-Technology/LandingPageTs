import { Bars3Icon } from "@heroicons/react/24/outline";
import { DiscordIcon } from "../assets/svg/discord";
import { GithubIcon } from "../assets/svg/github";
import { XIcon } from "../assets/svg/x";
import { useState } from "react";

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

const Footer = () => {
	const [, setMobileMenuOpen] = useState(false);
	
	return (
		<footer className="bg-background border-t-2 border-secondary">
			<nav
				className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5 text-white">
						<span className="sr-only ">Refuge Technology</span>
						<h1 className="text-1xl text-gray-500"> {"<🤍/>"}</h1>
						<h3 className=" text-1xl pl-14 font-light text-gray-500 -mt-4 -ml-2 tracking-wider">
							Refuge Technology &copy; 2023 
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
		</footer>
	);
};

export { Footer };
