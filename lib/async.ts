/**
 * Ajoute un délai d'expiration au bout duquel la fonction fetch est stoppée
 */
export function fetchWithTimeout(
  input: RequestInfo | URL,
  options: RequestInit & { timeout?: number } = {}
) {
  const { timeout = 6000 } = options

  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  const promise = fetch(input, {
    ...options,
    signal: controller.signal,
  }).then((res) => {
    clearTimeout(id)
    return res
  })

  return promise
}
