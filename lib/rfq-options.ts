export const rfqMaterialOptions = [
  { label: "ABS", value: "ABS" },
  { label: "PC", value: "PC" },
  { label: "PP", value: "PP" },
  { label: "Nylon", value: "Nylon" },
  { label: "Aluminum", value: "Aluminum" },
  { label: "Steel", value: "Steel" },
  { label: "Other — specify in project notes", value: "Other" },
  { label: "Not Sure — material review required", value: "Not Sure" }
] as const;

const rfqMaterialValues = new Set<string>(rfqMaterialOptions.map((option) => option.value));

export function isRfqMaterialValue(value: string) {
  return rfqMaterialValues.has(value);
}
