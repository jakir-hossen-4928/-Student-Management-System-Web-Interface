import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  placeholder: string;
  onValueChange: (value: string) => void;
  onNewValueAdd?: (value: string) => void;
  newValue?: string;
  onNewValueChange?: (value: string) => void;
}

export const SelectField = ({
  label,
  value,
  options,
  placeholder,
  onValueChange,
  onNewValueAdd,
  newValue = "",
  onNewValueChange,
}: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Select
        value={value}
        onValueChange={onValueChange}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
          {onNewValueAdd && (
            <SelectItem value="new">+ Add New</SelectItem>
          )}
        </SelectContent>
      </Select>
      {value === "new" && onNewValueAdd && onNewValueChange && (
        <div className="flex gap-2 mt-2">
          <Input
            value={newValue}
            onChange={(e) => onNewValueChange(e.target.value)}
            placeholder={`Enter new ${label.toLowerCase()}`}
          />
          <Button 
            type="button" 
            onClick={() => {
              if (newValue.trim()) {
                onNewValueAdd(newValue);
              }
            }}
          >
            Add
          </Button>
        </div>
      )}
    </div>
  );
};