import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { StudentRecord } from "@/types";
import { useData } from "./DataContext";

export const StudentForm = ({ 
  onSubmit 
}: { 
  onSubmit: (data: StudentRecord) => void 
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<StudentRecord>>({});
  const { areas, groupLeaders, assistantLeaders, addArea, addGroupLeader, addAssistantLeader } = useData();

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

    // Add new items to context if they don't exist
    if (formData.area) addArea(formData.area);
    if (formData.groupLeader) addGroupLeader(formData.groupLeader);
    if (formData.assistantLeader) addAssistantLeader(formData.assistantLeader);

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

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Group Leader</label>
          <Select
            value={formData.groupLeader}
            onValueChange={(value) => setFormData({ ...formData, groupLeader: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Group Leader" />
            </SelectTrigger>
            <SelectContent>
              {groupLeaders.map((leader) => (
                <SelectItem key={leader} value={leader}>
                  {leader}
                </SelectItem>
              ))}
              <SelectItem value="new">+ Add New Leader</SelectItem>
            </SelectContent>
          </Select>
          {formData.groupLeader === "new" && (
            <Input
              value=""
              onChange={(e) => setFormData({ ...formData, groupLeader: e.target.value })}
              placeholder="Enter new leader name"
              className="mt-2"
            />
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Assistant Leader</label>
          <Select
            value={formData.assistantLeader}
            onValueChange={(value) => setFormData({ ...formData, assistantLeader: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Assistant Leader" />
            </SelectTrigger>
            <SelectContent>
              {assistantLeaders.map((leader) => (
                <SelectItem key={leader} value={leader}>
                  {leader}
                </SelectItem>
              ))}
              <SelectItem value="new">+ Add New Assistant</SelectItem>
            </SelectContent>
          </Select>
          {formData.assistantLeader === "new" && (
            <Input
              value=""
              onChange={(e) => setFormData({ ...formData, assistantLeader: e.target.value })}
              placeholder="Enter new assistant name"
              className="mt-2"
            />
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Date</label>
          <Input
            type="date"
            value={formData.date || ""}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Area</label>
          <Select
            value={formData.area}
            onValueChange={(value) => setFormData({ ...formData, area: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Area" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((area) => (
                <SelectItem key={area} value={area}>
                  {area}
                </SelectItem>
              ))}
              <SelectItem value="new">+ Add New Area</SelectItem>
            </SelectContent>
          </Select>
          {formData.area === "new" && (
            <Input
              value=""
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              placeholder="Enter new area name"
              className="mt-2"
            />
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Sheet No.</label>
          <Input
            value={formData.sheetNo || ""}
            onChange={(e) => setFormData({ ...formData, sheetNo: e.target.value })}
            placeholder="Sheet Number"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Student Name *</label>
          <Input
            value={formData.studentName || ""}
            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
            placeholder="Student Name"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Year</label>
          <Input
            value={formData.year || ""}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            placeholder="Year"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Class *</label>
          <Input
            value={formData.class || ""}
            onChange={(e) => setFormData({ ...formData, class: e.target.value })}
            placeholder="Class"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Guardian Name</label>
          <Input
            value={formData.guardianName || ""}
            onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
            placeholder="Guardian Name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Address</label>
          <Input
            value={formData.address || ""}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Address"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Contact</label>
          <Input
            value={formData.contact || ""}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            placeholder="Phone/WhatsApp"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Demo</label>
          <Input
            value={formData.demo || ""}
            onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
            placeholder="Demo"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Result (%)</label>
          <Input
            type="number"
            min="0"
            max="100"
            value={formData.result || ""}
            onChange={(e) => setFormData({ ...formData, result: e.target.value })}
            placeholder="Result Percentage"
          />
        </div>

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