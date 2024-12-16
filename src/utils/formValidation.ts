export const validateForm = (formData: any) => {
  const errors: Record<string, string> = {};

  if (!formData.studentName?.trim()) {
    errors.studentName = "Student name is required";
  }

  if (!formData.class?.trim()) {
    errors.class = "Class is required";
  }

  if (!formData.guardianName?.trim()) {
    errors.guardianName = "Guardian name is required";
  }

  if (formData.contact?.trim() && !/^\d{10}$/.test(formData.contact.trim())) {
    errors.contact = "Contact should be a 10-digit number";
  }

  if (formData.result && (Number(formData.result) < 0 || Number(formData.result) > 100)) {
    errors.result = "Result should be between 0 and 100";
  }

  return errors;
};