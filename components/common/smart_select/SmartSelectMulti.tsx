import { MultiValueGenericProps, MultiValueRemoveProps } from 'react-select'
import IconSvg from '../IconSvg'
import Close from '@icons/close.svg'

/**
 * Renders the container for multiple values in a smart select component.
 *
 * @param props - The props for the MultiValueContainer component.
 * @returns The JSX element representing the container for multiple values.
 */
export function MultiValueContainer(props: MultiValueGenericProps<any>) {
  return (
    <div className="flex items-center gap-3 pl-2 pr-1.5 py-0.5 bg-dark rounded-[5px]">
      {props.children}
    </div>
  )
}

/**
 * Renders the label for a single value in a smart select component.
 *
 * @param props - The props for the MultiValueLabel component.
 * @returns The JSX element representing the label for a single value.
 */
export function MultiValueLabel(props: MultiValueGenericProps<any>) {
  return <span className="text-white">{props.children}</span>
}

/**
 * Renders the remove button for a single value in a smart select component.
 *
 * @param props - The props for the MultiValueRemove component.
 * @returns The JSX element representing the remove button for a single value.
 */
export function MultiValueRemove({
  innerProps: { ref, className, ...innerProps },
  data: { label },
}: MultiValueRemoveProps<any>) {
  return (
    <div
      {...innerProps}
      ref={ref}
      className={`cursor-pointer rounded-[4px] transition-all bg-transparent hover:bg-red p-0.5 -m-0.5 ${className}`}
      title="Supprimer"
      aria-label={`Supprimer ${label}`}>
      <IconSvg
        className="fill-white"
        icon={Close}
        height={16}
        width={16}
      />
    </div>
  )
}
