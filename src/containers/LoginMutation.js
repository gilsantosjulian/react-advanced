import { useLoginMutation } from '../hooks/useLoginMutation';

const LoginMutation = ({ children }) => {
  const { mutation, loading, error } = useLoginMutation()

  return children(mutation, loading, error)
}

export default LoginMutation;
