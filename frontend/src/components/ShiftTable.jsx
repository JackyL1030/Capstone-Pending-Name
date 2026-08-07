export default function ShiftTable() {
  return (
    <div className="shift-table">
      <h2>Today's Shifts</h2>

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Smith</td>
            <td>Aug 7</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td className="status scheduled" >Scheduled</td>
          </tr>

          <tr>
            <td>Sarah Lee</td>
            <td>Aug 7</td>
            <td>12:00 PM</td>
            <td>8:00 PM</td>
            <td className="status scheduled">Scheduled</td>
          </tr>

          <tr>
            <td>Mike Brown</td>
            <td>Aug 7</td>
            <td>10:00 AM</td>
            <td>6:00 PM</td>
            <td className="status scheduled">Scheduled</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}