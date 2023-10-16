import { socials } from "../assets/data/links";

const Footer = () => {
	return (
		<footer className="bg-background">
			<div className="max-w-full px-6 py-8 mx-auto md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{socials.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="w-6 h-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-xs leading-5 text-center text-gray-500">
						&copy; 2023 Refuge Technology, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
