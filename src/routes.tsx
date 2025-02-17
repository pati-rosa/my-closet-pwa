import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Register } from "./features/Register";
import { UploadPhotos } from "./features/UploadPhotos";
import { CreateLooks } from "./features/CreateLooks";
import { ConfigAccount } from "./features/ConfigAccount";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/upload-photos" element={<UploadPhotos />} />
        <Route path="/create-looks" element={<CreateLooks />} />
        <Route path="/config-account" element={<ConfigAccount />} />
      </Routes>
    </Router>
  );
};
