/* eslint-disable react/prop-types */
// import React from 'react'
import { FaSchool } from "react-icons/fa6";
import {
	DASHBOARD_BOTTOM_SIDEBAR_LINKS,
	DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/Navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

export default function Sidebar() {
	return (
		<div className="flex flex-col w-60 bg-green-700 p-3 text-white">
			<div className="flex items-center gap-2 px-3 py-3">
				<FaSchool fontSize={24} className="text-blue-300" />
				<span className="text-lg text-blue-300 font-semibold">
					Froden System
				</span>
			</div>
			<div className="flex-1 py-8 flex flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-500">
				{DASHBOARD_BOTTOM_SIDEBAR_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}
				<div className="flex items-center gap-2 text-red-500 cursor-pointer font-extrabold px-3 py-2 rounded-3xl text-base hover:bg-red-300">
					<span className="text-xl"><HiOutlineLogout fontSize={22} /></span>
					Logout
				</div>
			</div>
		</div>
	);
}

function SidebarLink({ item }) {
	const { pathname } = useLocation();
	return (
		<Link
			to={item.path}
			className={classNames(
				pathname === item.path
					? "text-white bg-orange-600"
					: "text-neutral-400",
				"flex items-center gap-2 font-bold px-3 py-2 rounded-3xl text-base hover:bg-orange-600"
			)}
		>
			<span className="text-xl">{item.icon}</span>
			{item.label}
		</Link>
	);
}
