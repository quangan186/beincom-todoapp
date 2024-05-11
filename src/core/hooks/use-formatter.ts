import dayjs from 'dayjs';

export const useFormatter = () => {
  const datetimeStringISOToString = (
    value: Date | string | undefined,
  ): string => {
    return dayjs(value).format('DD/MM/YYYY HH:mm');
  };

  return {datetimeStringISOToString};
};
