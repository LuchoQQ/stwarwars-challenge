import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import InfoPage from "./components/pages/InfoPage";
import CategoryView from "./components/sections/CategoryView";
import NotFound from "./components/pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/info" element={<InfoPage />}>
                        <Route
                            index
                            element={<Navigate to="/info/people" replace />}
                        />
                        <Route
                            path="people"
                            element={<CategoryView category="people" />}
                        />
                        <Route
                            path="people/:id"
                            element={<CategoryView category="people" />}
                        />
                        <Route
                            path="planets"
                            element={<CategoryView category="planets" />}
                        />
                        <Route
                            path="planets/:id"
                            element={<CategoryView category="planets" />}
                        />
                        <Route
                            path="starships"
                            element={<CategoryView category="starships" />}
                        />
                        <Route
                            path="starships/:id"
                            element={<CategoryView category="starships" />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}
