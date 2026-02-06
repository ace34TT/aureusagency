import React from 'react'

import RichTextComponent from '@/components/RichText'

type Props = {
  content: any
}

export const RichTextBlock: React.FC<Props> = ({ content }) => {
  return (
    <div className="container">
      <RichTextComponent className="max-w-none" data={content} enableGutter={false} />
    </div>
  )
}
