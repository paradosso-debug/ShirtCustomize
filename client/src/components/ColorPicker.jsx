import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#62374E",
          "#007880",
          "#3E432E",
          "#85CFCB",
          "#232931",
          "#393232",
          "#F94892",
          "#A7727D",
          "#820000",
          "#ECB390",
          "#C2DED1",
          "#141E27",
          "#FF6701",
          "#F6F5F5",
          "#E7B10A",
          "#3C2317",
          "#4C4B16",
          "#2FA4FF",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
