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
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Group Leader</TableHead>
            <TableHead>Assistant Leader</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Sheet No.</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Guardian</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Demo</TableHead>
            <TableHead>Seminar</TableHead>
            <TableHead>Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.groupLeader}</TableCell>
              <TableCell>{record.assistantLeader}</TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.area}</TableCell>
              <TableCell>{record.sheetNo}</TableCell>
              <TableCell>{record.studentName}</TableCell>
              <TableCell>{record.year}</TableCell>
              <TableCell>{record.class}</TableCell>
              <TableCell>{record.guardianName}</TableCell>
              <TableCell>{record.address}</TableCell>
              <TableCell>{record.contact}</TableCell>
              <TableCell>{record.demo}</TableCell>
              <TableCell>{record.seminarAttended ? "✓" : "✗"}</TableCell>
              <TableCell>{record.result}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};