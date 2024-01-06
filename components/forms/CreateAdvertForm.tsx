'use client'

import { DummyAdvertCard } from '@/components/advert/AdvertCard'
import Input from '@/components/common/Input'
import TextSwitch from '@/components/common/TextSwitch'
import Textarea from '@/components/common/Textarea'
import ArrowRightLine from '@icons/arrow-right-line.svg'
import CalendarEventFill from '@icons/calendar-event-fill.svg'
import CalendarEventLine from '@icons/calendar-event-line.svg'
import ShakeHandsFill from '@icons/shake-hands-fill.svg'
import ShakeHandsLine from '@icons/shake-hands-line.svg'
import React, { useState } from 'react'
import Button from '../common/Button'

type AdvertCardProps = React.ComponentProps<typeof DummyAdvertCard>
type AcceptedInputs = HTMLInputElement | HTMLTextAreaElement

/**
 * Renders a preview of an AdvertCard.
 */
function Preview({ data }: { data: AdvertCardProps }) {
  return (
    <div className="w-[500px] shrink-0">
      <DummyAdvertCard {...data} />
    </div>
  )
}

export default function CreateAdvertForm() {
  const [data, setData] = useState<AdvertCardProps>({})

  /**
   * Generates the change event handler associated with the given key.
   *
   * @param key Property in data to be changed
   * @param transformValue Callback used to transform a raw string into the needed type for the key
   * @returns The change event handler
   */
  function generateChangeHandler<K extends keyof AdvertCardProps>(
    key: K,
    transformValue: (value: string) => AdvertCardProps[K]
  ): (event: React.ChangeEvent<AcceptedInputs>) => void {
    return (event: React.ChangeEvent<AcceptedInputs>) => {
      const value = event.target.value
      const newValue = value.trim() === '' ? undefined : transformValue(value)
      setData((previous) => ({ ...previous, [key]: newValue }))
    }
  }

  return (
    <>
      <form className="flex flex-col gap-8 items-stretch grow shrink">
        <TextSwitch
          id="create_type"
          leftOption={{
            label: 'Annonce simple',
            value: 'advert',
            icon: ShakeHandsLine,
            selectedIcon: ShakeHandsFill,
          }}
          rightOption={{
            label: 'Événement & Rencontre',
            value: 'event',
            icon: CalendarEventLine,
            selectedIcon: CalendarEventFill,
          }}
        />

        <Input
          id="create_advert_title"
          type="text"
          label="Titre"
          onChange={generateChangeHandler('name', (value) => value)}
        />
        <Input
          id="create_advert_domains"
          type="text"
          label="Domaines"
          onChange={generateChangeHandler('domain', (name) => ({ name }))}
        />
        <Input
          id="create_advert_start_date"
          type="text"
          label="Date de début"
        />
        <Textarea
          id="create_advert_description"
          label="Description"
          rows={8}
          onChange={generateChangeHandler('description', (value) => value)}
        />

        <Button
          className="self-end"
          icon={ArrowRightLine}
          iconPosition="right">
          Suivant
        </Button>
      </form>

      <Preview data={data} />
    </>
  )
}
