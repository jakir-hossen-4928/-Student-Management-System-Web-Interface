import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { StudentRecord } from "@/types";

export const DataTable = ({ data }: { data: StudentRecord[] }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sheet No.</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Guardian</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Seminar</TableHead>
            <TableHead>Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.sheetNo}</TableCell>
              <TableCell>{record.studentName}</TableCell>
              <TableCell>{record.class}</TableCell>
              <TableCell>{record.guardianName}</TableCell>
              <TableCell>{record.contact}</TableCell>
              <TableCell>{record.seminarAttended ? "✓" : "✗"}</TableCell>
              <TableCell>{record.result}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};