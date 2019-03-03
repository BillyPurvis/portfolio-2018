
import React from 'react'
import ProjectGrid from '../project-grid'
import ProjectHeader from '../header'


const ProjectBoomerang = () => (
    <div>
        <ProjectHeader title="Andersen EV" roleTitle="Lead Software Developer" />
        <p>
            Andersen EV Electric Vehicle charging company developing new charging units with modern sleek designs.
        </p>
        <p>
            At Andersen, I work closely with the founders to build on top of the current e-commerce site, whilst developing the new platform based on Next.JS and a Go API.
            Together, we decided to opt for a new modern approach, using Next.JS as our Front End and backed up by a Go API that acted as our gateway to other services we used, such as:
            Azure B2C, WordPress as our Blog editor, Moltin cloud e-commerce, Xero Accounting and our RDS instances. I opted to use this method as we also support
            multiple other apps and they were currently split into multiple APIs which created a lot of data duplication and no single source of truth. As well as a lot more dev time
            duplicating features and supporting multiple different languages. Go also had the ability to integrate with our C firmware using CGO package, scale quickly, a simple binary deployment
            and strong type system to reduce type issues and enforce strong coding practices.
        </p>
        <p>Although, the costs in this set up were quite extreme, and as for any start up, this wasn't ideal. We still liked the modern approach and high scalability.
            After sometime working on this new set up we ran into quite a few issues with it; it lacked flexibility of page edits that our WordPress site previously had, Go wasn't cheap to develop as any developer with the
            skills came with a hefty price tag, Next.JS still felt
            quite infantile and React's ecosystem just didn't have much support for SSR in it's packages. Switching from WooCommerce to a dedicated cloud e-commerce provider proved very expensive too.
            We also fell into handling 5 Docker containers just to run the app, which became quite a headache and DevOps mission - detracting time from the essential business focus that was a new site.
        </p>

        <p>Whilst we loved Go and React, we opted to moved back to WordPress, but building an entirely custom theme and using a little plugins as we required as not to fall into the WordPress trap
            of plugin hell. This gave us back the flexibility for non-developers to add new pages without having to essentially built a CMS in our Go API. We saw greater dev speeds using WordPress and were able
            to replicate a lot of the React code quite quickly (thank lord we could manually export static HTML from Next!). Whilst we still continue to use Go in other areas, it just didn't fit
            right now with the scale we're at and hence we're back to WordPress for our e-commerce site.
        </p>
        <p>The project really helped us as a team and business figure out the correct direction and where we had issues in customer journeys. For me as a developer in my first lead position, I learnt how I could have
            asked better questions originally opted for the less complex and viable solution originally and reinforcing that 'simplicity beats complexity'.
        </p>
        <ProjectGrid />
    </div>
)

export default ProjectBoomerang