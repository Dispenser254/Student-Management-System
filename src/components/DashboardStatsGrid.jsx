/* eslint-disable react/prop-types */
// import React from 'react'

import { HiOutlineUser } from "react-icons/hi";

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4 w-full ">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<HiOutlineUser className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">
						Total Students
					</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">
							1050
						</strong>
						<span className="text-sm text-green-500 pl-2">+35</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
					<HiOutlineUser className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">
						Total Courses
					</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">
							40
						</strong>
						<span className="text-sm text-pink-500 pl-2">+100</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
					<HiOutlineUser className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">
						Total Workers
					</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">
							105
						</strong>
						<span className="text-sm text-purple-500 pl-2">+15</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-purple-500">
					<HiOutlineUser className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">
						Total Teachers
					</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">
							60
						</strong>
						<span className="text-sm text-orange-500 pl-2">+35</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	);
}

function BoxWrapper({children}) {
    return (
			<div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-1 items-center">{children}</div>
		);
}