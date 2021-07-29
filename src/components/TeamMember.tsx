import React from 'react'
import Link from 'next/link'
import { MemberType } from '../interfaces'

type props = {
  member: MemberType
}

export const TeamMember = ({
  member
}: props) => {
  const { alt, id, url, image, name, role } = member
  return (
    <div className="col-md-3 col-sm-6 col-xs-12 mb-0 centered">
      <div className="team-member triggerAnimation animated" data-animate="fadeInUp" style={{ marginBottom: 20 }}>

        <Link href={{
              pathname: '/[member-name]',
              query: {
                ['member-name']: `${url}-${id}`
              },
            }} passHref>
          <a>
            <img src={image} alt={alt} />
            <h2>
              {name}
            </h2>
            <span>{role}</span>
          </a>
        </Link>

      </div>
    </div>
    )
}