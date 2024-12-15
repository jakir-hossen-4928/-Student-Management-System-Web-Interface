import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextType {
  areas: string[];
  groupLeaders: string[];
  assistantLeaders: string[];
  addArea: (area: string) => void;
  addGroupLeader: (leader: string) => void;
  addAssistantLeader: (leader: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [areas, setAreas] = useState<string[]>([]);
  const [groupLeaders, setGroupLeaders] = useState<string[]>([]);
  const [assistantLeaders, setAssistantLeaders] = useState<string[]>([]);

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

  return (
    <DataContext.Provider
      value={{
        areas,
        groupLeaders,
        assistantLeaders,
        addArea,
        addGroupLeader,
        addAssistantLeader,
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