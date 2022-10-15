import { Routes, Route } from "react-router-dom";
import App from "./App";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="/other" element={<>I'm the other route</>} />
      <Route path="*" element={<>I'm the not found route</>} />
    </Routes>
  );
};
