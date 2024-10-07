import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function Pickers(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        {props.children}
    </LocalizationProvider>
  );
}