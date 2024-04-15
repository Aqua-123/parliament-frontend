import React from "react";
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';

function List() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop()
  return (
    <>
     <section className="sessionListSec">
        <div className="container">
            <h2 className="listHdng">Welcome Mantri Ji</h2>
            <div className="srchSessionDiv"><input type="text" placeholder="Search Session..." className="form-control" /> <button className="srchBtn">Search</button></div>
            <div className="sessionListdiv">
         <ul>
            <li>
           <div className="sessionName"><span>Session Name:</span> Session 1</div>
           <div className="sessionName dateS"><span>Date of Session:</span> 22 April 2024</div>
           <div className="sessionName agndaS"><span>Agenda of Session:</span> Budget</div>
           <div className="sessionName mpName"><span>Name of the MP:</span> Mrs. Nirmala Sitaraman</div>
            </li>
            <li>
           <div className="sessionName"><span>Session Name:</span> Session 2</div>
           <div className="sessionName dateS"><span>Date of Session:</span> 18 January 2024</div>
           <div className="sessionName agndaS"><span>Agenda of Session:</span> coal and petroleum</div>
           <div className="sessionName mpName"><span>Name of the MP:</span> Mr. Pralhad Joshi</div>
            </li>
            <li>
           <div className="sessionName"><span>Session Name:</span> Session 3</div>
           <div className="sessionName dateS"><span>Date of Session:</span> 13 December 2023</div>
           <div className="sessionName agndaS"><span>Agenda of Session:</span> Regulate the Appointment</div>
           <div className="sessionName mpName"><span>Name of the MP:</span> Amit Shah Ji</div>
            </li>
            <li>
           <div className="sessionName"><span>Session Name:</span> Session 4</div>
           <div className="sessionName dateS"><span>Date of Session:</span> 11 October 2023</div>
           <div className="sessionName agndaS"><span>Agenda of Session:</span> Repeal Certain Enactment</div>
           <div className="sessionName mpName"><span>Name of the MP:</span> MP 7</div>
            </li>
            <li>
           <div className="sessionName"><span>Session Name:</span> Agenda 3</div>
           <div className="sessionName dateS"><span>Date of Session:</span> 11 July 2022</div>
           <div className="sessionName agndaS"><span>Agenda of Session:</span> Budget</div>
           <div className="sessionName mpName"><span>Name of the MP:</span> MP 8</div>
            </li>
         </ul>
         </div>
         <div className="paginationDiv">
         <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
         </div>
        </div>
      </section>
    </>
  );
}

export default List;
