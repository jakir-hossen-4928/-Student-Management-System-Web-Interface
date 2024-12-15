import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StudentForm } from "./StudentForm";
import type { StudentRecord } from "@/types";

export function StudentFormDialog({ 
  onSubmit 
}: { 
  onSubmit: (data: StudentRecord) => void 
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">Add New Student</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Student Record</DialogTitle>
        </DialogHeader>
        <StudentForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}