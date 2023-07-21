"use client";

import { useState } from "react";

export default function MyForm(props: {
  handleAction: (formData: FormData) => Promise<string>;
}) {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      const data = await props.handleAction(formData);
      setSuccessMessage(data);
      setError("");
    } catch (e: any) {
      console.log("error");
      setError(e.message);
      setSuccessMessage("");
    }
  };

  return (
    <form action={handleSubmit} className="flex flex-col">
      <input
        className="border-2 rounded-sm border-gray-500"
        type="text"
        name="name"
      />
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
