import React from "react";
import { Card } from "react-bootstrap";
import "./List.css"; // Make sure your CSS is correctly linked

function List() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();

  const sessions = [
    {
      name: "Budget Session",
      date: "22 April 2024",
      agenda: "Budget",
      mp: "Mrs. Nirmala Sitaraman",
      color: "green", // You can assign colors directly or derive them from some function
      ongoing: false,
    },
    {
      name: "Winter Session",
      date: "18 January 2024",
      agenda: "Coal and Petroleum",
      mp: "Mr. Pralhad Joshi",
      color: "blue",
      ongoing: false,
    },
    {
      name: "Monsoon Session",
      date: "13 December 2023",
      agenda: "Regulate the Appointment",
      mp: "Amit Shah Ji",
      color: "red",
      ongoing: false,
    },
    {
      name: "Current Session",
      date: "Now",
      agenda: "Repeal Certain Enactment",
      mp: "MP 7",
      color: "purple",
      ongoing: true,
    },
  ];

  return (
    <>
      <section className="sessionListSec">
        <div className="container">
          <h2 className="listHdng">Welcome Mantri Ji</h2>
          <div className="srchSessionDiv">
            <input
              type="text"
              placeholder="Search Session..."
              className="form-control"
            />
            <button className="srchBtn">Search</button>
          </div>
          <div className="sessionListDiv d-flex flex-wrap justify-content-start">
            {sessions.map((session, index) => (
              <Card
                key={index}
                className="sessionCard m-2"
                style={{
                  width: "45%",
                  borderColor: session.color, // Apply the color dynamically
                  borderWidth: "3px",
                  borderStyle: "solid",
                }}
              >
                <Card.Body>
                  <Card.Title>{session.name}</Card.Title>
                  <Card.Text>
                    <strong>Date of Session:</strong> {session.date}
                    <br />
                    <strong>Agenda of Session:</strong> {session.agenda}
                    <br />
                    <strong>Name of the MP:</strong> {session.mp}
                  </Card.Text>
                  {session.ongoing ? (
                    <button className="btn btn-danger">Join</button>
                  ) : (
                    <button className="btn btn-success">View</button>
                  )}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default List;
