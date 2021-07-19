import React from 'react'
import Link from 'next/link'

type props = {
  img: string
  alt: string
  url: string
  name: string
  role: string
}

export const TeamMember = ({
  img,
  alt,
  url,
  name,
  role
}: props) =>
  <div className="col-md-3 col-sm-6 col-xs-12 mb-0 centered">
    <div className="team-member triggerAnimation animated" data-animate="fadeInUp" style={{ marginBottom: 20 }}>
      {
        process.env.NODE_ENV === "production" ? (
          <Link href={`${process.env.BACKEND_URL}${url}`}>
            <a>
              <img src={img} alt={alt} />
              <h2>
                {name}
              </h2>
              <span>{role}</span>
            </a>
          </Link>
        ) : (
          <Link href={url}>
            <a>
              <img src={img} alt={alt} />
              <h2>
                {name}
              </h2>
              <span>{role}</span>
            </a>
          </Link>
        )
      }
    </div>
  </div>