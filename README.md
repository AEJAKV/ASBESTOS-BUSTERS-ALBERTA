# PrairieClear Environmental — Alberta website

A complete, editable HTML/CSS/vanilla JavaScript website. No framework, package installation or build step is required. The working brand name is **PrairieClear Environmental**; replace it with your chosen business name before launch.

## Open it locally

Unzip the package, open the `prairieclear-website` folder and double-click `index.html`. Navigation, images, menus and FAQs work locally. Test real form delivery on your HTTPS deployment.

Optional local web server, from this folder:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish with GitHub and Vercel

1. Create a GitHub repository.
2. Upload the **contents of `prairieclear-website`**, with `index.html`, `vercel.json` and the `assets` folder at the repository root. Do not upload only the ZIP.
3. In Vercel, add a new project and import that repository.
4. Set Framework Preset to **Other**. Leave Build Command empty. Use `.` as the Output Directory. No Install Command is needed.
5. Deploy. The included `vercel.json` supplies the static-project settings and basic response headers.
6. If you upload the enclosing folder instead, set Vercel’s Root Directory to `prairieclear-website`.
7. Visit Home, Services, Our approach, FAQs and Contact on the live URL. Future commits to the connected branch trigger new deployments.

Vercel documentation: https://vercel.com/docs/builds/configure-a-build

## Connect the contact form — required for enquiries

The form is implemented, but **no destination inbox has been connected**. Until you add your own endpoint, submission displays a truthful “not sent” message and retains the entered details. No contact details are sent anywhere while unconfigured.

1. Create a form in your own account at https://formspree.io/ and set the recipient inbox there.
2. Copy the supplied form endpoint (format: `https://formspree.io/f/your-form-id`).
3. Open `assets/js/config.js` and put that URL between the quotation marks for `formEndpoint`.
4. Commit the change and allow Vercel to redeploy.
5. Configure the provider’s domain restriction and spam protection for your deployed domain, according to your account’s settings. The site includes the provider’s `_gotcha` honeypot field and prevents repeated submissions while a request is in progress. Browser-side validation is not a substitute for provider-side validation or spam controls.
6. Send a test enquiry you author yourself from the live site and confirm it appears in both the form dashboard and your inbox. Form provider quotas and delivery settings apply.

The form uses name, email, service, Alberta region, property type, message and consent. It contains no telephone or street-address fields. It has required-field validation, a minimum message length, loading, timeout, failure and success states. Success appears only after the configured provider returns a successful response. A form ID is public; do not put API keys or other secrets in client-side JavaScript.

This is a static website. GitHub and Vercel hosting alone do not provide an email inbox or form processing. The Formspree connection is the only required external integration.

## Edit the website

- Copy and page content: edit the corresponding `.html` file.
- Business name: find and replace `PrairieClear` / `PrairieClear Environmental` in all HTML files, plus the form subject in `assets/js/main.js`.
- Colours: edit the custom properties at the top of `assets/css/styles.css`.
- Form destination: `assets/js/config.js`.
- Images: replace the WebP files in `assets/images`, keeping the filenames or updating the HTML references.
- Header and footer are repeated in the HTML so the website works without a build step or JavaScript templates. Update each page when changing navigation or branding.
- Once you choose your final domain, add canonical URLs and a domain-specific sitemap if desired. No domain has been invented in this package.

## Pages

- `index.html` — home, six service summaries, process, Alberta regions and FAQs
- `services.html` — six detailed service sections with service-specific enquiry links
- `about.html` — approach and project principles
- `faq.html` — nine FAQs and a public Alberta Health Services source
- `contact.html` — the only enquiry form on the site
- `privacy.html` — form data and provider disclosure
- `404.html` — custom not-found page for Vercel

## Editorial assumptions to confirm

The brand name is a working name, not a confirmed registered business name. The service menu and approach copy are proposed for your business; confirm the services you actually offer and the Alberta areas you can serve before launch. No customer reviews, project counts, years of experience, licensing, certification, affiliations, financing offers, street addresses, telephone numbers or public business email addresses have been invented or transferred from the reference company. “Email” is used only as an enquiry field, not a displayed contact address.

Both property images were generated for this design. They are illustrative, not photos of your team, premises or completed projects. They have descriptive illustrative alt text. No source-site photography, logo, source code or reviews are included. The layout and writing are original.

Review the short privacy notice against your actual business data practices and chosen form-provider configuration before launch. The site itself has no advertising trackers, analytics scripts, external font downloads or browser storage of form entries.

## Reference audit and checks

Read `AUDIT.md` for the reference-site findings, redesign decisions, research scope and sources. Read `QA.md` for the checks performed and the remaining real-delivery step.
