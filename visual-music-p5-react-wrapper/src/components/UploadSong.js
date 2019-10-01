import React from "react";
import { ReactComponent as UploadIcon } from "./SVG-group-icons/upload-icon.svg";
import { ReactComponent as UploadNewSong } from "./SVG-group-icons/Upload-New-Song.svg";
import { ReactComponent as FileFormatSupportedMp3 } from "./SVG-group-icons/file-format-supported-mp3.svg";
// import { ReactComponent as UploadFunctionality } from "./SVG-group-icons/upload-functionality.svg";
class UploadSong extends React.Component {
  state = {};
  boxStyle = {
    position: "relative",
    width: "872px",
    height: "629px",
    background: "#050516"
  };
  uploadFunctionalityStyle = {
    position: "absolute",
    width: "650px",
    height: "300px",
    left: "111px",
    top: "165px",
    fontWeight: "900",
    border: "dashed 1.1px #FFFFFF",
    borderRadius: "5px",

    opacity: "0.5"
  };
  iconStyle = {
    position: "absolute",
    left: "46%",
    right: "46%",
    top: "29.33%",
    bottom: "52.33%",

    fontFamily: "FontAwesome",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "48px",
    lineHeight: "55px",

    color: "#FFFFFF",

    opacity: "0.5"
  };
  uploadText = {
    position: "absolute",
    left: "33.38%",
    right: "33.38%",
    top: "51%",
    bottom: "35%",

    fontFamily: "Biryani",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "42px",

    color: "#FFFFFF",

    opacity: "0.5"
  };
  fileFormatStyle = {
    position: "absolute",
    left: "31.54%",
    right: "31.54%",
    top: "63.67%",
    bottom: "25.67%",

    fontFamily: "Biryani",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "32px",
    /* identical to box height */

    color: "#FFFFFF",

    opacity: "0.5"
  };

  render() {
    return (
      <div style={this.boxStyle}>
        {/* <UploadFunctionality /> */}
        <div style={this.uploadFunctionalityStyle}>
          <div style={this.iconStyle}>
            <UploadIcon />
          </div>
          <div style={this.uploadText}>
            <UploadNewSong />
          </div>
          <div style={this.fileFormatStyle}>
            <FileFormatSupportedMp3 />
          </div>
        </div>
      </div>
    );
  }
}

export default UploadSong;
