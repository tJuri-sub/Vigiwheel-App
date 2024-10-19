import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { toast } from "react-hot-toast";

function DriversForm() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    sex: "Male",
    birthdate: "",
    status: "",
    email: "",
    phonenumber: "",
    licensenumber: "", // fixed field name
  });

  const clearForm = () => {
    setData({
      firstname: "",
      lastname: "",
      sex: "",
      birthdate: "",
      status: "",
      email: "",
      phonenumber: "",
      licensenumber: "", // corrected here as well
    });
  };

  const registerDriver = async (e) => {
    e.preventDefault();

    try {
      const { data: response } = await axios.post("/drivers", data); // directly using state
      if (response.error) {
        toast.error(response.error);
      } else {
        clearForm(); // clear form after successful submission
        toast.success("Driver added.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while adding the driver.");
    }
  };

  return (
    <div className="flex justify-end">
      <Dialog>
        <DialogTrigger>
          <div className="py-1 px-3 mt-4 bg-[#0131A2] rounded text-white text-lg">
            Add Drivers
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a Driver</DialogTitle>
            <DialogDescription>
              Fill up driver's information here.
            </DialogDescription>
          </DialogHeader>
          <form className="flex flex-col gap-3" onSubmit={registerDriver}>
            <div className="flex flex-col gap-2">
              <DialogTitle>Personal Information</DialogTitle>

              <div className="flex gap-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="border border-gray-300 rounded p-1 w-full"
                    placeholder="Ex. John"
                    value={data.firstname}
                    onChange={(e) =>
                      setData({ ...data, firstname: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="border border-gray-300 rounded p-1 w-full"
                    placeholder="Ex. Doe"
                    value={data.lastname}
                    onChange={(e) =>
                      setData({ ...data, lastname: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <label htmlFor="sex">Sex: </label>
                <div className="flex items-center gap-3">
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="sex"
                    id="male"
                    value="Male"
                    checked={data.sex === "Male"}
                    onChange={(e) => setData({ ...data, sex: e.target.value })}
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="sex"
                    id="female"
                    value="Female"
                    checked={data.sex === "Female"}
                    onChange={(e) => setData({ ...data, sex: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="birthdate">Birthdate</label>
                  <input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    className="border border-gray-300 rounded p-1 w-full"
                    value={data.birthdate}
                    onChange={(e) =>
                      setData({ ...data, birthdate: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="status">Marital Status</label>
                  <select
                    className="border border-gray-300 rounded p-1 w-full"
                    value={data.status}
                    onChange={(e) =>
                      setData({ ...data, status: e.target.value })
                    }
                  >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <DialogTitle>Social Information</DialogTitle>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded p-1"
                placeholder="Ex. example@gmail.com"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                className="border border-gray-300 rounded p-1"
                placeholder="Ex. 0960 714 4034"
                value={data.phonenumber}
                onChange={(e) =>
                  setData({ ...data, phonenumber: e.target.value })
                }
              />
              <label htmlFor="licensenumber">License no.</label>
              <input
                type="text"
                name="licensenumber"
                id="licensenumber"
                className="border border-gray-300 rounded p-1"
                placeholder="Ex. NRZ-21-038763"
                value={data.licensenumber}
                onChange={(e) =>
                  setData({ ...data, licensenumber: e.target.value })
                }
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <button
                className="py-1 px-3 rounded bg-[#1F1F1F] text-white"
                type="submit"
              >
                Submit
              </button>
              <button
                className="py-1 px-3 rounded border border-gray-400"
                type="button"
                onClick={clearForm}
              >
                Clear
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DriversForm;
