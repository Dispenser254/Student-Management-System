// import React from 'react'
import { HiAcademicCap, HiOutlineCog, HiOutlineColorSwatch, HiOutlineLibrary, HiOutlineQuestionMarkCircle, HiOutlineViewGrid, HiUserGroup } from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: "dashboard",
		label: "Dashboard",
		path: "/",
		icon: <HiOutlineViewGrid />,
	},
	{
		key: "students",
		label: "Students",
		path: "/students",
		icon: <HiUserGroup />,
	},
	{
		key: "finances",
		label: "Finances",
		path: "/finances",
		icon: <HiOutlineLibrary />,
	},
	{
		key: "faculty",
		label: "Faculty",
		path: "/faculty",
		icon: <HiAcademicCap />,
	},
	{
		key: "courses",
		label: "Courses",
		path: "/courses",
		icon: <HiOutlineColorSwatch />,
	},
];

export const DASHBOARD_BOTTOM_SIDEBAR_LINKS = [
	{
		key: "settings",
		label: "Settings",
		path: "/settings",
		icon: <HiOutlineCog />,
	},
	{
		key: "support",
		label: "Help & Support",
		path: "/support",
		icon: <HiOutlineQuestionMarkCircle />,
	},
];