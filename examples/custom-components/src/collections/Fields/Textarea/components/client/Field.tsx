'use client'
import type { TextareaFieldClientComponent } from 'payload'

import { TextareaField } from '@payloadcms/ui'
import React from 'react'

export const CustomTextareaFieldClient: TextareaFieldClientComponent = (props) => {
  const { field } = props

  return <TextareaField field={field} />
}