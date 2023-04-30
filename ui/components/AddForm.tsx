import { AddPersonDto } from "../models/AddPersonDto";

export const AddForm = () => {
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const dto: AddPersonDto = {
      name: e.target.name.value,
      dob: e.target.dob.value,
      phonenumber: e.target.phone.value
    }

    console.log(dto);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-auto" />

        <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
        <input type="date" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-auto" />

        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Your Phone Number</label>
        <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-auto" />

        <button type="submit" className="px-5 py-2 bg-blue-500 text-white rounded-lg my-5">Submit</button>
      </form>
    </>
  )
}