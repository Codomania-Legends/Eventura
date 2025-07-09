import { useState, React, useRef } from 'react'
import "./RightDashForm.css"
function RightDashForm({ eventData, onEventChange }) {
  const [isYes, setIsYes] = useState(false);
  const [isNo, setIsNo] = useState(true);
  const [seatCount, setSeatCount] = useState("");

  const handleYesChange = () => {
    setIsYes(true);
    setIsNo(false);
    onEventChange('limitedSeats', true);
  };
  const handleNoChange = () => {
    setIsYes(false);
    setIsNo(true);
    setSeatCount("");
    onEventChange('limitedSeats', false);
    onEventChange('seatCount', "");
  };
  const handleSeatCountChange = (e) => {
    setSeatCount(e.target.value);
    onEventChange('seatCount', e.target.value);
  };

  const fileInputRef = useRef(null);
  const [UploadLabel, setUploadLabel] = useState('Upload');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setUploadLabel(e.target.files[0].name);
      // For now, just store the file name. For actual upload, handle file upload logic.
      onEventChange('eventOutlineFile', e.target.files[0]);
    } else {
      setUploadLabel('Upload');
      onEventChange('eventOutlineFile', null);
    }
  };

  const handleChange = (field) => (e) => {
    onEventChange(field, e.target.value);
  };

  return (
    <>
      <div className="limited-seats-section flex">
        <label className="section-title">Events Limited Seats</label>
        <div className="limited-seats flex">
          <label>
            <input
              type="checkbox"
              checked={isYes}
              onChange={handleYesChange}
            />
            Yes
          </label>
          <label>
            <input
              type="checkbox"
              checked={isNo}
              onChange={handleNoChange}
            />
            No
          </label>
          <span className="count-label">If Yes Then Count :</span>
          <select
            className="custom-dropdown"
            value={seatCount}
            onChange={handleSeatCountChange}
            disabled={!isYes}
          >
            <option value="">Select</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      <div className="form-event-volunteer-name flex">
        <span>Event Volunteer's Name</span>
        <textarea placeholder='Enter Event Volunteers Name....' className="formeventvolunteer" value={eventData.volunteers || ''} onChange={handleChange('volunteers')}></textarea>
      </div>

      <div className="form-event-chief-name flex">
        <span>Event Chief Guest's Name</span>
        <textarea placeholder='Enter Event Cheif Name....' className="formeventchief" value={eventData.chiefGuest || ''} onChange={handleChange('chiefGuest')}></textarea>
      </div>
      <div className="form-event-special-mem-name flex">
        <span>Event Special Members's Name</span>
        <textarea placeholder='Enter Event Special Member Name....' className="formeventspecial" value={eventData.specialMembers || ''} onChange={handleChange('specialMembers')}></textarea>
      </div>

      <div className="form-pic-upload flex">
        <span>Event Outlines</span>
        <div className="upload-wrapper flex">
            <label htmlFor="fileUpload" className="upload-button flex">
                {UploadLabel}
                <span className="arrow">▾</span>
            </label>
            <input type="file" id="fileUpload" className="hidden-file" ref={fileInputRef} onChange={handleFileChange} />
        </div>
      </div>
    </>
  )
}

export default RightDashForm
