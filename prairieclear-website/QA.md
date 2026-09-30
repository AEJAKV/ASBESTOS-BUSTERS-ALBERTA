# Verification record

Date: 30 September 2026

## Passed

- JavaScript syntax check.
- All local page links, section anchors, stylesheet/script references and image paths resolve.
- Seven pages checked in Chromium at 1440px desktop and 390px mobile widths: no horizontal page overflow.
- Home and Contact additionally checked at 320px width; a mobile header spacing issue was corrected and rechecked.
- Homepage text enlarged to 200%; the hero was changed to grow with its content and rechecked for overlap and horizontal overflow.
- One main heading per page; unique page titles and descriptions.
- All checked images loaded; no browser JavaScript errors.
- No telephone links or telephone fields. Exactly one enquiry form, on Contact.
- Mobile navigation opens, closes and responds to Escape.
- FAQ accordion opens using its native details/summary control.
- Service-specific links preselect the corresponding contact-form option.
- Unconfigured form explicitly reports that the enquiry has not been sent.
- Mocked provider error displays an error and retains form data.
- Mocked successful provider response displays confirmation and resets the form.
- Desktop Home, mobile Home and desktop Contact screenshots visually reviewed.
- A missing space between mobile FAQ heading lines was corrected by preserving the line break.

## Limits and launch step

No real contact enquiry was sent. A destination inbox was not provided, so end-to-end email delivery must be tested after the owner connects Formspree. Submission tests intercepted the request locally and did not transmit test details to a third party.

The downloadable site has not been published to GitHub or Vercel; the user requested files to deploy themselves. Desktop and mobile checks used Chromium with local HTML files. The final Vercel deployment, provider account settings, custom domain, email delivery and other browser engines remain to be checked in the target environment.

This is not a Lighthouse score, formal WCAG certification, full security audit or legal review. Focus indicators, labels, native disclosure controls, reduced-motion support and a skip link are included.
