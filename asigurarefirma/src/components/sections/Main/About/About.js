import React from 'react';
import Text from '../About/Text';
import Composition from '../About/Composition';
import AboutUsOne from '../../../../assets/images/poza1-big.jpg';
import AboutUsTwo from '../../../../assets/images/poza2-big.jpg';
import AboutUsThree from '../../../../assets/images/poza3-big.jpg';

import '../../../../App.css';


const about = (props) => (
    <section className="section-about" id="section-about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Asigurare pentru tine și pentru familia ta
            </h2>
        </div>

        <div className="row">
            <div className = "col-1-of-2">  
                <Text titlu = "Asigurarea ta de sănătate poate fi accesată online"
                      paragraf = "Te poți informa și poți plăti online asigurarea medicală oricând vrei și de oriunde ai fi."
                      titlu2 = "Asigurarea ta de sănătate poate fi accesată din aplicația noastră"
                      link = "#section-features"> {/* de modificat --- link-ul il pun in main */}
                      
                      <p>Știm că îți dorești să găsești toate informațiile într-un singur loc. Și noi ne dorim același lucru.
                        Pentru aceasta, am pregtit o aplicație care conține toate informațiile de care ai nevoie:
                        programările tale, lista de clinici, statusul ramburărilor tale și documentele de care ai nevoie </p>
                </Text> 
            </div>
 
            <div className="col-1-of-2">
                <div className="composition">

                    <Composition srcset = "assets/images/poza1-small.jpg 300w, assets/images/poza1-big.jpg 1000w"
                                 src = {AboutUsOne} />
                    <Composition srcset = "assets/images/poza2-small.jpg 300w, assets/images/poza2-big.jpg 1000w"
                                 src = {AboutUsTwo} />
                    <Composition srcset = "assets/images/poza3-small.jpg 300w, assets/images/poza3-big.jpg 1000w"
                                 src = {AboutUsThree} />
                 
                    <img src={AboutUsOne} alt="phone" className="composition__photo composition__photo--p1"></img>
                    <img src={AboutUsTwo} alt="computer" className="composition__photo composition__photo--p2"></img>
                    <img src={AboutUsThree} alt="calling" className="composition__photo composition__photo--p3"></img>

                </div>
            </div>
        </div>
    </section>
);
export default about;