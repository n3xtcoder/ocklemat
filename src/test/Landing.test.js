import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Album from "../components/album/Album";
import { AlbumContextProvider } from "../context/AlbumContext";
import { Switch } from "react-router-dom";

it("Landing component should render without crashing", () => {
  shallow(
    <Switch>
      <AlbumContextProvider>
        <Album />
      </AlbumContextProvider>
    </Switch>
  );
});

it("landing component snapshot with Enzyme", () => {
  const wrapper = shallow(
    <Switch>
      <AlbumContextProvider>
        <Album />
      </AlbumContextProvider>
    </Switch>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
