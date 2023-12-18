import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Finances from './pages/Finances';
import Settings from './pages/Settings';
import Support from "./pages/Support";
import Faculty from "./pages/Faculty";



export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="students" element={<Students />} />
					<Route path="finances" element={<Finances />} />
					<Route path="courses" element={<Courses />} />
					<Route path="faculty" element={<Faculty />} />
					<Route path="settings" element={<Settings />} />
					<Route path="support" element={<Support />} />
					<Route path="profile" element={<Profile />} />
				</Route>
			</Routes>
		</Router>
	);
}
