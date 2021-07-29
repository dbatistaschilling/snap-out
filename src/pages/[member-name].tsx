import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {
  // CustomBackground,
  PageContent,
  PageTitle
} from '../components'
import { MemberPageType } from '../interfaces'
import api from '../services/api'

const MemberName = () => {

  const router = useRouter()
  const [member, setMember] = useState<MemberPageType | undefined>()
  useEffect(() => {
    fetchMember()
    console.log(member);

  }, [])

  const fetchMember = async () => {
    try {
      const id = router.query['member-name'].toString().split('-')[2]
      const { data } = await api.get(`members?id=${id}`)
      console.log(data);

      setMember(data[0])
    } catch(err) {
      console.log(err);
    }
  }

  if (!member) {
    return (
      <></>
    )
  }

  const { name, role, memberPage } = member

  return (
    <>
      <PageTitle
        title={name}
        subtitle={role}
        style={"02"}
        pageTitle={memberPage.pageTitlePicture}
      />
      <PageContent>
        <div className="col-md-2 hidden-xs hidden-sm">
        </div>
        <div className="col-md-8 centered">
            <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
                <h2>{memberPage.title}</h2>
            </div>
            {
              memberPage.text.map(p => (
                <p key={p.id}>{p.paraghraph}</p>
              ))
            }
        </div>
        <div className="col-md-2 hidden-xs hidden-sm">
        </div>
      </PageContent>
      {/* <CustomBackground img={"bkg-img11"} /> */}
      <PageContent>
        <div className="col-md-12 centered">
          <div className="custom-heading-01 triggerAnimation animated" data-animate="fadeInUp">
              <h2>{memberPage.socialsPhrase}</h2>
          </div>
        </div>
        <div className="col-md-12 centered">
          <ul className="social-links filled-circles">
            {
              memberPage.socials.map(social => (
                <li key={social.id}><a href={social.url} className="triggerAnimation animated" data-animate="fadeInUp"><i className={social.icon}></i></a></li>
              ))
            }
              {/* <li><a href="#" className="triggerAnimation animated" data-animate="fadeInUp"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#" className="triggerAnimation animated" data-animate="fadeInUp"><i className="fa fa-soundcloud"></i></a></li>
              <li><a href="#" className="triggerAnimation animated" data-animate="fadeInUp"><i className="fa fa-instagram"></i></a></li> */}
          </ul>
        </div>
      </PageContent>
    </>
  )
}

export default MemberName