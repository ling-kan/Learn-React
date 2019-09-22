import React from 'react';

function reduxButton(props) {
    return (
    <div className="form">
             <h1>Redux Notes App</h1>

<h3>Add a Note</h3>
<form id="add-note">
  Title: <br /> 
  <input type="text" name="title"></input>
  <br />
  Content: <br />
  <textarea name="content" cols="30" rows="5"></textarea>
  <br />
  <button type="submit">Add Note</button>
</form>

<hr />

<h3>All Notes</h3>
<ul id="notes">
  <li>
    <b>Title</b>
    <button data-id="5">x</button>
    <br />
    <span>Note Content</span>
  </li>
</ul>
 </div>
    )
}
export default reduxButton
