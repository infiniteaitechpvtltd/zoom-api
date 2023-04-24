import React, { useLayoutEffect } from "react";
//import "../styles/AppNewC.css";
import '../../node_modules/@zoomus/websdk/dist/css/bootstrap.css';
import '../../node_modules/@zoomus/websdk/dist/css/react-select.css';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";



function AppNewH() {

   const location = useLocation();
  let path = location.pathname.split("/")[2];
  

   const { product } = useSelector((state) => state.zoom);
   let zm = product[Number(path)];
   
  
    
    
      var authEndpoint = "http://localhost:4000";
      var sdkKey = "";
      var meetingNumber = String(zm.meetingNumber);
      var passWord = zm.passWord;
      var role = zm.role;
      var userName = "host(school name)";
      var userEmail = "";
      var registrantToken = "";
      var zakToken = "";
      var leaveUrl = "http://localhost:3000";
      
    

    useLayoutEffect( () => {
        
        
        async function mt() {

            
          const { ZoomMtg } = require("@zoomus/websdk")
          ZoomMtg.setLogLevel(0);
          
             let zt = async () => {
               // ZoomMtg.setZoomJSLib(

               //   "/node_modules/@zoomus/websdk/dist/lib", "/av"
               // );
               await ZoomMtg.setZoomJSLib(
                 "https://source.zoom.us/2.11.0/lib",
                 "/av"
               );
             };

             zt();
            
         
            
          ZoomMtg.preLoadWasm();
          ZoomMtg.prepareJssdk();
          
        

                // loads language files, also passes any error messages to the ui
                ZoomMtg.i18n.load("en-US");
            ZoomMtg.i18n.reload("en-US");
            
            
          
            

              function getSignature() {
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
                    console.error(error);
                  });
              }

              function startMeeting(signature) {
                document.getElementById("zmmtg-root").style.display = "block";

                ZoomMtg.init({
                  leaveUrl: leaveUrl,
                 
    debug: false, //optional
    showMeetingHeader: false, //option
    disableInvite: false, //optional
    disableCallOut: false, //optional
    disableRecord: false, //optional
    disableJoinAudio: false, //optional
    audioPanelAlwaysOpen: true, //optional
    showPureSharingContent: false, //optional
    isSupportAV: true, //optional,
    isSupportChat: true, //optional,
    isSupportQA: true, //optional,
    isSupportPolling: true, //optional
    isSupportBreakout: true, //optional
    isSupportCC: true, //optional,
    screenShare: true, //optional,
    rwcBackup: '', //optional,
    videoDrag: true, //optional,
    sharingMode: 'both', //optional,
    videoHeader: true, //optional,
    isLockBottom: true, // optional,
    isSupportNonverbal: true, // optional,
    isShowJoiningErrorDialog: true, // optional,
    disablePreview: false, // optional
    disableCORP: true, // optional
    inviteUrlFormat: '', // optional
    loginWindow: {  // optional,
      width: 400,
      height: 380
    },
                  success: (success) => {
                    console.log(success);
                     ZoomMtg.showJoinAudioFunction({
                       show: true,
                     });
                     ZoomMtg.showMeetingHeader({
                       show: true,
                     });

                      ZoomMtg.join({
                         
                      signature: signature,
                      sdkKey: sdkKey,
                      meetingNumber: meetingNumber,
                      passWord: passWord,
                      userName: userName,
                      userEmail: userEmail,
                      //   tk: registrantToken,
                      //   zak: zakToken,
                      success: (success) => {
                        console.log(success);

                       
                      },
                      error: (error) => {
                        console.log(error);
                      },
                    });
                  },
                  error: (error) => {
                    console.log(error);
                  },
                });
              }

              getSignature();
  




        }

        mt();
      

        
      
       
       

      
        
      
            
        

       

    },[])
   

  
   

  return (
    <div className="App">
     
     
    </div>
  );
}

export default AppNewH;
