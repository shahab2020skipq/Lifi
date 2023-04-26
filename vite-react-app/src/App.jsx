import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { WidgetPage } from "./pages/widgetPage";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/widget" element={<WidgetPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
