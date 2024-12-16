import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  placeholder: string;
  onValueChange: (value: string) => void;
  onNewValueAdd?: () => void;
  newValue?: string;
  onNewValueChange?: (value: string) => void;
  error?: string;
  required?: boolean;
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
  error,
  required = false,
}: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label} {required && "*"}
      </label>
      <Select
        value={value}
        onValueChange={onValueChange}
      >
        <SelectTrigger className={error ? "border-red-500" : ""}>
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
            className={error ? "border-red-500" : ""}
          />
          <Button 
            type="button" 
            onClick={onNewValueAdd}
          >
            Add
          </Button>
        </div>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};