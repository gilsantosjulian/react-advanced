import { useMutationRegister } from '../hooks/useRegisterMutation';

const RegisterMutation = ({ children }) => {
  const { mutation, loading, error } = useMutationRegister()

  return children(mutation, loading, error)
}

export default RegisterMutation;
