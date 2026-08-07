export default function ShiftForm() {
  return (
    <div className="shift-form">
      <h2>Create Shift</h2>

      <form>
        <div className="form-group">
          <label htmlFor="employee">Employee</label>
          <input type="text" id="employee" placeholder="Enter employee name" />
        </div>

        <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date"/>
        </div>

        <div className="form-group">
            <label htmlFor="startTime">Start Time</label>
            <input type="time" id="startTime" />
        </div>

        <div className="form-group">
            <label htmlFor="endTime">End Time</label>
            <input type="time" id="endTime" />
        </div>
        <button type="submit">Create Shift</button>
      </form>
    </div>
  );
}
