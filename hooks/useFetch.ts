import { fetchWithTimeout } from '@/lib/async'
import useToast from './useToast'

type FecthParams = Parameters<typeof fetchWithTimeout>

const MESSAGES = {
  unauthorized: 'Veuillez vous identifier pour accéder à cette fonctionnalité.',
  internalError: "Une erreur s'est produite, veuillez réessayer.",
}

/**
 * Wrapper around the fetch function sending toast messages depending on
 * the status code of the response
 * @returns
 */
export default function useFetch() {
  const { toast } = useToast()

  const wrappedFetch = async (...params: FecthParams) => {
    const res = await fetchWithTimeout(...params)
    if (res.status == 401) toast(MESSAGES.unauthorized)
    if (res.status == 405) toast(MESSAGES.internalError)
    return res
  }

  return wrappedFetch
}
