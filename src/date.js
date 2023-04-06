export function dateConvert(value) {
  return new Date(value + "-").toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
}
