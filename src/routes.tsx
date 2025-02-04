import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/form" element={<UserForm />} />
      <Route path="/editor" element={<RichTextEditor />} />
    </Routes>
  </Router>
);

export default AppRoutes;
