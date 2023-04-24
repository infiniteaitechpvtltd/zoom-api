require("firebase/compat/auth");
require("firebase/compat/firestore");
require("firebase/compat/database");
require("firebase/compat/storage");
const firebase = require("firebase/compat/app");
const express = require("express");
const dotnev = require("dotenv");
const cors = require("cors");
const rp = require("request-promise");
const jwt = require("jsonwebtoken");
//const moment = require("moment");
require("colors");
require("dotenv").config();
const helmet = require("helmet");

const bodyParser = require("body-parser");
//const crypto = require("crypto");
const KJUR = require("jsrsasign");
dotnev.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.options("*", cors());

const firebaseConfig = {
  // add your Firebase project configuration here
 
};

firebase.initializeApp(firebaseConfig);

app.use(
  helmet({
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: "same-origin",
  })
);

app.listen(4000, () => {
  console.log(
    `server start on ---> `.yellow + `http://localhost:${4000}`.cyan.underline
  );
});

app.get("/", (req, res) => {
  res.send("Hey There , Greetings From The backend Server. Have a Good Day :)");
});

const config = {
  production: {
    APIKey: "",
    APISecret: "",
  },
};

const payload = {
  iss: "jlRYHrDKRneSfIJmLWM7dw", //your API KEY
  exp: new Date().getTime() + 5000,
};
const token = jwt.sign(payload, ""); //your API SECRET HERE

app.get("/createMeeting", (req, res) => {
  let email = ""; // your zoom developer email account
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: "check in web",
      host_email: "",
      agenda: "testing",
      type: 2,
      timezone: "Asia/Kolkata",

      duration: 120,
      start_time: "2023-04-11T23:40:00Z",
      // end_date_time: "2023-04-11T23:59:00Z",
      // id: 92674392836,
      password: "123456",
      // h323_password: "123456",
      pre_schedule: true,
      // schedule_for: "patels.monil@gmail.com",

      settings: {
        host_video: false,
        mute_upon_entry: true,
        participant_video: false,
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      console.log("response is: ", response);
      res.send("create meeting result: " + JSON.stringify(response));
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});

app.post("/newmeeting", (req, res) => {
  let email = "";
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: req.body.topic,
      // host_email: "patels.monil@gmail.com",
      agenda: req.body.agenda,
      type: 2,

      duration: 120,

      // password: "123456",
      // h323_password: "123456",

      // schedule_for: "patels.monil@gmail.com",
      // created_at:"2023-04-11T23:52:19Z",

      timezone: "Asia/Calcutta",

      pre_schedule: false,
      start_time: "2023-04-14T23:30:00",

      settings: {
        host_video: false,
        mute_upon_entry: true,
        participant_video: false,
        video: false,
        audio: "voip",

        // cn_meeting: false,
        // in_meeting: false,
        // join_before_host: false,
        // jbh_time: 0,

        // watermark: false,
        // use_pmi: false,
        // approval_type: 2,
        // audio: "voip",
        // auto_recording: "none",
        // enforce_login: false,
        // enforce_login_domains: "",
        //  alternative_hosts: 'moni',
        // alternative_host_update_polls: false,
        // close_registration: false,
        // show_share_button: false,
        allow_multiple_devices: false,
        // registrants_confirmation_email: true,
        // waiting_room: true,
        // request_permission_to_unmute_participants: false,
        // registrants_email_notification: true,
        // meeting_authentication: false,
        // encryption_type: "enhanced_encryption",
        // approved_or_denied_countries_or_regions: { enable: false },
        // breakout_room: { enable: false },
        // alternative_hosts_email_notification: true,
        // show_join_info: false,
        // device_testing: false,
        // focus_mode: false,
        // enable_dedicated_group_chat: false,
        // private_meeting: false,
        // email_notification: true,
        // host_save_video_order: false,
      },
    },
    auth: {
      bearer: process.env.token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      console.log("response is: ", response);
      res.status(201).send(response);
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});

app.post("/", (req, res) => {
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  //const exp = iat + 60 * 60 * 2;
  const exp = iat + 60 * 2;

  const oHeader = { alg: "HS256", typ: "JWT" };

  const oPayload = {
    sdkKey: "",
    mn: req.body.meetingNumber,
    role: req.body.role,
    iat: iat,
    exp: exp,
    appKey: "5RpWkbq9TNpmbS4qIg6yw",
    tokenExp: iat + 60 * 60 * 2,
  };

  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  const signature = KJUR.jws.JWS.sign(
    "HS256",
    sHeader,
    sPayload,
    ""
  );
  console.log(signature);

  res.json({
    signature: signature,
  });
});

app.post("/api/login", (req, res) => {
  //console.log(req.body.user.password);
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.user.email, req.body.user.password)
    .then((res1) => {
      console.log(res1);
      //console.log(res1.user._delegate.accessToken);

      //console.log(res1.user._delegate.uid);
      res.status(200).send({
        sucess: true,
        token: res1.user._delegate.accessToken,
      });

      //   localStorage.setItem("auth-token-id", res.data._id);
      //   navigate.push("/welcome");
    })
    .then((res1) => {})
    .catch((err1) => {
      //console.log(err1);
      res.status(401).send({
        sucess: false,
        msg: "plz login with corrent credentials",
      });
    });
});

app.post("/restapi/login", (req, res) => {
  var options = {
    method: "POST",
    uri: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZg7kdv6WccQ3IB8oXfnvV2mveo-2sVy8",
    body: {
      email: "patels.monil@gmail.com",
      password: "123456",
      returnSecureToken: true,
    },

    headers: {
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      console.log("RESTAPI response is: ", response);
      res.status(201).send(response);
    })
    .catch(function (err) {
      // API call failed...
      console.log("RESTAPI call failed, reason ", err);
      res.status(401).send(err);
    });
});
