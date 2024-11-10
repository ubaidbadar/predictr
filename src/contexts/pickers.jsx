import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FiltersModal from '../components/filters-modal';

export default function Pickers(props) {
  return (
    <>
    <FiltersModal />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        {props.children}
    </LocalizationProvider>
    </>
  );
}