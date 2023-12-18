import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
	return (
		<>
			<div className="flex flex-row w-screen bg-neutral-200 h-screen overflow-hidden">
				<Sidebar />
				<div className="flex-1">
					<Header />
					<div>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
