---
title:
permalink: /worship/
---
{% include "partials/church-nav.html" %}

<style>
  :root {
    --bg-dark: #202830;
    --gold: #c5a059;
    --accent-blue: #a1b5cb;
    --text-light: #e0e0e0;
    --border-dim: #4a5568;
    --gold-dim: #7d663e;
  }

  .worship-theme {
    background-color: var(--bg-dark);
    color: var(--text-light);
    font-family: "Georgia", serif;
    padding: 40px 20px;
    max-width: 950px;
    margin: 0 auto;
  }

  .worship-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .worship-header h1 {
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px;
    font-size: 2.2rem;
  }

  .divine-service-hero {
    border: 1px solid var(--gold);
    background: linear-gradient(180deg, rgba(32, 40, 48, 1) 0%, rgba(161, 181, 203, 0.05) 100%);
    padding: 0 0 40px 0;
    margin-bottom: 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .divine-service-hero img {
    width: 100%;
    /* Reduced from 400px to 250px or 300px depending on your preference */
    max-height: 280px; 
    
    /* 'cover' ensures the image fills the area without stretching */
    object-fit: cover; 
    
    /* This ensures that as the image gets shorter, we don't cut off the heads */
    /* Adjust the percentage to move the 'camera' up or down */
    object-position: 50% 20%; 
    
    display: block;
    border-bottom: 1px solid var(--gold-dim);
    margin-bottom: 30px;
  }

  .service-time {
    font-size: 2.8rem;
    color: var(--color-light);
    font-weight: bold;
    display: block;
    border-top: 1px solid var(--border-dim);
    border-bottom: 1px solid var(--border-dim);
    padding: 10px 0;
    max-width: 300px;
    margin: 15px auto;
  }

  /* Music and Service Sections */
  .info-block {
    border-left: 3px solid var(--gold);
    background: rgba(255, 255, 255, 0.02);
    padding: 25px 40px;
    margin-bottom: 40px;
  }

  .info-block h2 {
    color: var(--accent-blue);
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-top: 0;
  }

  .info-block p {
    margin-top: 0.25rem;
  }

  .liturgy-parts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
    font-size: 0.95rem;
  }

  .liturgy-parts strong {
    color: var(--gold);
  }

  @media (max-width: 600px) {
    .liturgy-parts { grid-template-columns: 1fr; }
  }
</style>

