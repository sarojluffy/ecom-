import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from ".";

const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routess;
