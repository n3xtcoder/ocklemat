import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";
import { AlbumContextProvider } from "../context/AlbumContext";

test("renders homepage header: ALBUM - Rhm", () => {
  render(
    <AlbumContextProvider>
      <App />
    </AlbumContextProvider>
  );
  //   const linkElement = screen.getByText(/ALBUM/i);
  expect(screen.getByText("ALBUM - Rhm")).toBeTruthy();
});
