import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name,control , label , defaultValue=""}) {
  return (
    <div className='w-full'>
        {label && <label></label>}
    </div>
  )
}

