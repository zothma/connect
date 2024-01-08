/**
 * Returns a message indicating that no options were found for the given input value.
 * Used by SmartSelect.
 *
 * @param params - The parameters object.
 * @param params.inputValue - The input value for which no options were found.
 * @returns - The message indicating no options were found.
 */
export default function showNoOptionsMessage({
  inputValue,
}: {
  inputValue: string
}) {
  return `Aucun résultat trouvé pour « ${inputValue} »`
}
