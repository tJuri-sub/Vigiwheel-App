import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../context/authContext";

export const DriverList = () => {
  const [driverData, setDriverData] = useState([]);
  const availablePlateNumbers = [
    "JKL 4568",
    "ABC 1234",
    "XYZ 7890",
    "QWE 4567",
  ];

  // const { token } = useAuth(); // Access token from AuthContext

  // useEffect(() => {
  //   const fetchDrivers = async () => {
  //     try {
  //       const response = await axios.get("/drivers", {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Use the token from context
  //         },
  //       });
  //       setDriverData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching driver data:", error);
  //     }
  //   };

  //   if (token) {
  //     fetchDrivers(); // Only fetch if token is available
  //   }
  // }, [token]);

  return (
    <div className="flex justify-center w-full mt-4">
      <table className="table-auto w-full rounded-t-md overflow-hidden shadow-md">
        <thead className="bg-[#0465B8] text-white">
          <tr className="text-left">
            <th className="p-3">Driver's Name</th>
            <th className="p-3">Sex</th>
            <th className="p-3">Email</th>
            <th className="p-3">Marital Status</th>
            <th className="p-3">Birth Date</th>
            <th className="p-3">License Number</th>
            <th className="p-3">Plate Number</th>
            <th className="p-3">Settings</th>
          </tr>
        </thead>
        <tbody>
          {driverData.map((driver, index) => (
            <tr key={index}>
              <td className="p-3 border-b-[1px]">
                {driver.firstname} {driver.lastname}
              </td>{" "}
              {/* Assuming driver's full name */}
              <td className="p-3 border-b-[1px]">{driver.sex}</td>
              <td className="p-3 border-b-[1px]">{driver.email}</td>
              <td className="p-3 border-b-[1px]">{driver.status}</td>{" "}
              {/* Assuming `status` refers to marital status */}
              <td className="p-3 border-b-[1px]">
                {new Date(driver.birthdate).toLocaleDateString()}
              </td>
              <td className="p-3 border-b-[1px]">{driver.licensenumber}</td>{" "}
              {/* Assuming license number field */}
              <td className="p-3 border-b-[1px]">
                <select className="border-[1px] border-black py-1 px-3 rounded">
                  {availablePlateNumbers.map((plate, i) => (
                    <option
                      key={i}
                      value={plate}
                      selected={plate === driver.platenumber} // Assuming plate number field is `platenumber`
                    >
                      {plate}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-3 border-b-[1px] flex gap-3">
                <button className="border-[1px] border-black py-1 px-3 rounded">
                  Edit
                </button>
                <button className="border-[1px] border-black py-1 px-3 rounded">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
