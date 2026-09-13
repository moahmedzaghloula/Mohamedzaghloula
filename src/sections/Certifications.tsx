import { ArrowUpRight, Award } from 'lucide-react'
import awsBadge from '../assets/aws-cloud-practitioner.png'
import '../styles/certifications.css'
import SectionHeading from '../components/SectionHeading'

const AWS_CREDENTIAL_URL = 'https://www.credly.com/badges/13390ccd-4071-426b-a434-c23778489dc4'

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section py-20 md:py-28 border-b border-line" aria-label="Certifications">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading number="05" title="CERTIFICATIONS" subtitle="/ always learning" accent="yellow" />
        <div className="certifications-grid">
          <a className="certification certification-aws" href={AWS_CREDENTIAL_URL} target="_blank" rel="noopener noreferrer" aria-label="AWS Certified Cloud Practitioner, view credential on Credly (opens in a new tab)">
            <img className="certification-badge" src={awsBadge} alt="AWS Certified Cloud Practitioner foundational badge" width={600} height={600} loading="lazy" />
            <div className="certification-copy">
              <p className="certification-issuer">AMAZON WEB SERVICES</p>
              <h3>AWS Certified<br />Cloud Practitioner</h3>
              <p className="certification-provider">Amazon Web Services Training and Certification</p>
              <span className="certification-link">View credential <ArrowUpRight size={17} aria-hidden="true" /></span>
            </div>
          </a>
          <article className="certification certification-route">
            <div className="certification-emblem" aria-hidden="true"><Award size={68} strokeWidth={1.25} /></div>
            <div className="certification-copy">
              <p className="certification-issuer">ROUTE ACADEMY</p>
              <h3>DevOps Engineering<br />Professional Certificate</h3>
              <p className="certification-provider">Route Academy</p>
              <span className="certification-type">PROFESSIONAL CERTIFICATE</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
