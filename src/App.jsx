import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CallLogs from "./pages/CallLogs.jsx";
import InitialGreeting from "./pages/InitialGreeting.jsx";
import KnowledgeBase from "./pages/KnowledgeBase.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/call-logs" element={<CallLogs />} />
        <Route path="/initial-greeting" element={<InitialGreeting />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
      </Routes>
    </Router>
  );
}

export default App;