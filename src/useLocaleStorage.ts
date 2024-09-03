import { Effect, Option } from 'effect';

import { useServices } from './useServices';

export const useLocaleStorage = () => {
  const services = useServices();

  const set = (language: 'en' | 'fr') => {
    Effect.runSync(services.localStorage.set('lang', language));
  };
  const get = () => {
    return Effect.runSync(services.localStorage.get('lang')).pipe(Option.getOrUndefined);
  };
  return { set, get };
};
