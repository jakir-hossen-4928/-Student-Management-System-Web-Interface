export const validateForm = (formData: any) => {
  const errors: Record<string, string> = {};

  // Group Leader validation
  if (!formData.groupLeader?.trim()) {
    errors.groupLeader = "Group leader is required";
  }

  // Assistant Leader validation
  if (!formData.assistantLeader?.trim()) {
    errors.assistantLeader = "Assistant leader is required";
  }

  // Area validation
  if (!formData.area?.trim()) {
    errors.area = "Area is required";
  }

  // Student name validation
  if (!formData.studentName?.trim()) {
    errors.studentName = "Student name is required";
  }

  // Year validation
  if (!formData.year?.trim()) {
    errors.year = "Year is required";
  } else if (!/^\d{4}$/.test(formData.year.trim())) {
    errors.year = "Year should be a 4-digit number";
  }

  // Class validation
  if (!formData.class?.trim()) {
    errors.class = "Class is required";
  }

  // Guardian name validation
  if (!formData.guardianName?.trim()) {
    errors.guardianName = "Guardian name is required";
  }

  // Address validation
  if (!formData.address?.trim()) {
    errors.address = "Address is required";
  }

  // Contact validation
  if (!formData.contact?.trim()) {
    errors.contact = "Contact is required";
  } else if (!/^\d{10}$/.test(formData.contact.trim())) {
    errors.contact = "Contact should be a 10-digit number";
  }

  // Demo validation
  if (!formData.demo?.trim()) {
    errors.demo = "Demo is required";
  }

  // Result validation
  if (!formData.result?.trim()) {
    errors.result = "Result is required";
  } else if (isNaN(Number(formData.result)) || Number(formData.result) < 0 || Number(formData.result) > 100) {
    errors.result = "Result should be a number between 0 and 100";
  }

  return errors;
};