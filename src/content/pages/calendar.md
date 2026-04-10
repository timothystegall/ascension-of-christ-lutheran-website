---
title:
permalink: /calendar/
---
{% include "partials/church-nav.html" %}

<style>
  .calendar-theme {
    background-color: #202830;
    color: #e0e0e0;
    font-family: "Georgia", serif;
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  .calendar-header h1 {
    color: #c5a059;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }

  /* The Container that styles the Google Iframe */
  .calendar-container {
    position: relative;
    padding-bottom: 75%; /* Aspect Ratio */
    height: 0;
    overflow: hidden;
    border: 2px solid #7d663e; /* Our Gold Border */
    border-radius: 4px;
    background: #ffffff; /* Google Calendar's default background */
  }

  .calendar-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .calendar-footer {
    margin-top: 30px;
    color: #a1b5cb; /* Light blue accent */
    font-style: italic;
  }
</style>

<div class="calendar-theme">

  <header class="calendar-header">
    <h1>Church Calendar</h1>
    <p style="margin-bottom: 25px;">Life in the Body of Christ: Feasts, Festivals, and Divine Services. Parish Events, Group Meetings, and Potlucks.</p>
  </header>

  <div class="calendar-container">
    <iframe src="https://calendar.google.com/calendar/embed?src=758d7e0cac042775be1396e7eb0e22422068cf0b0cf402998c3e0a1e9b42782e%40group.calendar.google.com&ctz=America%2FDetroit" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  </div>

  <div class="calendar-footer">
    <p>Dates for Midweek Matins and Vespers during Advent and Lent are noted above.</p>
  </div>

</div>