import { ClearIndicatorProps, DropdownIndicatorProps } from 'react-select'
import IconSvg from '../IconSvg'
import Close from '@icons/close.svg'
import DropdownFill from '@icons/dropdown-fill.svg'

export function ClearIndicator({
  isFocused,
  innerProps: { ref, className, ...innerProps },
}: ClearIndicatorProps<any>) {
  const colorClassName = isFocused ? 'fill-dark' : 'fill-grey'
  return (
    <div
      ref={ref}
      className={`cursor-pointer ${className}`}
      {...innerProps}>
      <IconSvg
        className={`hover:fill-darker transition-all ${colorClassName}}`}
        icon={Close}
        height={24}
        width={24}
      />
    </div>
  )
}

export function DropdownIndicator({
  isFocused,
  innerProps: { ref, className, ...innerProps },
}: DropdownIndicatorProps<any>) {
  const colorClassName = isFocused ? 'text-dark' : 'text-grey'
  return (
    <div
      ref={ref}
      className={`hover:text-dark transition-all cursor-pointer ${colorClassName} ${className}`}
      {...innerProps}>
      <IconSvg
        icon={DropdownFill}
        height={24}
        width={24}
      />
    </div>
  )
}
