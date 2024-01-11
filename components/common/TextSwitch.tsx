'use client'

import { SelectOption } from '@/types/components'
import { useState } from 'react'
import IconSvg from './IconSvg'
type SelectedOption = 'left' | 'right'

type Props = {
  id: string
  leftOption: SelectOption
  rightOption: SelectOption
}

type OptionProps = {
  selectOption: SelectOption
  className: string
  onSelect: () => void
  selected?: boolean
}

type IndicatorProps = {
  selectedOption: SelectedOption
}

function Option({
  selectOption,
  className,
  onSelect,
  selected = false,
}: OptionProps) {
  const selectedClassName = selected ? 'text-darker' : 'text-white'
  const icon = selected ? selectOption.selectedIcon : selectOption.icon

  return (
    <button
      type="button"
      className={`row-start-1 row-end-2 py-1 pr-3 flex gap-2 ${
        icon ? 'pl-2' : 'pl-3'
      } ${className} ${selectedClassName}`}
      onClick={() => onSelect()}>
      {icon && (
        <IconSvg
          icon={icon}
          height={24}
          width={24}
        />
      )}
      {selectOption.label}
    </button>
  )
}

function Indicator({ selectedOption }: IndicatorProps) {
  const leftPosition = 'col-start-1 col-end-2'
  const rightPosition = 'col-start-2 col-end-3'
  const position = selectedOption == 'left' ? leftPosition : rightPosition

  return (
    <div
      className={`row-start-1 row-end-2 bg-white rounded-[8px] transition-all ${position}`}
    />
  )
}

export default function TextSwitch({ id, leftOption, rightOption }: Props) {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>('left')

  const isSelectedLeft = selectedOption == 'left'
  const isSelectedRight = selectedOption == 'right'
  const currentValue = isSelectedLeft ? leftOption.value : rightOption.value

  return (
    <>
      {/* Hidden select used for the form */}
      <select
        id={id}
        className="hidden"
        onChange={() => {}}
        value={currentValue}>
        <option value={leftOption.value}>{leftOption.label}</option>
        <option value={rightOption.value}>{rightOption.label}</option>
      </select>

      {/* Switch-like front */}
      <div className="grid gap-3 auto-cols-max p-1 bg-darker w-fit rounded-[12px]">
        <Indicator selectedOption={selectedOption} />
        <Option
          selectOption={leftOption}
          className="col-start-1 col-end-2"
          selected={isSelectedLeft}
          onSelect={() => setSelectedOption('left')}
        />
        <Option
          selectOption={rightOption}
          className="col-start-2 col-end-3"
          selected={isSelectedRight}
          onSelect={() => setSelectedOption('right')}
        />
      </div>
    </>
  )
}
