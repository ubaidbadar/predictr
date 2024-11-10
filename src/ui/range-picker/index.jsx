import React, { useState, useEffect } from "react";
import moment from "moment";
import { DateRangePicker } from "react-date-range";
import "./styles.scss";
import Model from "../../ui/modal";
import useShow from "../../hooks/useShow";

const toUTCDate = (localDate) => {
  return new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000);
};

const toLocalDate = (utcDate) => {
  if(typeof utcDate === 'string') utcDate = new Date(utcDate);
  return new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
};

const RangePicker = ({ onChange, ranges, component, ...props }) => {
  const tools = useShow()
  const [selectedDate, setSelectedDate] = useState(
    ranges ? 
    ranges.map(range => ({...range, startDate: toLocalDate(range.startDate), endDate: toLocalDate(range.endDate)})) : 
    [{
      startDate: new Date(moment().subtract(30, "days")),
      endDate: new Date(moment()),
      key: "selection",
    }]
  );


  const onRangeChange = (e) => {
    const selection = e[Object.keys(e)[0]];
    setSelectedDate([{ ...selection }]); // Keep selection in local time

    if (selection.endDate) {
      if (selection.startDate.getTime() !== selection.endDate.getTime()) {
        hide();
        // Convert to UTC before calling onChange
        const utcStartDate = toUTCDate(selection.startDate);
        const utcEndDate = toUTCDate(selection.endDate);
        onChange && onChange({ selection: { ...selection, startDate: utcStartDate, endDate: utcEndDate } });
      }
    }
  };

  useEffect(() => {
    if (ranges && JSON.stringify(ranges) !== JSON.stringify(selectedDate)) {
      setSelectedDate(ranges.map(range => ({...range, startDate: toLocalDate(range.startDate), endDate: toLocalDate(range.endDate)})));
    }
  }, [ranges]);

  const values = [moment(selectedDate[0].startDate).format('YYYY/MM/DD'), moment(selectedDate[0].endDate).format('YYYY/MM/DD')];

  return (
    <>
      {component && component({
        value: values.join('-'),
        values,
        ...tools
      })}
      {tools.className && (
        <Model {...tools} title='Select Date Range'>
          <div className="date__range__wrapper border border-radius-8 overflow-hidden" autoFocus={true}>
            <DateRangePicker
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              ranges={selectedDate}
              onChange={onRangeChange}
              direction="horizontal"
              showMonthAndYearPickers={false}
              dateDisplayFormat="yyyy/MM/dd"
              className="m-auto"
              {...props}
            />
          </div>
        </Model>
      )}
    </>
  );
};

export default RangePicker;
