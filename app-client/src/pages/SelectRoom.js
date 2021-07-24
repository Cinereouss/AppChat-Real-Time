import React from 'react';

const SelectRoom = () => {
  return (
    <>
      <div className="join-container">
        <header className="join-header">
          <h1>
            <i className="fas fa-smile"></i> Select Chat Room
          </h1>
        </header>
        <main className="join-main">
          <form action="/chat">
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username..."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="room">Room</label>
              <select name="room" id="room">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <button type="submit" className="btn">
              Join Chat
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default SelectRoom
