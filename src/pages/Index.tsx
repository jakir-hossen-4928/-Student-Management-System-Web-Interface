import { useState } from "react";
import { StudentFormDialog } from "@/components/StudentFormDialog";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { exportToExcel } from "@/utils/excel";
import type { StudentRecord } from "@/types";
import { DataProvider } from "@/components/DataContext";

const Index = () => {
  const [records, setRecords] = useState<StudentRecord[]>([]);

  const handleSubmit = (data: StudentRecord) => {
    setRecords([...records, data]);
  };

  const handleExport = () => {
    exportToExcel(records);
  };

  return (
    <DataProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Student Records Management</h1>
          
          <div className="flex justify-end gap-4 mb-8">
            <StudentFormDialog onSubmit={handleSubmit} />
            <Button 
              onClick={handleExport}
              disabled={records.length === 0}
              className="bg-green-600 hover:bg-green-700"
            >
              Export to Excel
            </Button>
          </div>
          
          {records.length > 0 ? (
            <DataTable data={records} />
          ) : (
            <p className="text-center text-gray-500 py-8">No records yet. Add your first student record using the button above.</p>
          )}
        </div>
      </div>
    </DataProvider>
  );
};

export default Index;