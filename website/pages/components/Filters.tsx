
import { Button, Input } from "@supabase/ui";

export default function Filters() {
  return (
    <div className="divide-y">
      <div className="p-4">
        <Input
          className="w-full"
          actions={[<Button key="btn-search">Search</Button>]}
        />
      </div>
      <div className="p-4">
        {/* <Checkbox.Group label="License">
          <Checkbox label="Free" checked />
          <Checkbox label="Paid" />
        </Checkbox.Group> */}
      </div>
    </div>
  );
}
