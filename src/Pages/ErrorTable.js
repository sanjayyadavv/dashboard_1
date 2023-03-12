import React from 'react'
import { Table } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const style = {
    table: {
      display: 'table',
    },
    th: {
      top: 0,
      left: 0,
      zIndex: 2,
      position: 'sticky',
      backgroundColor: '#fff',
    },
  };

function ErrorTable() {
    return (
        <div style={{
             padding: 30,
        }}>
            <h4>Device Logs </h4>
            <Table bordered={true} style={{maxHeight:'100px'}} >
                <thead>
                    <tr>
                        <th>Error</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Error id 0x44: quam adipiscing vitae proin sagittis nisl rhoncus</td>
                    </tr>
                    <tr>
                        <td>Error id 0x43: vestibulum rhoncus est pellentesque elit ullamcorper dignissim</td>
                    </tr>
                    <tr>
                        <td>Error id 0x55: quam vulputate dignissim suspendisse in est ante</td>
                    </tr>
                    <tr>
                        <td>Error id 0x55: nulla aliquet porttitor lacus luctus accumsan tortor</td>
                    </tr>
                    <tr>
                        <td>Error id 0x55: id ornare arcu odio ut sem nulla</td>
                    </tr>
                    <tr>
                        <td>Error id 0x55: aliquam etiam erat velit scelerisque in dictum</td>
                    </tr>
                    <tr>
                        <td>Error id 0x55: bibendum arcu vitae elementum curabitur vitae nunc</td>
                    </tr>
                    <tr>
                        <td>Error id 0x55: AAAnulla aliquet porttitor lacus luctus accumsan tortor</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
  
export default ErrorTable;