# Reference-site audit and redesign decisions

Reference: https://www.asbestosbusters.ca/
Reviewed: 30 September 2026
Scope: a content, navigation and conversion review of the publicly retrieved homepage, services, contact and about pages. This is not a full technical SEO crawl, analytics review, measured performance benchmark or formal accessibility audit. Repeated content in extracted page markup may include responsive variants and is not proof that every visitor sees duplicate sections.

| Finding | Why it matters for this brief | Implemented response |
| --- | --- | --- |
| The homepage introduces asbestos services quickly and links to individual service information. | Visitors need to understand the offer before enquiring. | Preserve service discovery with six concise cards, detailed service sections and contextual enquiry links. |
| Repeated phone-led calls to action appear across the reference. | The requested journey is form-only. | Route every enquiry CTA to one Contact page; remove telephone links and numbers. |
| The homepage and services pages contain Vancouver/BC positioning and credential content. | These are not evidence for a new Alberta operation. | Rewrite the regional content; omit licence numbers, badges and certification claims. |
| Promotions, affiliation messaging and newsletter sign-up add competing actions. | They interrupt the main project-enquiry task. | Use one primary action, with service exploration as the secondary path. |
| Reviews, experience figures and completed-project counts are company-specific. | Reusing them would misrepresent the new business. | Replace inherited social proof with useful process information and clear project expectations. |
| The contact page requests a telephone number and includes several contact routes and map links. | The user requested no telephone numbers or addresses and one form. | Ask for email, broad Alberta region and project details only; no map, office address or public email contact link. |
| Retrieved image metadata includes generic descriptions and template-like labels. | More deliberate imagery and accessible descriptions strengthen the new design. | Generate two original property illustrations, with descriptive alt text and optimised local WebP assets. |
| The services overview repeats general benefits and credentials. | Concrete scope information helps a visitor choose the appropriate service. | Give each service its own purpose, planning points and enquiry shortcut. |
| FAQs are valuable, but some answers make broad project or regulatory claims. | Scope, timelines, occupancy and project requirements vary. | Rewrite FAQs with conditional, property-specific language and link to Alberta Health Services guidance. |
| The new site needs a straightforward deployment handoff. | A downloadable static site should not depend on a proprietary page builder. | Supply plain HTML, one shared stylesheet, vanilla JavaScript, local images, a Vercel configuration and setup instructions. |

## Design direction

Forest green, bright chartreuse accents and clean white surfaces create a property-focused identity. A full-width residential photograph establishes the context; large editorial headlines, bordered service cards and a simple numbered process make the site easy to scan. An interior photograph reinforces renovation planning without depicting unsafe material disturbance. The contact form has visible labels, generous spacing and a clear state after submission.

The reference’s broad service-business structure informs the new site. The branding, copy, photographs, layout and code are newly created. Training-agency claims and hazardous-waste transport credentials were not carried over. The proposed replacement menu includes planning and waste coordination, subject to the actual business scope.

## Sources

Reference pages:
- Homepage: https://www.asbestosbusters.ca/
- Services: https://www.asbestosbusters.ca/services
- Contact: https://www.asbestosbusters.ca/contact
- About: https://www.asbestosbusters.ca/about-us

Alberta factual reference for the short FAQ guidance:
- Alberta Health Services, Asbestos Information: https://www.albertahealthservices.ca/assets/wf/eph/wf-eh-asbestos-information.pdf

Deployment and form integration references:
- Vercel build configuration: https://vercel.com/docs/builds/configure-a-build
- Formspree AJAX forms: https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax
- Formspree honeypot field: https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering
