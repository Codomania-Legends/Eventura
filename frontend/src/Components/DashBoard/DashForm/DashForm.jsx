import React from 'react'
import "./LeftDashForm.css"
import DashNav from '../DashComponent/DashNav'
import DashSideBar from '../DashComponent/DashSideBar'
import LeftDashForm from './LeftDashForm';
import RightDashForm from './RightDashForm';
function DashForm() {
    const inputs = document.querySelectorAll(".input-box input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
        const val = input.value;
        if (index === 0 && (val > 31 || val < 1)) input.value = ""; // DD
        if (index === 1 && (val > 12 || val < 1)) input.value = ""; // MM
        if (index === 2 && val.length > 4) input.value = val.slice(0, 4); // YYYY
        });
    });

    // const amBtn = document.querySelector(".am");
    // const pmBtn = document.querySelector(".pm");

    // function clearSelection() {
    //     amBtn.classList.remove("selected");
    //     pmBtn.classList.remove("selected");
    // }

    // amBtn.addEventListener("click", () => {
    //     clearSelection();
    //     amBtn.classList.add("selected");
    // });

    // pmBtn.addEventListener("click", () => {
    //     clearSelection();
    //     pmBtn.classList.add("selected");
    // });
  return (
    <>
        <div className="dashbody flex">
            <section className="sidebar-dash flex">
                <DashSideBar />
            </section>
            <section className="content-dash flex">
                <div className="navbar-dash-body">
                    <DashNav />
                </div>
                <div className="head-sec flex">
                    <i class="fa-solid fa-arrows-turn-right"></i>
                    <h1>Event Information</h1>
                </div>
                <section className="form-detail-sec flex">
                    <section className="left-info-sec flex">
                        <LeftDashForm/>
                    </section>
                    <div className="center-line"></div>
                    <section className="right-info-sec flex">
                        <RightDashForm/>
                    </section>
                </section>
            </section>
        </div>
    </>
  )
}

export default DashForm