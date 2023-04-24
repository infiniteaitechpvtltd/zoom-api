import React from "react";
import '../App.css'


import ZoomMtgEmbedded from "@zoomus/websdk/embedded";


function AppNew() {
  const client = ZoomMtgEmbedded.createClient();

  
  var authEndpoint = "http://localhost:4000";
  var sdkKey = "";
  var meetingNumber = "73050531999";
  var passWord = "719rju";
  var role = 0;
  var userName = "React";
  var userEmail = "";
  var registrantToken = "";
  var zakToken = "";
  var leaveUrl = "http://localhost:3000";

  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        startMeeting(response.signature);
      })
      .catch((error) => {
        //console.error(error);
      });
  }


  

  function startMeeting(signature) {
    let meetingSDKElement = document.getElementById("meetingSDKElement");

    client.init({
      debug: false,
      leaveUrl: leaveUrl,
      isHideVideoButton: true,
      disableShowMeetingInfo: true,
      disableInvite: true,

      zoomAppRoot: meetingSDKElement,
      language: "en-US",
      customize: {

        video: {
          viewSizes: {
            height: 400,
             width:400,     
              },

        },
        meetingInfo: [
          "topic",
          "host",
          "mn",
          "pwd",
          "telPwd",
          "invite",
          "participant",
          "dc",
          "enctype",
        ],
        toolbar: {
          buttons: [
            {
              text: "Custom Button1",
              className: "CustomButton",
              onClick: () => {
                console.log("custom button");
              },
            },
          ],
        },
      },
    });

    client.join({
      signature: signature,
      sdkKey: sdkKey,
      meetingNumber: meetingNumber,
      password: passWord,
      userName: userName,
      userEmail: userEmail,
    
    });
  }

   

  

  return (
    <div className="App">
      <main>
        <div className=" container  h1  text-center text-success ">
          Welcome To innovative school
        </div>

        {/* For Component View */}
        <div id="meetingSDKElement" style={{ height: "80vh", width: "80vw" }}>
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>

        <button onClick={getSignature} className="btn btn-success">Join Meeting</button>
      </main>
    </div>
  );
}

export default AppNew;
