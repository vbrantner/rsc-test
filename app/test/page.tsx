import MyForm from "./MyForm";
import { handleAction } from "./action";

export default function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <div className="border border-red-500 w-24">
        <MyForm handleAction={handleAction} />
      </div>
    </div>
  );
}
