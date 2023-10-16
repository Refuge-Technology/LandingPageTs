import React from "react";
import { cn } from "../../Utils/cn";

type TProps = {
	props?: React.SVGProps<SVGSVGElement>;
	className?: string;
};

const XIcon = ({ className, ...props }: TProps) => {
	return (
		<svg
			className={cn("h-7 w-7 fill-current", className)}
			viewBox="0 0 24 24"
			{...props}
		>
			<path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z" />
		</svg>
	);
};

export { XIcon };
