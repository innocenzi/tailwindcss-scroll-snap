// @ts-ignore // FIX ME
import reduceCalc from 'reduce-css-calc';

export default function(value: any) {
  try {
    return reduceCalc(`calc(${value} * -1)`);
  } catch (e) {
    return value;
  }
}
