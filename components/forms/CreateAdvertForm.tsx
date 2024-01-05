'use client'

import { DummyAdvertCard } from '@/components/advert/AdvertCard'
import Input from '@/components/common/Input'
import TextSwitch from '@/components/common/TextSwitch'
import Textarea from '@/components/common/Textarea'
import ShakeHandsFill from '@icons/shake-hands-fill.svg'
import ShakeHandsLine from '@icons/shake-hands-line.svg'
import CalendarEventFill from '@icons/calendar-event-fill.svg'
import CalendarEventLine from '@icons/calendar-event-line.svg'
import React, { useState } from 'react'

type AdvertCardProps = React.ComponentProps<typeof DummyAdvertCard>
type HandleChangeCallback<K extends keyof AdvertCardProps> = (
  value: string
) => AdvertCardProps[K]

type AcceptedInputs = HTMLInputElement | HTMLTextAreaElement

export default function CreateAdvertForm() {
  const [data, setData] = useState<AdvertCardProps>({})

  /**
   * Generates the change event handler associated to the given key
   * @param key Property in data to be changed
   * @param callback Callback used to turn a raw string into the needed type for the key
   * @returns
   */
  function handleChange<K extends keyof AdvertCardProps>(
    key: K,
    callback: HandleChangeCallback<K>
  ) {
    return (event: React.ChangeEvent<AcceptedInputs>) => {
      const value = event.target.value
      const newValue = value.trim() == '' ? undefined : callback(value)
      setData((previous) => ({ ...previous, [key]: newValue }))
    }
  }

  return (
    <>
      <div className="flex flex-col gap-8 items-stretch grow shrink">
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
          onChange={handleChange('name', (value) => value)}
        />
        <Input
          id="create_advert_domains"
          type="text"
          label="Domaines"
          onChange={handleChange('domain', (value) => ({ name: value }))}
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
          onChange={handleChange('description', (value) => value)}
        />
      </div>

      {/* Preview */}
      <div className="w-[500px] shrink-0">
        <DummyAdvertCard {...data} />
      </div>
    </>
  )
}
