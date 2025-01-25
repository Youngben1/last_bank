"use client";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
	const pathname = usePathname();

	return (
		<section className="max-w-[264px] w-full ">
			<Sheet>
				<SheetTrigger>
					<Image
						src="/icons/hamburger.svg"
						alt="menu"
						width={30}
						height={30}
						className="cursor-pointer"
					/>
				</SheetTrigger>
				<SheetContent side="left" className="bg-white border-none">
					<Link
						className="flex items-center gap-1 px-4 cursor-pointer"
						href="/"
					>
						<Image src="/icons/logo.svg" alt="logo" height={35} width={35} />
						<h1 className="font-bold text-26 font-ibm-plex-serif text-black-1">
							LastBank
						</h1>
					</Link>

					<div className="mobilenav-sheet">
						<SheetClose asChild>
							<nav className="h-full flex flex-col gap-6 pt-16 text-white">
								{sidebarLinks.map((item) => {
									const isActive =
										pathname === item.route ||
										pathname.startsWith(`${item.route}/`);
									return (
										<SheetClose asChild key={item.route}>
											<Link
												key={item.label}
												href={item.route}
												className={cn("mobilenav-sheet_close w-full", {
													"bg-bank-gradient": isActive,
												})}
											>
												
													<Image
														src={item.imgURL}
														alt={item.label}
														width={20}
                                                        height={20}
														className={cn({
															"brightness-[3] invert-0": isActive,
														})}
													/>


												<p
													className={cn("font-semibold text-16 text-black-2", {
														"text-white": isActive,
													})}
												>
													{item.label}
												</p>
											</Link>
										</SheetClose>
									);
								})}
                                USER
							</nav>
						</SheetClose>
                        <Footer user={user} type="mobile"/>
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
