export async function handleAction(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  if (name?.length > 4) {
    throw new Error("Name is too long");
  }
  return "success";
}
