import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "./styles.scss";
import Model from "../../ui/modal";
import useShow from "../../hooks/useShow";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

dayjs.extend(utc);


const toLocalDate = (utcDate) => {
  if (typeof utcDate === 'string') utcDate = new Date(utcDate);
  return new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
};

const RangePicker = ({ onChange, ranges, component, ...props }) => {
  const tools = useShow()
  const [selectedDate, setSelectedDate] = useState(
    ranges ?
      ranges.map(range => ({ ...range, startDate: toLocalDate(range.startDate), endDate: toLocalDate(range.endDate) })) :
      [{
        startDate: dayjs().subtract(30, 'days'),
        endDate: dayjs(),
        key: "selection",
      }]
  );


  const onRangeChange = (e) => {
    const selection = e[Object.keys(e)[0]];
    setSelectedDate([{ ...selection }]);

    if (selection.endDate) {
      if (selection.startDate.getTime() !== selection.endDate.getTime()) {
        tools.close();
        onChange && onChange({
          selection: {
            ...selection,
            start: dayjs(selection.startDate).utc().format(),
            end: dayjs(selection.endDate).utc().format()
          }
        });
      }
    }
  };

  useEffect(() => {
    if (ranges && JSON.stringify(ranges) !== JSON.stringify(selectedDate)) {
      setSelectedDate(ranges.map(range => ({ ...range, startDate: toLocalDate(range.startDate), endDate: toLocalDate(range.endDate) })));
    }
  }, [ranges]);

  const values = [dayjs(selectedDate[0].startDate).format('YYYY/MM/DD'), dayjs(selectedDate[0].endDate).format('YYYY/MM/DD')];
  console.log(values)
  return (
    <>
      {component && component({
        value: values.join('-'),
        values,
        ...tools
      })}
      {tools.className && (
        <Model {...tools} className="Modal-Range-Picker" title='Select Date Range'>
            <DateRangePicker
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              ranges={selectedDate}
              onChange={onRangeChange}
              direction="horizontal"
              showMonthAndYearPickers={false}
              dateDisplayFormat="yyyy/MM/dd"
              className="Range-Picker-Calendar"
              {...props}
            />
        </Model>
      )}
    </>
  );
};

export default RangePicker;
