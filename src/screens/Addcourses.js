import React, { useState } from 'react';
import './Addcourses.css';

function Addcourses() {
  // State for five inputs
  const [courseName, setCourseName] = useState('');
  const [discrip1, setDiscrip1] = useState('');  // Fixed variable name
  const [discrip2, setDiscrip2] = useState('');  // Fixed variable name
  const [discrip3, setDiscrip3] = useState('');  // Fixed variable name
  const [price, setPrice] = useState('');        // Fixed variable name

  // Handle input changes
  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleDiscrip1Change = (e) => {           // Fixed function name
    setDiscrip1(e.target.value);
  };

  const handleDiscrip2Change = (e) => {           // Fixed function name
    setDiscrip2(e.target.value);
  };

  const handleDiscrip3Change = (e) => {           // Fixed function name
    setDiscrip3(e.target.value);
  };

  const handlePriceChange = (e) => {              // Fixed function name
    setPrice(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create course object - FIXED: using values not setters
    const newCourse = {
      courseName: courseName,
      description1: discrip1,
      description2: discrip2,
      description3: discrip3,
      price: price
    };
    
    console.log('New Course Added:', newCourse);
    
    // You can add your logic here to save the data
    alert('Course added successfully!');
    
    // Optional: Clear form after submission
    // handleReset();
  };

  // Handle form reset
  const handleReset = () => {
    setCourseName('');
    setDiscrip1('');  // Fixed
    setDiscrip2('');  // Fixed
    setDiscrip3('');  // Fixed
    setPrice('');     // Fixed
  };

  return ( 
    <div className="addcourses-container">
      <h2 className="addcourses-title">
        <span className="title-icon">📚</span>
        Add New Course
      </h2>
      
      <form onSubmit={handleSubmit} className="addcourses-form">
        <div className="form-group">
          <label htmlFor="courseName">
            Course Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={handleCourseNameChange}
            placeholder="Enter course name"
            className="orange-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="discrip1">
            Description First <span className="required">*</span>
          </label>
          <input
            type="text"
            id="discrip1"
            value={discrip1}                    // Fixed: using discrip1 not setter
            onChange={handleDiscrip1Change}      // Fixed: using correct handler
            placeholder="Enter first description"
            className="orange-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="discrip2">
            Description Second <span className="required">*</span>
          </label>
          <input
            type="text"
            id="discrip2"
            value={discrip2}                     // Fixed: using discrip2 not setter
            onChange={handleDiscrip2Change}       // Fixed: using correct handler
            placeholder="Enter second description"
            className="orange-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="discrip3">
            Description Third <span className="required">*</span>
          </label>
          <input
            type="text"
            id="discrip3"
            value={discrip3}                      // Fixed: using discrip3 not setter
            onChange={handleDiscrip3Change}       // Fixed: using correct handler
            placeholder="Enter third description"
            className="orange-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">
            Course Price <span className="required">*</span>
          </label>
          <input
            type="number"                         // Changed to number type for price
            id="price"
            value={price}                          // Fixed: using price not setter
            onChange={handlePriceChange}           // Fixed: using correct handler
            placeholder="Enter course price"
            className="orange-input"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            <span className="btn-icon">➕</span>
            Add Course
          </button>
          
          <button type="button" className="reset-btn" onClick={handleReset}>
            <span className="btn-icon">🔄</span>
            Reset Form
          </button>
        </div>
      </form>

      {/* Preview Section */}
      {(courseName || discrip1 || discrip2 || discrip3 || price) && (
        <div className="preview-section">
          <h3 className="preview-title">Preview:</h3>
          <div className="preview-content">
            {courseName && <p><strong>Course Name:</strong> {courseName}</p>}
            {discrip1 && <p><strong>Description 1:</strong> {discrip1}</p>}
            {discrip2 && <p><strong>Description 2:</strong> {discrip2}</p>}
            {discrip3 && <p><strong>Description 3:</strong> {discrip3}</p>}
            {price && <p><strong>Price:</strong> ${price}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Addcourses;