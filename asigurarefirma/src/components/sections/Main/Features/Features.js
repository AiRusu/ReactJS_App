import React from 'react';
import Feature from '../../Main/Features/Feature'

import '../../../../App.css';

const features = (props) => (
    <section className="section-features" id="section-features">
        <div className="row">

            <Feature className = "feature-box__icon icon-basic-world" 
                     feature = "Folosește asigurarea oriunde în lume">
                     <p>Asigurându-te la noi, vei putea să te bucuri oriunde în lume de servicille incluse în pachetul ales.
                     Trebuie doar să incluzi această opțiune în pachetul pe care îl preferi. </p>
            </Feature>

            <Feature className = "feature-box__icon icon-basic-compass"
                     feature = "Fă cunoștință cu medicii noștri">
                     <p>Avem contract cu rețele diverse de clinici și spitale însă în cazul în care ai alte preferințe nu e nicio problemă,
                     noi îți rambursăm suma plătită pentru serviciile pe care le-ai accesat. </p>
            </Feature>

            <Feature className = "feature-box__icon icon-basic-map"
                     feature = "Găsește cea mai apropiată clinică">
                     <p>Cu ajutorul hărții puse la dispoziție pe site-ul și în aplicația noastră putem identifica cea mai apropiată clinică
                     care îți poate pune la dispoziție serviciile de care ai nevoie. </p>
            </Feature>

            <Feature className = "feature-box__icon icon-basic-heart"
                     feature = "Trăiește o viață sănătoasă">
                     <p>Îți acoperim atât costurile necesare serviciilor de intervenție medicală, cât și cele necesare prevenției.
                     Pentru că prevenția este cea mai bună formă de intervenție. </p>
            </Feature>
        </div>  
    </section>
);
export default features;