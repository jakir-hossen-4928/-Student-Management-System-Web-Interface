import * as XLSX from "xlsx";
import type { StudentRecord } from "@/types";

export const exportToExcel = (data: StudentRecord[]) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
  XLSX.writeFile(workbook, "student-records.xlsx");
};