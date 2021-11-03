import { render, screen } from "@testing-library/react";
import App from "../App";
import { AlbumContextProvider } from "../context/AlbumContext";
import { BrowserRouter as Router } from "react-router-dom";

test("renders homepage header: ALBUM - Rhm", () => {
  render(
    <Router>
      <AlbumContextProvider>
        <App />
      </AlbumContextProvider>
    </Router>
  );
  expect(screen.getByText("ALBUM - Rhm")).toBeTruthy();
});
