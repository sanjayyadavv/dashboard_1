import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

function createData(name, calories, fat, carbs, protein, protein1, protein2) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    protein1,
    protein2
  };
}

function updateTable() {

}


// const rows = [
//   createData('UPSC', 305, 3.7, 67, 4.3,3.4,temp),
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Device',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Last RF D-time',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'System up-time',
  },
  {
    id: 'protein1',
    numeric: true,
    disablePadding: false,
    label: 'RF TX',
  },
  {
    id: 'protein2',
    numeric: true,
    disablePadding: false,
    label: 'Temp',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">

        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function getStateData(id, stateData) {
  return stateData.filter(
    function (stateData) { return stateData.id == id }
  );
}


function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          ATSC 3.0 BRH Live Status
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rftxPower = [10, 20, 30, 40]

  // const deviceState = [ (0, 'PROVISIONED'), (1, 'INIT'),(2, 'CONFIG'),(3, 'UP'),(-1, 'Down'),]
  const deviceState = ["Down", "Provisioned", "Init", "Config", "UP"]


  // UPSC 
  const [statusUpsc, setStatusUpsc] = React.useState(deviceState[0]);
  const [rfDownTimeUpsc, setRfDownTimeUpsc] = React.useState('');
  const [rfActiveTimeUpsc, setRfActiveTimeUpsc] = React.useState('');
  const [systemUpTimeUPsc, setSystemUpTimeUpsc] = React.useState('');
  const [rfTxUpsc, setRfTxUpsc] = React.useState(rftxPower[0]);
  const [tempUpsc, setTempUpsc] = React.useState(0);

  // K-51
  const [statusK_51, setStatusK_51] = React.useState(deviceState[0]);
  const [rfDownTimeK_51, setRfDownTimeK_51] = React.useState('');
  const [rfActiveTimeK_51, setRfActiveTimeK_51] = React.useState('');
  const [systemUpTimeK_51, setSystemUpTimeK_51] = React.useState('');
  const [rfTxK_51, setRfTxK_51] = React.useState(rftxPower[1]);
  const [tempK_51, setTempK_51] = React.useState(0);

  // Dhawandeep
  const [statusDhawandeep, setStatusDhawandeep] = React.useState(deviceState[0]);
  const [rfDownTimeDhawandeep, setRfDownTimeDhawandeep] = React.useState('');
  const [rfActiveTimeDhawandeep, setRfActiveTimeDhawandeep] = React.useState('');
  const [systemUpTimeDhawandeep, setSystemUpTimeDhawandeep] = React.useState('');
  const [rfTxDhawandeep, setRfTxDhawandeep] = React.useState(rftxPower[1]);
  const [tempDhawandeep, setTempDhawandeep] = React.useState(0);

  // Kanchenjunga
  const [statusKanchenjunga, setStatusKanchenjunga] = React.useState(deviceState[0]);
  const [rfDownTimeKanchenjunga, setRfDownTimeKanchenjunga] = React.useState('');
  const [rfActiveTimeKanchenjunga, setRfActiveTimeKanchenjunga] = React.useState('');
  const [systemUpTimeKanchenjunga, setSystemUpTimeKanchenjunga] = React.useState('');
  const [rfTxKanchenjunga, setRfTxKanchenjunga] = React.useState(rftxPower[1]);
  const [tempKanchenjunga, setTempKanchenjunga] = React.useState(0);

  // Shangrila
  const [statusShangrila, setStatusShangrila] = React.useState("Down");
  const [rfDownTimeShangrila, setRfDownTimeShangrila] = React.useState('');
  const [rfActiveTimeShangrila, setRfActiveTimeShangrila] = React.useState('');
  const [systemUpTimeShangrila, setSystemUpTimeShangrila] = React.useState('');
  const [rfTxShangrila, setRfTxShangrila] = React.useState(rftxPower[1]);
  const [tempShangrila, setTempShangrila] = React.useState(0);

  // UCO
  const [statusUco, setStatusUco] = React.useState(deviceState[0]);
  const [rfDownTimeUco, setRfDownTimeUco] = React.useState('');
  const [rfActiveTimeUco, setRfActiveTimeUco] = React.useState('');
  const [systemUpTimeUco, setSystemUpTimeUco] = React.useState('');
  const [rfTxUco, setRfTxUco] = React.useState(rftxPower[1]);
  const [tempUco, setTempUco] = React.useState(0);

  const rows = [
    createData('UPSC', statusUpsc, rfDownTimeUpsc, rfActiveTimeUpsc, systemUpTimeUPsc, rfTxUpsc, tempUpsc),
    createData('K 51', statusK_51, rfDownTimeK_51, rfActiveTimeK_51, systemUpTimeK_51, rfTxK_51, tempK_51),
    createData('Dhawandeep', statusDhawandeep, rfDownTimeDhawandeep, rfActiveTimeDhawandeep, systemUpTimeDhawandeep, rfTxDhawandeep, tempDhawandeep),
    createData('Kanchenjunga', statusKanchenjunga, rfDownTimeKanchenjunga, rfActiveTimeKanchenjunga, systemUpTimeKanchenjunga, rfTxKanchenjunga, tempKanchenjunga),
    createData('Shangrila', statusShangrila, rfDownTimeShangrila, rfActiveTimeShangrila, systemUpTimeShangrila, rfTxShangrila, tempShangrila),
    createData('UCO', statusUco, rfDownTimeUco, rfActiveTimeUco, systemUpTimeUco, rfTxUco, tempUco),
  ];

  React.useEffect(() => {

    // const min = 7;
      // const max = 100;
      // const rand = min + Math.random() * (max - min);
      // setTempUpsc(Math.floor(rand))

      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

          const stateData = JSON.parse(this.responseText)

          var foundUpsc = getStateData('195', stateData)
          if (foundUpsc != null && foundUpsc != undefined) {
            setStatusUpsc(deviceState[parseInt(foundUpsc[0].device_state + 1)]);
            setRfTxUpsc(rftxPower[foundUpsc[0].device_requested_tx_power]);
          }

          var foundUco = getStateData('201', stateData)
          if (foundUco != null && foundUco != undefined) {
            setStatusUco(deviceState[parseInt(foundUco[0].device_state + 1)]);
            setRfTxUco(rftxPower[foundUco[0].device_requested_tx_power]);
          }

          var foundShangrila = getStateData('207', stateData)
          if (foundShangrila != null && foundShangrila != undefined) {
            setStatusShangrila(deviceState[parseInt(foundShangrila[0].device_state + 1)]);
            setRfTxShangrila(rftxPower[foundShangrila[0].device_requested_tx_power]);
          }

          var foundKanchenjunga = getStateData('209', stateData)
          if (foundKanchenjunga != null && foundKanchenjunga != undefined) {
            setStatusKanchenjunga(deviceState[parseInt(foundKanchenjunga[0].device_state + 1)]);
            setRfTxKanchenjunga(rftxPower[foundKanchenjunga[0].device_requested_tx_power]);
          }

          var foundK_51 = getStateData('204', stateData)
          if (foundK_51 != null && foundK_51 != undefined) {
            setStatusK_51(deviceState[parseInt(foundK_51[0].device_state) + 1]);
            setRfTxK_51(rftxPower[foundK_51[0].device_requested_tx_power]);
          }

          var foundDhawandeep = getStateData('197', stateData)
          if (foundDhawandeep != null && foundDhawandeep != undefined) {
            setStatusDhawandeep(deviceState[parseInt(foundDhawandeep[0].device_state + 1)]);
            setRfTxDhawandeep(rftxPower[foundDhawandeep[0].device_requested_tx_power]);
          }

        }
      });

      xhr.open("GET", "http://174.138.120.85:3008/state");
      xhr.send();


      var xhr2 = new XMLHttpRequest();
      xhr2.withCredentials = false;
      xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeUpsc("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeUpsc("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempUpsc(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr2.open("GET", "http://174.138.120.85:3008/2");
      xhr2.send();

      var xhr3 = new XMLHttpRequest();
      xhr3.withCredentials = false;
      xhr3.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeShangrila("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeShangrila("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempShangrila(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr3.open("GET", "http://174.138.120.85:3008/3");
      xhr3.send();



      var xhr4 = new XMLHttpRequest();
      xhr4.withCredentials = false;
      xhr4.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeDhawandeep("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeDhawandeep("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempDhawandeep(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr4.open("GET", "http://174.138.120.85:3008/4");
      xhr4.send();


      var xhr5 = new XMLHttpRequest();
      xhr5.withCredentials = false;
      xhr5.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeK_51("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeK_51("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempK_51(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr5.open("GET", "http://174.138.120.85:3008/5");
      xhr5.send();


      var xhr6 = new XMLHttpRequest();
      xhr6.withCredentials = false;
      xhr6.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeKanchenjunga("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeKanchenjunga("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempKanchenjunga(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr6.open("GET", "http://174.138.120.85:3008/6");
      xhr6.send();

      var xhr7 = new XMLHttpRequest();
      xhr7.withCredentials = false;
      xhr7.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeUco("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeUco("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempUco(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr7.open("GET", "http://174.138.120.85:3008/7");
      xhr7.send();

  }, [])


  React.useEffect(() => {
    const interval = setInterval(() => {
      // const min = 7;
      // const max = 100;
      // const rand = min + Math.random() * (max - min);
      // setTempUpsc(Math.floor(rand))

      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

          const stateData = JSON.parse(this.responseText)

          var foundUpsc = getStateData('195', stateData)
          if (foundUpsc != null && foundUpsc != undefined) {
            setStatusUpsc(deviceState[parseInt(foundUpsc[0].device_state + 1)]);
            setRfTxUpsc(rftxPower[foundUpsc[0].device_requested_tx_power]);
          }

          var foundUco = getStateData('201', stateData)
          if (foundUco != null && foundUco != undefined) {
            setStatusUco(deviceState[parseInt(foundUco[0].device_state + 1)]);
            setRfTxUco(rftxPower[foundUco[0].device_requested_tx_power]);
          }

          var foundShangrila = getStateData('207', stateData)
          if (foundShangrila != null && foundShangrila != undefined) {
            setStatusShangrila(deviceState[parseInt(foundShangrila[0].device_state + 1)]);
            setRfTxShangrila(rftxPower[foundShangrila[0].device_requested_tx_power]);
          }

          var foundKanchenjunga = getStateData('209', stateData)
          if (foundKanchenjunga != null && foundKanchenjunga != undefined) {
            setStatusKanchenjunga(deviceState[parseInt(foundKanchenjunga[0].device_state + 1)]);
            setRfTxKanchenjunga(rftxPower[foundKanchenjunga[0].device_requested_tx_power]);
          }

          var foundK_51 = getStateData('204', stateData)
          if (foundK_51 != null && foundK_51 != undefined) {
            setStatusK_51(deviceState[parseInt(foundK_51[0].device_state) + 1]);
            setRfTxK_51(rftxPower[foundK_51[0].device_requested_tx_power]);
          }

          var foundDhawandeep = getStateData('197', stateData)
          if (foundDhawandeep != null && foundDhawandeep != undefined) {
            setStatusDhawandeep(deviceState[parseInt(foundDhawandeep[0].device_state + 1)]);
            setRfTxDhawandeep(rftxPower[foundDhawandeep[0].device_requested_tx_power]);
          }

        }
      });

      xhr.open("GET", "http://174.138.120.85:3008/state");
      xhr.send();


      var xhr2 = new XMLHttpRequest();
      xhr2.withCredentials = false;
      xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeUpsc("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeUpsc("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempUpsc(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr2.open("GET", "http://174.138.120.85:3008/2");
      xhr2.send();

      var xhr3 = new XMLHttpRequest();
      xhr3.withCredentials = false;
      xhr3.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeShangrila("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeShangrila("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempShangrila(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr3.open("GET", "http://174.138.120.85:3008/3");
      xhr3.send();



      var xhr4 = new XMLHttpRequest();
      xhr4.withCredentials = false;
      xhr4.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeDhawandeep("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeDhawandeep("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempDhawandeep(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr4.open("GET", "http://174.138.120.85:3008/4");
      xhr4.send();


      var xhr5 = new XMLHttpRequest();
      xhr5.withCredentials = false;
      xhr5.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeK_51("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeK_51("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempK_51(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr5.open("GET", "http://174.138.120.85:3008/5");
      xhr5.send();


      var xhr6 = new XMLHttpRequest();
      xhr6.withCredentials = false;
      xhr6.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeKanchenjunga("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeKanchenjunga("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempKanchenjunga(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr6.open("GET", "http://174.138.120.85:3008/6");
      xhr6.send();

      var xhr7 = new XMLHttpRequest();
      xhr7.withCredentials = false;
      xhr7.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          const abc = JSON.parse(this.responseText).reverse();
          if(abc.length>0){
          var totalSeconds = parseInt(abc[0].system_stats_system_uptime);
          var day = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds %= 86400) / 3600);
          totalSeconds %= 3600;
          var minutes = Math.floor((totalSeconds %= 3600) / 60);
          var seconds = totalSeconds % 60;
          setSystemUpTimeUco("Duration: " + day + " Days " + hours + ":" + minutes + ":" + seconds + "(HH:MM:SS)");

          var unixTimestampStart = abc[0].system_stats_brh_last_downtime_start;
          var dateStart = new Date(unixTimestampStart * 1000);
          var unixTimestampEnd = abc[0].system_stats_brh_last_downtime_end;
          var dateEnd = new Date(unixTimestampEnd * 1000); 
          var duration =unixTimestampEnd - unixTimestampStart;
           setRfDownTimeUco("Duration: " + dateStart.toLocaleDateString("en-US") + " " + dateStart.toLocaleTimeString("default") +" to "+ dateEnd.toLocaleDateString("en-US") + " " + dateEnd.toLocaleTimeString("default"));

           setTempUco(Math.floor(abc[0].system_stats_som_internal_temp))
        }
      }
      });
      xhr7.open("GET", "http://174.138.120.85:3008/7");
      xhr7.send();



    }, 10000)
    return () => clearInterval(interval);
  }, [])









  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
      <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 375 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}

              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover>
                      <TableCell padding="checkbox">

                      </TableCell>
                      <TableCell 
                      component="th"
                       id={labelId}
                        scope="row"
                         padding="none" 
                         >
                            {row.name} 
                             </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">{row.protein1}</TableCell>
                      <TableCell align="right">{row.protein2}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}