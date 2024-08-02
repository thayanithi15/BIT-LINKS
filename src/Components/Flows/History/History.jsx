import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
import Start from "../../../Assets/History/start.png";
import Call from "../../../Assets/History/normalcall.png";
import File from "../../../Assets/History/file.png";
import Agent from "../../../Assets/History/agent.png";
import Missedcall from "../../../Assets/History/missedcall.png";
import Sms from "../../../Assets/History/roundsms.png";
import Mail from "../../../Assets/History/roundmail.png";
import Message from "../../../Assets/History/roundmessage.png";
import User from "../../../Assets/History/client.png";
import Reschedule from "../../../Assets/History/rescheduled.png";
import Tick from "../../../Assets/History/tick.png";
import Warning from "../../../Assets/History/warning.png";
import "./History.css";

const steps = [
  {
    icon: Call,
    call: "Call",
    date: "06/21 - 12:07 PM",
    content: "Hello. Thank you for calling...",
  },
  {
    icon: Missedcall,
    call: "Missed Call",
    date: "06/21 - 12:07 PM",
    content: "Hi. I saw your commercial and wanted to learn more. Call me...",
  },
  {
    icon: Sms,
    call: "SMS",
    date: "06/21 - 12:07 PM",
    content: "Yes, I will be available this afternoon. Please have them ready...",
  },
  {
    icon: Mail,
    call: "Email",
    date: "06/21 - 12:07 PM",
    content: "Thank you for your assistance.",
  },
  {
    icon: Message,
    call: "Messenger",
    date: "06/21 - 12:07 PM",
    content: "Thank you for your assistance.",
  },
  {
    icon: User,
    call: "Lead Created",
    date: "06/21 - 12:07 PM",
    content: "",
  },
  {
    icon: User,
    call: "Client as of",
    date: "06/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Reschedule,
    call: "Reschedule",
    date: "06/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Tick,
    call: "Completed first Task",
    date: "07/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Warning,
    call: "First Task incomplete",
    date: "07/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Tick,
    call: "Completed 13 months of Project",
    date: "06/21 - 12:07 PM",
    content: "",
  },
  {
    icon: Warning,
    call: "Did not complete 13 months of Task",
    date: "07/21 - 12:07 PM",
    content: "",
  },
];

const CustomStepIcon = ({ src, className }) => (
  <img src={src} alt="step icon" className={className} />
);

export default function History() {
  const handleClickShowVisit = () => {
    // Your handle click function here
  };

  return (
    <div className="history-container">
      <Stepper orientation="vertical">
        <Step>
          <StepLabel
            StepIconComponent={() => (
              <CustomStepIcon src={Start} className="step-icon-start" />
            )}
          >
            <div className="call">
              <div className="call-title-start">Account Created:</div>
              <div className="date">06/21 - 12:07 PM</div>
            </div>
          </StepLabel>
        </Step>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIcon
                  src={step.icon}
                  className="step-icon"
                />
              )}
            >
              <div className="call">
                <div className="call-title">{step.call}</div>
                <div className="date">{step.date}</div>
              </div>
            </StepLabel>
            <StepContent>
              <Typography>
                {step.content && (
                  <div className="file-container">
                    <img src={File} alt="file" className="fileimg" />
                    <p className="file-content">
                      {step.content}
                      <i
                        onClick={handleClickShowVisit}
                        className="fa-solid fa-chevron-right"
                      ></i>
                    </p>
                  </div>
                )}
                <div className="agent-container">
                  <img src={Agent} alt="agent" className="agentimg" />
                  <p className="agent-content">Hannah Wells</p>
                </div>
              </Typography>
            </StepContent>
          </Step>
        ))}
        <Step>
          <StepLabel
            StepIconComponent={() => (
              <CustomStepIcon src={Start} className="step-icon-start" />
            )}
          >
            <div className="call">
              <div className="call-title-start">Prospect Auto-Generated:</div>
              <div className="date">06/21 - 12:07 PM</div>
            </div>
          </StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}
