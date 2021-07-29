import React, { useContext } from 'react';
import Loader from "react-loader-spinner";
import {
  PageContent
} from '../components';
import { AppContext } from '../contexts/app-cotext';

export const AboutSection = () => {

  const { data } = useContext(AppContext)

  if (Object.keys(data.aboutSection).length === 0) {
      return <div id="aboutSnapOut">
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <PageContent>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Loader
                          type="Puff"
                          color="#e21f2f"
                          height={80}
                          width={80}
                      />
                      </div>
                  </PageContent>
              </div>
  }

  return (
    <div id="aboutSnapOut">
      <br/>
      <br/>
      <br/>
      <br/>
      <PageContent>
        <div className="col-md-2 hidden-xs hidden-sm">
        </div>
        <div className="col-md-8 centered">
          <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
              <h2>{data.aboutSection.title}</h2>
          </div>
          {
            data.aboutSection.paragraphs?.map(p => (
              <p key={p.id}>
                {
                  p.text
                }
              </p>
            ))
          }
          {/* <p>Il nome della Band dopo la pandemia, indica la rinascita dopo un momento oscuro. Sono un gruppo rock indie italiano, hanno tra i 14 ed i 18 anni, si sono conosciuti  alle elementari e da allora suonano insieme. Studiano musica da 7 anni e nonostante la loro giovanissima età posseggono tecnica e competenze musicali di veri musicisti professionisti.</p>
          <p>Nella loro carriera il gruppo ha vinto sia premi della critica che primi premi in concorsi nazionali su tematiche sociali suonando su palchi importanti come Palatlantico Live.  Nella loro giovane carriera hanno già consolidato più di 100 esibizioni in locali importanti della realtà laziale ed italiana suonando davanti a pubblici di migliaia di persone.</p>
          <p>Gli Snap – Out sono sensibili ai problemi sociali, all’integrazione, alla inclusione ed a tutte le cause delle persone fragili, uno dei problemi che per loro è prioritario è quello di decidere di vivere in un mondo migliore, non distrutto dall’inquinamento e dalle opere umane.</p>
          <p>Il gruppo è la testimonianza di una inclusione riuscita avendo tra i suoi membri un ragazzo Asperger. Tra i loro idoli,  Matthew Bellamy, Thom Yorke, Flea, John Frusciante, Greta Thunberg.</p> */}
        </div>
        <div className="col-md-2 hidden-xs hidden-sm">
        </div>
      </PageContent>
    </div>
  )
}