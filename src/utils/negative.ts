import negateValue from "./negateValue";

export default function negative(scale: any) {
  return Object.keys(scale)
    .filter(key => scale[key] !== '0')
    .reduce(
      (negativeScale, key) => ({
        ...negativeScale,
        [`-${key}`]: negateValue(scale[key]),
      }),
      {}
    );
}
