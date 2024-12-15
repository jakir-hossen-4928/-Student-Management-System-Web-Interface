import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { StudentRecord } from '@/types';

interface DataContextType {
  areas: string[];
  groupLeaders: string[];
  assistantLeaders: string[];
  records: StudentRecord[];
  addArea: (area: string) => void;
  addGroupLeader: (leader: string) => void;
  addAssistantLeader: (leader: string) => void;
  addRecord: (record: StudentRecord) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [areas, setAreas] = useState<string[]>(() => {
    const saved = localStorage.getItem('areas');
    return saved ? JSON.parse(saved) : [];
  });

  const [groupLeaders, setGroupLeaders] = useState<string[]>(() => {
    const saved = localStorage.getItem('groupLeaders');
    return saved ? JSON.parse(saved) : [];
  });

  const [assistantLeaders, setAssistantLeaders] = useState<string[]>(() => {
    const saved = localStorage.getItem('assistantLeaders');
    return saved ? JSON.parse(saved) : [];
  });

  const [records, setRecords] = useState<StudentRecord[]>(() => {
    const saved = localStorage.getItem('studentRecords');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('areas', JSON.stringify(areas));
  }, [areas]);

  useEffect(() => {
    localStorage.setItem('groupLeaders', JSON.stringify(groupLeaders));
  }, [groupLeaders]);

  useEffect(() => {
    localStorage.setItem('assistantLeaders', JSON.stringify(assistantLeaders));
  }, [assistantLeaders]);

  useEffect(() => {
    localStorage.setItem('studentRecords', JSON.stringify(records));
  }, [records]);

  const addArea = (area: string) => {
    if (!areas.includes(area)) {
      setAreas([...areas, area]);
    }
  };

  const addGroupLeader = (leader: string) => {
    if (!groupLeaders.includes(leader)) {
      setGroupLeaders([...groupLeaders, leader]);
    }
  };

  const addAssistantLeader = (leader: string) => {
    if (!assistantLeaders.includes(leader)) {
      setAssistantLeaders([...assistantLeaders, leader]);
    }
  };

  const addRecord = (record: StudentRecord) => {
    setRecords([...records, record]);
  };

  return (
    <DataContext.Provider
      value={{
        areas,
        groupLeaders,
        assistantLeaders,
        records,
        addArea,
        addGroupLeader,
        addAssistantLeader,
        addRecord,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};