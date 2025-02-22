// @ts-nocheck
import React from 'react';
import { FSelect } from '@/components/Forms';

export function AccountsTypesSelect({ ...props }) {
  return (
    <FSelect
      valueAccessor={'key'}
      labelAccessor={'label'}
      textAccessor={'label'}
      placeholder={'Select an account...'}
      {...props}
    />
  );
}
