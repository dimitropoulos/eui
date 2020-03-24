import { RelativeOption, TimeUnitId, TimeUnitFromNowId } from '../types';

export const relativeOptions: RelativeOption[] = [
  { text: 'Seconds ago', value: 's' },
  { text: 'Minutes ago', value: 'm' },
  { text: 'Hours ago', value: 'h' },
  { text: 'Days ago', value: 'd' },
  { text: 'Weeks ago', value: 'w' },
  { text: 'Months ago', value: 'M' },
  { text: 'Years ago', value: 'y' },

  { text: 'Seconds from now', value: 's+' },
  { text: 'Minutes from now', value: 'm+' },
  { text: 'Hours from now', value: 'h+' },
  { text: 'Days from now', value: 'd+' },
  { text: 'Weeks from now', value: 'w+' },
  { text: 'Months from now', value: 'M+' },
  { text: 'Years from now', value: 'y+' },
];

const timeUnitIds = relativeOptions
  .map(({ value }) => value)
  .filter(value => !value.includes('+')) as TimeUnitId[];

export const isTimeUnitId = (value: string): value is TimeUnitId =>
  timeUnitIds.includes(value as TimeUnitId);

const timeUnitFromNowIds = relativeOptions
  .map(({ value }) => value)
  .filter(value => value.includes('+')) as TimeUnitFromNowId[];

export const isTimeUnitFromNowId = (
  value: string
): value is TimeUnitFromNowId =>
  timeUnitFromNowIds.includes(value as TimeUnitFromNowId);

export const relativeUnitsFromLargestToSmallest = timeUnitIds.reverse();
