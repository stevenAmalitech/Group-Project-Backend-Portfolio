export function mergeKeys(object: any, into: any) {
  if (!object) return into;
  Object.keys(object).forEach((key) => {
    if (key in into) into[key] = { ...into[key], ...object[key] };
    else into[key] = object[key];
  });

  return into;
}
