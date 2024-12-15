import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import type { StudentRecord } from "@/types";
import { useData } from "./DataContext";
import { SelectField } from "./form/SelectField";
import { InputField } from "./form/InputField";

export const StudentForm = ({ 
  onSubmit 
}: { 
  onSubmit: (data: StudentRecord) => void 
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<StudentRecord>>({});
  const [newGroupLeader, setNewGroupLeader] = useState("");
  const [newAssistantLeader, setNewAssistantLeader] = useState("");
  const [newArea, setNewArea] = useState("");
  
  const { 
    areas, 
    groupLeaders, 
    assistantLeaders, 
    addArea, 
    addGroupLeader, 
    addAssistantLeader 
  } = useData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.class) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    onSubmit({
      id: Date.now().toString(),
      ...formData,
      seminarAttended: formData.seminarAttended || false,
    } as StudentRecord);

    setFormData({});
    toast({
      title: "Success",
      description: "Student record added successfully",
    });
  };

  const handleNewGroupLeader = () => {
    if (newGroupLeader.trim()) {
      addGroupLeader(newGroupLeader);
      setFormData({ ...formData, groupLeader: newGroupLeader });
      setNewGroupLeader("");
      toast({
        title: "Success",
        description: "New group leader added successfully",
      });
    }
  };

  const handleNewAssistantLeader = () => {
    if (newAssistantLeader.trim()) {
      addAssistantLeader(newAssistantLeader);
      setFormData({ ...formData, assistantLeader: newAssistantLeader });
      setNewAssistantLeader("");
      toast({
        title: "Success",
        description: "New assistant leader added successfully",
      });
    }
  };

  const handleNewArea = () => {
    if (newArea.trim()) {
      addArea(newArea);
      setFormData({ ...formData, area: newArea });
      setNewArea("");
      toast({
        title: "Success",
        description: "New area added successfully",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField
          label="Group Leader"
          value={formData.groupLeader || ""}
          options={groupLeaders}
          placeholder="Select Group Leader"
          onValueChange={(value) => setFormData({ ...formData, groupLeader: value })}
          onNewValueAdd={handleNewGroupLeader}
          newValue={newGroupLeader}
          onNewValueChange={setNewGroupLeader}
        />

        <SelectField
          label="Assistant Leader"
          value={formData.assistantLeader || ""}
          options={assistantLeaders}
          placeholder="Select Assistant Leader"
          onValueChange={(value) => setFormData({ ...formData, assistantLeader: value })}
          onNewValueAdd={handleNewAssistantLeader}
          newValue={newAssistantLeader}
          onNewValueChange={setNewAssistantLeader}
        />

        <SelectField
          label="Area"
          value={formData.area || ""}
          options={areas}
          placeholder="Select Area"
          onValueChange={(value) => setFormData({ ...formData, area: value })}
          onNewValueAdd={handleNewArea}
          newValue={newArea}
          onNewValueChange={setNewArea}
        />

        <InputField
          label="Sheet No."
          value={formData.sheetNo || ""}
          onChange={(value) => setFormData({ ...formData, sheetNo: value })}
          placeholder="Sheet Number"
        />

        <InputField
          label="Student Name"
          value={formData.studentName || ""}
          onChange={(value) => setFormData({ ...formData, studentName: value })}
          placeholder="Student Name"
          required
        />

        <InputField
          label="Year"
          value={formData.year || ""}
          onChange={(value) => setFormData({ ...formData, year: value })}
          placeholder="Year"
        />

        <InputField
          label="Class"
          value={formData.class || ""}
          onChange={(value) => setFormData({ ...formData, class: value })}
          placeholder="Class"
          required
        />

        <InputField
          label="Guardian Name"
          value={formData.guardianName || ""}
          onChange={(value) => setFormData({ ...formData, guardianName: value })}
          placeholder="Guardian Name"
        />

        <InputField
          label="Address"
          value={formData.address || ""}
          onChange={(value) => setFormData({ ...formData, address: value })}
          placeholder="Address"
        />

        <InputField
          label="Contact"
          value={formData.contact || ""}
          onChange={(value) => setFormData({ ...formData, contact: value })}
          placeholder="Phone/WhatsApp"
        />

        <InputField
          label="Demo"
          value={formData.demo || ""}
          onChange={(value) => setFormData({ ...formData, demo: value })}
          placeholder="Demo"
        />

        <InputField
          label="Result (%)"
          value={formData.result || ""}
          onChange={(value) => setFormData({ ...formData, result: value })}
          placeholder="Result Percentage"
          type="number"
          min="0"
          max="100"
        />

        <div className="flex items-center space-x-2">
          <Checkbox
            id="seminar"
            checked={formData.seminarAttended || false}
            onCheckedChange={(checked) => 
              setFormData({ ...formData, seminarAttended: checked as boolean })
            }
          />
          <label htmlFor="seminar" className="text-sm font-medium">
            Seminar Attended
          </label>
        </div>
      </div>
      <Button type="submit" className="w-full">Add Record</Button>
    </form>
  );
};