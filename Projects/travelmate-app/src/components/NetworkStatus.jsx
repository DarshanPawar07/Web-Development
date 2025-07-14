import { useEffect, useState } from "react";

const NetworkStatus = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const updateNetworkInfo = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        setInfo({
          type: connection.effectiveType,
          downlink: connection.downlink,
        });
      }
    };

    updateNetworkInfo();
    navigator.connection?.addEventListener("change", updateNetworkInfo);

    return () => navigator.connection?.removeEventListener("change", updateNetworkInfo);
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded mb-4 w-[500px]  place-self-center">
      <h2 className="font-semibold">Network Status</h2>
      {info ? (
        <p>Type: {info.type} • Speed: {info.downlink} Mbps</p>
      ) : (
        <p>Network info not available</p>
      )}
    </div>
  );
};

export default NetworkStatus;
