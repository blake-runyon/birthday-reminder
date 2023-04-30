import { AddForm } from "../components/AddForm"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Please Enter A Person</h1>
      <p className="underline">Persons Information needed is their full name, date of birth, and your phone number!</p>

      <AddForm />
    </>
  )
}
