import React, { useEffect } from "react";

const DeviceDetectionApp = () => {
  useEffect(() => {
    const detectDeviceType = () => {
      const isIOSDevice =
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      if (isIOSDevice) {
        console.log("This is an iOS device.");
        // OR
        alert(" this is am iOS device.");
      } else {
        console.log("This is  a non-iOS device (persumed Windows or other).");
        // OR
        alert("This is a non-iOS device.");
      }
    };

    //   Initial Check On Mount
    detectDeviceType();
  }, []);

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
