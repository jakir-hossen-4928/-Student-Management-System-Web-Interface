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
import { useState } from "react";

export function StudentFormDialog({ 
  onSubmit 
}: { 
  onSubmit: (data: StudentRecord) => void 
}) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: StudentRecord) => {
    onSubmit(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">Add New Student</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Student Record</DialogTitle>
        </DialogHeader>
        <StudentForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}