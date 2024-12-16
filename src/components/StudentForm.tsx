import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import type { StudentRecord } from "@/types";
import { useData } from "./DataContext";
import { FormFields } from "./form/FormFields";
import { validateForm } from "@/utils/formValidation";

export const StudentForm = ({ 
  onSubmit 
}: { 
  onSubmit: (data: StudentRecord) => void 
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<StudentRecord>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
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
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast({
        title: "Error",
        description: "Please fix the validation errors",
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
    setErrors({});
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
      <FormFields
        formData={formData}
        setFormData={setFormData}
        newGroupLeader={newGroupLeader}
        setNewGroupLeader={setNewGroupLeader}
        newAssistantLeader={newAssistantLeader}
        setNewAssistantLeader={setNewAssistantLeader}
        newArea={newArea}
        setNewArea={setNewArea}
        errors={errors}
        handleNewGroupLeader={handleNewGroupLeader}
        handleNewAssistantLeader={handleNewAssistantLeader}
        handleNewArea={handleNewArea}
        areas={areas}
        groupLeaders={groupLeaders}
        assistantLeaders={assistantLeaders}
      />
      <Button type="submit" className="w-full">Add Record</Button>
    </form>
  );
};