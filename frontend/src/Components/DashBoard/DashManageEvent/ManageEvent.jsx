import React, { useEffect, useRef } from 'react'
import "./M-Estyle.css"
import Chart from "chart.js/auto"
import DashSideBar from '../DashComponent/DashSideBar'
import DashNav from '../DashComponent/DashNav'

function ManageEvent() {
    const chartRef = useRef(null);
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d'); 
        const chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Registrations', 'Impressions'],
            datasets: [{
                label: '',
                data: [40, 45],
                backgroundColor: ['#001329', '#FFF2F2'],
                hoverOffset: 5,
                borderWidth: 0 // ✅ Removes border around segments
            }]
        },
        options: {
            plugins: {
            legend: {
                position: 'bottom', // ✅ Move legend to the end (right side)
                labels: {
                    color: "black",
                    usePointStyle: true,
                    padding: 20,
                    boxWidth: 10
                }
            },
            tooltip: {
                enabled: true
            }
            },
            cutout: '65%', // optional: controls the doughnut hole size
        }
        });

        return () => {
            chartInstance.destroy(); 
        };
    }, []);

  return (
    <div className="dashbody flex">
        <section className="sidebar-dash flex">
            <DashSideBar />
        </section>
        <section className="content-dash flex">
            <div className="navbar-dash-body">
                <DashNav />
            </div>
            <div className="content-manageEvent flex">
                <div className="upperSection-manage flex">
                    <div className="chartGraph-manage flex">
                        <div className="chartContainer">
                            <canvas ref={chartRef}></canvas>
                        </div>
                        <div className="chartInfo-manage">
                            <div><b>Total</b></div>
                            <div><i>Registrations</i></div>
                            <div className="circle-manage-chart flex">
                                45
                            </div>
                        </div>
                    </div>
                    <div className="eventUpdate-manage flex">
                        <img className='img-manage' src="/workshop.png" alt="Event Image"/>
                        <div className="manageEventDetails-manage flex">
                            <h1 className='heading-manage'><i>Eveista</i></h1>
                            <span className="description-manage">
                                An AI powered workshop by Anubhav Bakshi
                            </span>
                            <div className="extraInfo-manage flex">
                                {["For", "By", "Host", "At", "Venue"].map((v, i) => {
                                    const d = [
                                        "Bachelor of Technology",
                                        "Anshul Vishwakarma",
                                        "Anshul Vishwakarma",
                                        "9th of February, 8:00 AM",
                                        "Avirat Hotel"
                                    ];
                                    return (
                                        <div className={`${v}-manage`} key={v}>
                                            <b>{v} : </b>
                                            {d[i]}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="updateNewValue">
                                <span>New Value</span>
                                <input className='valueToUpdate' type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lowerSection-manage">
                    <div className="container-manageSectionGrid">
                        <div className="attendence-manage-container flex">
                            <h1 className='attendenceTextSpan-maage'>Attendence</h1>
                            <div className="downSection-manage-attendence flex">
                                <div className="status-score-manage">Good</div>
                                <span>40 Out of 45</span>
                            </div>
                        </div>
                    </div>
                    <div className="container-manageSectionGrid">
                        <div className="daysLeft-container flex">
                            <h1 className="spanDaysLeft">
                                <b>Days </b>
                                <i>Left</i>
                            </h1>
                            <h1 className="noOfDaysLeft">
                                14
                            </h1>
                        </div>
                    </div>
                    <div className="container-manageSectionGrid">
                        <div className="otherUpdatesDiv flex">
                            <h1 className="otherupdates-manage">Other Updates</h1>
                            <button className='updateButton-manage'>Update another Details</button>
                        </div>
                    </div>
                    
                    <div className="container-manageSectionGrid">
                        <div className="certificateDiv flex">
                            <h1 className="otherupdates-manage">Certificates</h1>
                            <button className='updateButton-manage'>Generate via AI</button>
                        </div>
                    </div>
                    <div className="container-manageSectionGrid">
                        <div className="feedbackAndRating-manage flex">
                            <h1 className='feedback-manage'>Feedback</h1>
                            <h1 className='ratings-manage'>& Ratings</h1>
                        </div>
                    </div>
                    <div className="container-manageSectionGrid">
                        <div className="otherUpdatesDiv flex">
                            <h1 className="otherupdates-manage">Ownership</h1>
                            <button style={{background : "#C32921"}} className='updateButton-manage'>Transfer ownership</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ManageEvent
