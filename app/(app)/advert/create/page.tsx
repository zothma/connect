'use client'

import TextSwitch from '@/components/common/TextSwitch'
import Title from '@/components/common/Title'
import CreateAdvertForm from '@/components/forms/create-advert/CreateAdvertForm'
import SimpleLayout from '@/components/layout/SimpleLayout'
import CalendarEventFill from '@icons/calendar-event-fill.svg'
import CalendarEventLine from '@icons/calendar-event-line.svg'
import ShakeHandsFill from '@icons/shake-hands-fill.svg'
import ShakeHandsLine from '@icons/shake-hands-line.svg'

export default function CreateAdvertPage() {
  return (
    <SimpleLayout>
      <Title
        level={1}
        className="mt-16 mb-10">
        Créer une annonce
      </Title>

      <TextSwitch
        id="create_type"
        leftOption={{
          label: 'Annonce simple',
          value: 'advert',
          icon: ShakeHandsLine,
          selectedIcon: ShakeHandsFill,
        }}
        rightOption={{
          label: 'Événement',
          value: 'event',
          icon: CalendarEventLine,
          selectedIcon: CalendarEventFill,
        }}
      />

      <div className="mt-8">
        <CreateAdvertForm />
      </div>
    </SimpleLayout>
  )
}
