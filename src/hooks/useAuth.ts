import { useAppSelector } from './useAppSelector';

const useAuth = (): boolean => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  return isAuth;
};

export default useAuth;
