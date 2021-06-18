import React from 'react';
import { Inject,ScheduleComponent,Day,Week, Month } from '@syncfusion/ej2-react-schedule';

const Calendar = ()  => {
    return (
      <ScheduleComponent currentView='Week'> 
      <Inject services={[Day,Week, Month]} />
  </ScheduleComponent>
      
    );
  }
  
  export default Calendar;