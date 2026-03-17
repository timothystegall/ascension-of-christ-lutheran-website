---
title: 
permalink: /church/
---

<style>
    .church {
        margin: 0px;
        padding: 0px;
    }

    .church-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
    }

    /* Container for the three images */
    .image-triptych {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px; /* Spacing between the photos */
        width: 100%;
        max-width: 1300px;
        margin: 30px 0;
    }

    .church-image {
        flex: 1 1 0; /* Grow, Shrink, and initial Basis of 0 */
        min-width: 0; /* Critical for Firefox flexbox bugs with images */
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        border-radius: 8px;
        filter: brightness(0.85);
        border: 2px solid #C5A059;
        transition: transform 0.3s ease;
    }

    .church-image:hover {
        transform: scale(1.02);
        filter: brightness(1);
    }

    /* Stack them vertically on small screens */
    @media (max-width: 768px) {
        .image-triptych {
            flex-direction: column;
            align-items: center;
        }
        .church-image {
            width: 90%;
            aspect-ratio: 16 / 9;
        }
    }

    .confession-callout {
        color: white !important;
        max-width: 850px;
        /*margin: 50px auto;*/
        padding: 40px;
        background-color: rgba(197, 160, 89, 0.05); /* Very faint gold tint */
        border-left: 4px solid #C5A059;
        font-family: serif;
    }

    .confession-callout blockquote {
        font-size: 1.2rem;
        margin: 0;
    }

    .confession-callout cite {
        display: block;
        margin-top: 15px;
        color: #C5A059;
        font-weight: bold;
        font-style: normal;
    }

    .what-we-believe {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 50%;
        max-width: 1300px;
    }
</style>

<div class="church">
    <div class="church-content">
        <div>
            <h2>About Our Church</h2>
        </div>
        <div style="margin-top: 15px">
            <h3>Confessional. Liturgical. Sacramental. Biblical.</h3>
        </div>

        <div class="image-triptych">
            <img src="/assets/images/nave.jpg" alt="The Nave" class="church-image">
            <img src="/assets/images/church-outside.jpg" alt="The Church" class="church-image">
            <img src="/assets/images/crucifix.jpg" alt="The Crucifix" class="church-image">
            <img src="/assets/images/organ.jpg" alt="The Baptismal Font" class="church-image">
        </div>

        <a href="https://bookofconcord.cph.org/" target="_blank" style="color: white; text-decoration: none;">
            <div class="confession-callout">
                <blockquote>
                    "Our churches teach that people cannot be justified before God by their own strength, merits, or works. People are freely justified for Christ’s sake, through faith, when they believe that they are received into favor and that their sins are forgiven for Christ’s sake. By His death, Christ made satisfaction for our sins. God counts this faith for righteousness in His sight (Romans 3 and 4)."
                </blockquote>
                <cite>— Augsburg Confession, Article IV</cite>
            </div>
        </a>

        <div class="what-we-believe">
            <div style="text-align: left; padding-top: 25px;">
                <h3>What We Believe, Teach, and Confess:</h3>
                <ul>
                    <li>That there is one God in three persons: The Father, the Son, and the Holy Spirit.</li>
                    <li>That every person is conceived and born in sin (original sin), and deserves temporal death and everlasting damnation for both original and actual sin.</li>
                    <li>That Jesus Christ is the incarnate Son of God, born of the Virgin Mary, was truly crucified, died and was buried, and rose again in His body on the third day. He ascended into heaven, and will come again on the last day to be our judge.</li>
                    <li>That a person is saved (justified) entirely by God's grace, through faith, which is created by the Holy Spirit where and when He pleases.</li>
                    <li>To obtain this faith, God instituted the Office of the Holy Ministry (preaching office). Through the means of the Word and the Sacraments the Holy Spirit creates saving faith.</li>
                    <li>Believers must do good works, but they are not to trust in them for their salvation.</li>
                    <li>There is one, holy, catholic (Christian) Church, with Jesus Christ as her Head.</li>
                    <li>The Sacraments of Holy Baptism, Holy Absolution, and the Holy Eucharist are to be retained in the Church.</li>
                    <li>The canonical books of the Old and New Testaments are the true, inspired, inerrant Word of God.</li>
                    <li>That the Unaltered Augsburg Confession of 1530 (of which the above items are a summary of the first thirteen articles) is a true and faithful exposition of Holy Scripture.</li>
                    <li>The rest of the 1580 Book of Concord is, like the Augsburg Confession, a true and faithful exposition of Holy Scripture, and we subscribe unreservedly to it.</li>
                    <li>For a simple understanding of our doctrine, we invite you to read the <a href="https://catechism.cph.org/" target="_blank">Small Catechism</a> or to read about what congregations of The Lutheran Church—Missouri Synod (LCMS) <a href="https://www.lcms.org/about/beliefs" target="_blank">believe and practice</a>.</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</div>