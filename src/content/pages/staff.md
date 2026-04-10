---
title:
permalink: /staff/
---

<style>
  .church-theme {
    background-color: #202830;
    color: #e0e0e0;
    font-family: "Georgia", serif;
    padding: 40px 20px;
    max-width: 900px;
    margin: 0 auto;
  }

  .church-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .church-header h1 {
    color: #c5a059;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .staff-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;
  }

  /* Horizontal Staff Card */
  .staff-card {
    display: flex;
    flex-direction: row;
    border: 1px solid #7d663e;
    border-radius: 4px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
    align-items: stretch;
  }

  .staff-image-wrapper {
    flex: 0 0 250px; /* Fixed width for the image */
    border-right: 1px solid #7d663e;
  }

  .staff-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .staff-content {
    padding: 25px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }

  .staff-name {
    color: #c5a059;
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  .staff-role {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
    margin-bottom: 15px;
    display: block;
  }

  .staff-bio {
    font-size: 0.85rem;
    line-height: 1.6;
    margin: 0;
  }

  /* Responsive: Stack on mobile */
  @media (max-width: 600px) {
    .staff-card {
      flex-direction: column;
    }
    .staff-image-wrapper {
      flex: none;
      width: 100%;
      height: 300px;
      border-right: none;
      border-bottom: 1px solid #7d663e;
    }
  }

  .description-box {
    border-left: 3px solid #c5a059;
    padding: 20px 30px;
    background-color: rgba(255, 255, 255, 0.03);
    line-height: 1.8;
  }
</style>
{% include "partials/church-nav.html" %}
<div class="church-theme">
  <header class="church-header">
    <h1>Our Staff</h1>
    <p>Confessional. Liturgical. Sacramental. Biblical.</p>
  </header>

  <div class="staff-list">
    <div class="staff-card">
      <div class="staff-image-wrapper">
        <img src="/assets/images/pastor.jpg" alt="Rev. Larry K. Loree">
      </div>
      <div class="staff-content">
        <span class="staff-name">Rev. Larry K. Loree</span>
        <span class="staff-role">Pastor</span>
        <p class="staff-bio">
          Reverend Larry K. Loree Jr. was installed as part-time associate pastor of Ascension of Christ in August 2021. Born in Pontiac, Michigan, Pastor Loree spent his childhood and most of his teen years in Lapeer, MI. He graduated from high school in western New York and returned to Michigan where he attended Concordia College in Ann Arbor. He met Teresa (nee Brownell) while working at Montgomery Ward and the two wed at St. Stephen’s Lutheran Church in southwest Detroit in April 1991. Pastor Loree has served congregations in Illinois, Michigan, and Pennsylvania. He also served as an Air Force chaplain in the Air National Guard in Illinois, Indiana, and Vermont. In December 2020 he retired after 25 years of total service (19 as a chaplain) in the Air Force Chaplain Corps. He and Teresa have three adult children, all of whom graduated from Lutheran high schools. In summer of 2021, upon the marriage of their daughter, they gained a wonderful son-in-law. Pastor Loree and his family reside in Clarkston.
        </p>
      </div>
    </div>

    <div class="staff-card">
      <div class="staff-image-wrapper">
        <img src="/assets/images/kantor.jpg" alt="Mrs. Emma Stegall">
      </div>
      <div class="staff-content">
        <span class="staff-name">Mrs. Emma Stegall</span>
        <span class="staff-role">Kantor - Director of Music</span>
        <p class="staff-bio">
          Mrs. Emma Stegall was commissioned and installed as Kantor/Director of Parish Music at Ascension of Christ in August 2025. In May 2025, she graduated from Concordia University in Irvine, California with a Bachelor of Arts in Music (Church Music concentration), where she was part of the handbell and orchestral programs. Emma has studied organ under Kantor Janet Muth and Dr. Tom Mueller, and currently takes lessons with Dr. Jon Eifert. She and her husband, Timothy, were married in May 2025 and are currently expecting their first son.
        </p>
      </div>
    </div>
  </div>

  <div class="description-box">
    <p>
      The church staff at Ascension of Christ are committed to the Lutheran Confessions, holding a <i>quia</i> subscription, and are active participants in the liturgical and sacramental life of our Church. Whether through theological leadership and administration of Word and Sacrament, musical excellence, or the day-to-day running of our parish office, we serve to ensure that the Gospel of Jesus Christ crucified for sinners remains at the center of everything we do here at Ascension of Christ.
    </p>
  </div>

</div>