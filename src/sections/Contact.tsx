import React, { useContext } from 'react'
import Loader from 'react-loader-spinner'
import { CustomBackground, PageContent } from '../components'
import { AppContext } from '../contexts/app-cotext'
import { ContactSectionType } from '../interfaces'

export const ContactSection = () => {

  const { data } = useContext(AppContext)

  if (Object.keys(data.contactSection).length === 0) {
      return <div id="contact">
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

  const { title, info }: ContactSectionType = data.contactSection
  return (
    <div id="contact">
      <CustomBackground img={"bkg-img02"}/>
      <PageContent>
        <div className="col-md-12 mb-0">
            <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                <h2>{title ? title : ""}</h2>
            </div>
        </div>
        <div className="col-md-2 hidden-xs">
        </div>
        <div className="col-md-12 col-sm-12 centered">
            <h3>{info?.message}</h3>
            <ul className="default-list">
                <li>{info?.email}</li>
                <li><br /></li>
                <li>Manager di eventi: {info?.eventManager}</li>
                <li>telefono: {info?.phone}</li>
            </ul>
        </div>
        <div className="col-md-2 hidden-xs">
        </div>
      </PageContent>
    </div>
  )
}