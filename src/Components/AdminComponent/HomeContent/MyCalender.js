import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import '../../../Styles/Admindashboard/Calendar.css'

function MyCalender() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div>
           
            <Calendar
                onChange={onChange}
                value={date}
                defaultView="month"
                tileClassName={({ date, view }) => {
                    if (format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')) {
                        return 'today';
                    }
                    return '';
                }}
            />
        </div>
    );
}

export default MyCalender
