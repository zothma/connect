import { ClearIndicatorProps, DropdownIndicatorProps } from 'react-select'
import IconSvg from '../IconSvg'
import Close from '@icons/close.svg'
import DropdownFill from '@icons/dropdown-fill.svg'

export function ClearIndicator({
  innerProps: { ref, className, ...innerProps },
}: ClearIndicatorProps<any>) {
  return (
    <div
      ref={ref}
      className={`cursor-pointer ${className}`}
      {...innerProps}>
      <IconSvg
        className="fill-grey hover:fill-dark transition-all"
        icon={Close}
        height={24}
        width={24}
      />
    </div>
  )
}

export function DropdownIndicator({
  innerProps: { ref, className, ...innerProps },
}: DropdownIndicatorProps<any>) {
  return (
    <div
      ref={ref}
      className={`text-grey hover:text-dark transition-all cursor-pointer ${className}`}
      {...innerProps}>
      <IconSvg
        icon={DropdownFill}
        height={24}
        width={24}
      />
    </div>
  )
}
