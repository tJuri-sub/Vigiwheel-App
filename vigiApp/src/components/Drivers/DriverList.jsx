export const DriverList = () => {
  const driverData = [
    {
      driversName: "John Doe",
      driversProf: "PUV",
    },
    {
      driversName: "John Doe",
      driversProf: "PUV",
    },
  ];

  return (
    <div className="mt-8 p-4 bg-white shadow-3xl h-[39rem] overflow-hidden overflow-y-scroll ">
      <table className="w-full border-separate border-spacing-y-2">
        {driverData.map((driver, index) => (
          <tr key={index} className="bg-[#53ABD0] w-full my-1 ">
            <td className="px-3 w-[50px]">
              <div className="w-[50px] aspect-square bg-white rounded-full">
                <img
                  className="w-full rounded-full"
                  src="/userDefault.png"
                  alt="user default"
                />
              </div>
            </td>
            <td className="p-3">
              <h4 className="text-xl">{driver.driversName}</h4>
              <p className="text-sm opacity-50">{driver.driversProf}</p>
            </td>
            <td>
              <div className="flex justify-end gap-4 p-3">
                <button className=" py-1 w-[10%] rounded bg-[#F2F2FA]">
                  View
                </button>
                <button className=" py-1 w-[10%] rounded bg-[#F2F2FA] ">
                  Edit
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
