# RFQ form production setup

The website submits all RFQ forms to `POST /api/rfq`. The route validates fields and CAD/RFQ files, then sends the submission through Resend's server-side HTTPS API.

Required production environment variables:

- `RESEND_API_KEY`: server-only Resend API key.
- `RFQ_FROM_EMAIL`: a sender address on a domain verified in Resend, for example `Arktech Website <rfq@verified-domain.example>`.
- `RFQ_TO_EMAIL`: destination mailbox. The committed default is `engineering@arktechmold.com`.

Uploads are limited to six files, 10 MB per file, and 20 MB combined. Supported extensions are STEP, STP, IGES, IGS, STL, X_T, X_B, PDF, DWG, DXF, ZIP, RAR, and 7Z.

Before launch, configure the variables in the production hosting environment and submit one non-confidential smoke-test RFQ. Confirm that:

1. The browser shows the success message only after the provider accepts the email.
2. The message arrives at `engineering@arktechmold.com`.
3. Reply-To points to the submitter.
4. Test attachments arrive intact.
5. A rejected file type and an oversized file show an error and are not delivered.

Without `RESEND_API_KEY` and `RFQ_FROM_EMAIL`, the API returns HTTP 503 with a visible email fallback. It never reports a false success.
