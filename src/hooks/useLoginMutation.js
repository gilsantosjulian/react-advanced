import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`

export const useLoginMutation = () => {
  const [mutation, { loading, error }] = useMutation(LOGIN)
  return { mutation, loading, error }
}