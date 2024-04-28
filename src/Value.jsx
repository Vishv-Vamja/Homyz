import React, { useState } from "react";
import "./Value.css";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Accordiont from "./Accordiont";
import img from "./images/img5.png";

function Value() {
    return (
        <section className="v-wrapper" id="our-value">
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src={img} alt="Our Company Logo" />
                    </div>
                </div>
                {/* Right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span className="secondaryText">
                        We are always ready to help by providing the best services for you.
                        <br />
                        We believe a good place to live can make your life better.
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {Accordiont.map((item) => (
                            <AccordionItem
                                className="accordionItems"
                                key={item.heading}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">
                                        <AccordionItemState>
                                            {({ expanded }) =>
                                                expanded ? "" : ""
                                            }
                                        </AccordionItemState>
                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    {/* Add content for each panel */}
                                    {item.detail}
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default Value;
