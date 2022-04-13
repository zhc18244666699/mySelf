import React from 'react';
import { Calendar } from 'antd';

export default function CalendarContainer() {
  const onPanelChange = (value: any, mode: any) => {
    console.log(value, mode, '123');
  };

  return (
    <React.Fragment>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </React.Fragment>
  );
}
