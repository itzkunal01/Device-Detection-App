import React from "react";
// import { isIOS } from "react-device-detect";

const DeviceDetectionApp = () => {
  // ========== METHOD 1 ==========
  //   React.useEffect(() => {
  //     const detectDeviceType = () => {
  //       const isIOSDevice =
  //         /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  //       if (isIOSDevice) {
  //         console.log(
  //           "%cThis is an iOS device.",
  //           "color: green; font-size: 18px;"
  //         );
  //         // OR
  //         // alert(" this is an iOS device.");
  //       } else {
  //         console.log(
  //           "%cThis is a non-iOS device.",
  //           "color: green; font-size: 18px;"
  //         );
  //         // OR
  //         //   alert("This is a non-iOS device.");
  //       }
  //     };

  //     //   Initial Check On Mount
  //     detectDeviceType();
  //   }, []);

  // ========== METHOD 2 ==========
  //   React.useEffect(() => {
  //     const detectDeviceType = () => {
  //       if (isIOS) {
  //         console.log(
  //           "%cThis is an iOS device.....",
  //           "color: green; font-size: 18px;"
  //         );
  //         // OR
  //         // alert("This is an iOS device.");
  //       } else {
  //         console.log(
  //           "%cThis is a non-iOS device.....",
  //           "color: green; font-size: 18px;"
  //         );
  //         // OR
  //         // alert("This is a non-iOS device.");
  //       }
  //     };

  //     // Initial Check On Mount
  //     detectDeviceType();
  //   }, []);

  return (
    <>
      <div className="container my-5 bg-light">
        <header className="text-center mb-4">
          <h1 className="display-4">Device Type Detection</h1>
        </header>
        <div className="text-center">
          <p className="lead">Open the console to see the device type log.</p>
        </div>
      </div>
    </>
  );
};

export default DeviceDetectionApp;
