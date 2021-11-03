import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Album from "../components/album/Album";
import { AlbumContextProvider } from "../context/AlbumContext";

it("Landing component should render without crashing", () => {
  shallow(
    <AlbumContextProvider>
      <Album />
    </AlbumContextProvider>
  );
});

it("landing component snapshot with Enzyme", () => {
  const wrapper = shallow(
    <AlbumContextProvider>
      <Album />
    </AlbumContextProvider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
