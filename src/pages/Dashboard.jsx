// import React from 'react'

import DashboardStatsGrid from "../components/DashboardStatsGrid";
import PieChart from "../components/PieChart";
import TransactionChart from "../components/TransactionChart";

export default function Dashboard() {
  return (
		<div className="flex flex-col px-4 py-2 overscroll-auto">
			<div className="scroll-container overflow-auto h-screen pb-8">
				<DashboardStatsGrid />
				<div className="flex flex-row gap-4 w-full py-2">
					<TransactionChart />
					<PieChart />
				</div>
        
			</div>
		</div>
	);
}
