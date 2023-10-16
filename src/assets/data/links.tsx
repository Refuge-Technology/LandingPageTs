import React from "react";
import { DiscordIcon } from "../svg/discord";
import { GithubIcon } from "../svg/github";
import { XIcon } from "../svg/x";

export const socials = [
	{
		name: "Discord",
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<DiscordIcon {...props} />
		),
		href: "https://discord.gg/zggWamh8",
	},
	{
		name: "Github",
		icon: (props: React.SVGProps<SVGSVGElement>) => (
			<GithubIcon {...props} />
		),
		href: "https://github.com/Refuge-Technology",
	},
	{
		name: "X",
		icon: (props: React.SVGProps<SVGSVGElement>) => <XIcon {...props} />,
		href: "https://twitter.com/refuge_tech",
	},
];

export const navigation = [
	{ name: "Contact Us", href: "mailto:refuge_technology@proton.me" },
];