<div class="worship-theme">

  <header class="worship-header">
    <h1>The Divine Service</h1>
    <p style="color: var(--accent-blue); font-style: italic;">God's Service</p>
  </header>

  <div class="divine-service-hero">
    <img src="/assets/images/cranach-wittenberg-altarpiece.jpg" alt="Cranach Altarpiece">
    <p style="font-size: 1.1rem; margin-top: 20px;">Divine Service with Weekly Holy Communion</p>
    <span style="color: var(--accent-blue); text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px; display: block; margin-top: 10px;">Every Sunday</span>
    <span class="service-time">10:15 AM</span>
    
    <a href="/path-to-your-bulletin.pdf" class="bulletin-link" style="text-decoration: underline;">View This Sunday's Bulletin</a>
    
    <p style="font-size: 1rem; margin-top: 20px;">
        <i>Bible Class - 9:00 AM</i>
    </p>
  </div>

  <div class="info-block">
    <h2>Closed Communion</h2>
    <p>Due to our confession of the Eucharist being the true Body and Blood of Christ, we practice the historic discipline of Closed Communion. Visitors who desire to commune are kindly asked to speak with the Pastor before the service.</p>
  </div>

  <div class="info-block">
    <h2>Choir & Handbell Program</h2>
    <p>Music at Ascension of Christ is not entertainment, but a vehicle for the Word. We invite members to participate in the choral and instrumental life of the parish:</p>
    <ul style="list-style-type: none; padding: 0;">
      <li style="margin-bottom: 10px;">• <strong>Parish Choir:</strong> Occassionally leads the congregation in the Propers and Ordinary, as well as historic hymns and anthems.</li>
      <li>• <strong>Handbell Choir:</strong> Adds festive solemnity to our major feasts and festival services throughout the Church Year.</li>
    </ul>
  </div>

  <div class="info-block">
    <h2>Understanding the Liturgy: The Divine Service</h2>
    <p>We primarily utilize <strong>Setting Three</strong> from the <em>Lutheran Service Book (LSB)</em>. Based on the historic "Common Service," which itself has its roots in the historic liturgy of the Western Church, it is a choral dialogue between the Pastor and the Congregation.</p>
    
    <div class="liturgy-parts">
      <div>
        <p><strong>The Introit:</strong> We enter into God's presence with Psalms, usually chanted by the Pastor, or sometimes the choir.</p>
        <p><strong>The Kyrie:</strong> "Lord, have mercy." We cry out to Christ.</p>
        <p><strong>The Gloria in Excelsis:</strong> The song of the angels at Christ's birth, celebrating God's favor toward man.</p>
      </div>
      <div>
        <p><strong>The Sanctus:</strong> "Holy, Holy, Holy." We join our voices with the angels and the whole company of heaven.</p>
        <p><strong>The Agnus Dei:</strong> "Lamb of God." We prepare to receive the Body and Blood of Him who takes away the sin of the world.</p>
        <p><strong>The Nunc Dimittis:</strong> "Lord, now lettest Thou Thy servant depart in peace," having seen and received our Salvation.</p>
      </div>
    </div>
  </div>

  <div class="info-block">
    <h2>The Order of the Divine Service: Setting Three</h2>
    <p>We primarily utilize <strong>Setting Three</strong> from the <em>Lutheran Service Book (LSB)</em>. Based on the historic "Common Service," which itself has its roots in the historic liturgy of the Western Church. It is a dialogue between God and His people, where He gives and we receive.</p>

  <h3 style="color: var(--color-light); font-size: 1rem; text-transform: uppercase; margin-top: 30px; border-bottom: 1px solid var(--border-dim);">I. Preparation</h3>
  <div class="liturgy-parts">
    <div>
      <p><strong>Confession & Absolution:</strong> We begin by kneeling to confess our sins. The Pastor, acting as a called & ordained servant in the stead and by the command of Christ, pronounces the forgiveness of all our sins.</p>
    </div>
    <div>
      <p><strong>The Introit:</strong> The "Entrance" Psalm. It sets the theological tone for the specific Sunday in the Church Year.</p>
    </div>
  </div>

  <h3 style="color: var(--color-light); font-size: 1rem; text-transform: uppercase; margin-top: 30px; border-bottom: 1px solid var(--border-dim);">II. Service of the Word</h3>
  <div class="liturgy-parts">
    <div>
      <p><strong>The Kyrie:</strong> "Lord, have mercy." The prayer of the beggar before the King, asking for help in all our needs.</p>
      <p><strong>The Gloria in Excelsis:</strong> The Great Gloria. We join the angels of Bethlehem in praising the Triune God.</p>
      <p><strong>The Salutation & Collect:</strong> "The Lord be with you." The Pastor and People greet one another before the specific "Prayer of the Day" (the Collect) is offered.</p>
      <p><strong>The Readings:</strong> Usually an Old Testament lesson, an Epistle, and the Holy Gospel. We stand for the Gospel as a sign of reverence for Christ's words.</p>
    </div>
    <div>
      <p><strong>The Alleluia & Verse:</strong> A short scriptural song of anticipation before the Gospel reading.</p>
      <p><strong>The Creed:</strong> Usually the Nicene Creed, where we confess the "one holy catholic and apostolic Church."</p>
      <p><strong>The Hymn of the Day:</strong> The chief hymn of the service that reinforces the Gospel message of the day.</p>
      <p><strong>The Sermon:</strong> The living voice of the Gospel, where the Law is applied to our hearts and the Gospel is delivered for our comfort.</p>
    </div>
  </div>

  <h3 style="color: var(--color-light); font-size: 1rem; text-transform: uppercase; margin-top: 30px; border-bottom: 1px solid var(--border-dim);">III. Service of the Sacrament</h3>
    <div class="liturgy-parts">
        <div>
        <p><strong>The Offertory:</strong> "Create in me a clean heart, O God." We prepare for the Holy Supper.</p>
        <p><strong>The Preface:</strong> The ancient dialogue ("Lift up your hearts") leading into the administration of the Eucharist.</p>
        <p><strong>The Sanctus:</strong> "Holy, Holy, Holy." We join the Seraphim and the palm-branch-waving crowds of Jerusalem ("Hosanna!").</p>
        <p><strong>The Lord's Prayer:</strong> The prayer Christ taught us, spoken or chanted before the elements are consecrated.</p>
        </div>
        <div>
        <p><strong>The Words of Institution:</strong> The Pastor speaks Christ's own words over the bread and wine. We believe these words do what they say: give us Christ's Body and Blood.</p>
        <p><strong>The Pax Domini:</strong> "The Peace of the Lord be with you always."</p>
        <p><strong>The Agnus Dei:</strong> "Lamb of God." We sing to Christ who is now truly present on the Altar.</p>
        <p><strong>The Distribution:</strong> The faithful come forward to the rail to eat and drink for the forgiveness of sins.</p>
        </div>
    </div>

    <h3 style="color: var(--gold); font-size: 1rem; text-transform: uppercase; margin-top: 30px; border-bottom: 1px solid var(--border-dim);">IV. Post-Communion & Dismissal</h3>
    <div class="liturgy-parts">
        <div>
        <p><strong>The Nunc Dimittis:</strong> The Song of Simeon. Like him, we have seen and tasted our Salvation, and can now "depart in peace."</p>
        </div>
        <div>
        <p><strong>The Benediction:</strong> The Aaronic Blessing. The Pastor places God's name upon the people as they go back into the world to serve their neighbor.</p>
        </div>
    </div>
  </div>

  <div style="border: 1px solid var(--accent-blue); padding: 20px; text-align: center; margin-bottom: 40px;">
    <span style="color: var(--accent-blue); text-transform: uppercase; font-weight: bold;">Midweek Advent & Lent</span>
    <p style="margin: 10px 0;"><strong>Wednesdays:</strong> Matins at 12:00 PM | Vespers at 7:00 PM</p>
  </div>

</div>