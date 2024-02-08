import React from "react";
// import { isIOS } from "react-device-detect"; // METHOD 2

const DeviceDetectionApp = () => {
  // ========== METHOD 1 ==========
  // React.useEffect(() => {
  //   const detectDeviceType = () => {
  //     const isIOSDevice =
  //       /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  //     if (isIOSDevice) {
  //       console.log(
  //         "%cThis is an iOS device, method 1",
  //         "color: green; font-size: 18px;"
  //       );
  //       // OR
  //       // alert(" this is an iOS device, method 1");
  //     } else {
  //       console.log(
  //         "%cThis is a non-iOS device, method 1",
  //         "color: green; font-size: 18px;"
  //       );
  //       // OR
  //       //   alert("This is a non-iOS device, method 1");
  //     }
  //   };

  //   //   Initial Check On Mount
  //   detectDeviceType();
  // }, []);

  // ========== METHOD 2 ==========
  // React.useEffect(() => {
  //   const detectDeviceType = () => {
  //     if (isIOS) {
  //       console.log(
  //         "%cThis is an iOS device, method 2",
  //         "color: green; font-size: 18px;"
  //       );
  //       // OR
  //       // alert("This is an iOS device, method 2");
  //     } else {
  //       console.log(
  //         "%cThis is a non-iOS device, method 2",
  //         "color: green; font-size: 18px;"
  //       );
  //       // OR
  //       // alert("This is a non-iOS device, method 2");
  //     }
  //   };

  //   // Initial Check On Mount
  //   detectDeviceType();
  // }, []);

  // ========== METHOD 3 ==========
  React.useEffect(() => {
    const detectDeviceType = () => {
      const platform = navigator.platform.toLowerCase();

      if (
        platform.includes("iphone") ||
        platform.includes("ipad") ||
        platform.includes("ipod")
      ) {
        console.log(
          "%cThis is an iOS device, method 3",
          "color: green; font-size: 18px;"
        );
        // OR
        // alert("This is an iOS device, method 3");
      } else {
        console.log(
          "%cThis is a non-iOS device, method 3",
          "color: green; font-size: 18px;"
        );
        // OR
        // alert("This is a non-iOS device, method 3");
      }
    };

    // Initial Check On Mount
    detectDeviceType();
  }, []);

  // ========== METHOD 4 ==========
  // React.useEffect(() => {
  //   const detectDeviceType = () => {
  //     const isTouchDevice =
  //       "ontouchstart" in window || navigator.maxTouchPoints > 0;

  //     if (isTouchDevice) {
  //       console.log(
  //         "%cThis is a touch device, method 4",
  //         "color: green; font-size: 18px;"
  //       );
  //       // OR
  //       // alert("This is a touch device, method 4");
  //     } else {
  //       console.log(
  //         "%cThis is a non-touch device, method 4",
  //         "color: green; font-size: 18px;"
  //       );
  //       // OR
  //       // alert("This is a non-touch device, method 4");
  //     }
  //   };

  //   // Initial Check On Mount
  //   detectDeviceType();
  // }, []);

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
