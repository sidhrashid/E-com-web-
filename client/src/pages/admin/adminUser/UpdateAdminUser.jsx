import Hoc from "../../../components/dashboardCompo/Hoc";

const UpdateAdminUser = () => {
  return (
    <>
      <Hoc />
      <section id="content">
        <main className="flex-1 flex justify-center items-center bg-gray-100 h-screen ">
          <form
            // onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg flex flex-col space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-700 text-center">
              Update Admin
            </h2>

            <label htmlFor="username" className="text-gray-700 font-medium">
              UserName :
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="John Doe"
              // onChange={handleChange}
            />

            <label htmlFor="email" className="text-gray-700 font-medium">
              Email :
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
              className="border border-gray-300 p-2 rounded-md w-full"
              // value={category.title}
              // onChange={handleChange}
            />
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password :
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="john@123"
              className="border border-gray-300 p-2 rounded-md w-full"
              // value={category.title}
              // onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Update Admin
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default UpdateAdminUser;
