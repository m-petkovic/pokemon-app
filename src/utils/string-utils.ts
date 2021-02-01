export const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const equalsIgnoreCase = (first: string, second: string) => first.toLocaleLowerCase().includes(second.toLocaleLowerCase()); 