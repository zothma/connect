'use client'

import ArrowRightLine from '@icons/arrow-right-line.svg'
import React, { useState } from 'react'
import Button from '@/components/common/Button'
import { createAdvertAction } from './createAdvertAction'
import CreateAdvertPreview from './CreateAdvertPreview'
import TypeField from './AdvertTypeField'
import TitleField from './AdvertTitleField'
import DomainField from './AdvertDomainField'
import DateField from './AdvertDateField'
import DescriptionField from './AdvertDescriptionField'

type PreviewProps = React.ComponentProps<typeof CreateAdvertPreview>

export default function CreateAdvertForm() {
  const [data, setData] = useState<PreviewProps>({})

  /**
   * Generates a change handler function for a specific key of the PreviewProps object.
   * The change handler function updates the data state by merging the previous state with the new value for the specified key.
   *
   * @param key - The key of the PreviewProps object.
   * @returns A change handler function that takes a value and updates the data state.
   */
  function generateChangeHandler<K extends keyof PreviewProps>(
    key: K
  ): (value: PreviewProps[K]) => void {
    return (value: PreviewProps[K]) => {
      setData((previous) => ({ ...previous, [key]: value }))
    }
  }

  return (
    <div className="flex gap-24 mt-">
      <form
        className="flex flex-col gap-8 items-stretch grow shrink"
        action={createAdvertAction}>
        <TypeField onChange={generateChangeHandler('type')} />
        <TitleField onChange={generateChangeHandler('name')} />
        <DomainField onChange={generateChangeHandler('domain')} />
        <DateField onChange={() => {}} />
        <DescriptionField onChange={generateChangeHandler('description')} />

        <Button
          className="self-end"
          icon={ArrowRightLine}
          iconPosition="right">
          Suivant
        </Button>
      </form>

      <div className="sticky top-24 h-min">
        <CreateAdvertPreview {...data} />
      </div>
    </div>
  )
}
