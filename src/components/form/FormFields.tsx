import { Checkbox } from "@/components/ui/checkbox";
import { SelectField } from "./SelectField";
import { InputField } from "./InputField";
import type { StudentRecord } from "@/types";

interface FormFieldsProps {
  formData: Partial<StudentRecord>;
  setFormData: (data: Partial<StudentRecord>) => void;
  newGroupLeader: string;
  setNewGroupLeader: (value: string) => void;
  newAssistantLeader: string;
  setNewAssistantLeader: (value: string) => void;
  newArea: string;
  setNewArea: (value: string) => void;
  errors: Record<string, string>;
  handleNewGroupLeader: () => void;
  handleNewAssistantLeader: () => void;
  handleNewArea: () => void;
  areas: string[];
  groupLeaders: string[];
  assistantLeaders: string[];
}

export const FormFields = ({
  formData,
  setFormData,
  newGroupLeader,
  setNewGroupLeader,
  newAssistantLeader,
  setNewAssistantLeader,
  newArea,
  setNewArea,
  errors,
  handleNewGroupLeader,
  handleNewAssistantLeader,
  handleNewArea,
  areas,
  groupLeaders,
  assistantLeaders,
}: FormFieldsProps) => {
  return (
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
        label="Student Name"
        value={formData.studentName || ""}
        onChange={(value) => setFormData({ ...formData, studentName: value })}
        placeholder="Student Name"
        required
        error={errors.studentName}
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
        error={errors.class}
      />

      <InputField
        label="Guardian Name"
        value={formData.guardianName || ""}
        onChange={(value) => setFormData({ ...formData, guardianName: value })}
        placeholder="Guardian Name"
        required
        error={errors.guardianName}
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
        error={errors.contact}
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
        error={errors.result}
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
  );
};