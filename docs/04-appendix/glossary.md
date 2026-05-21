---
title: "Glossary"
version: "1.0"
audience: "All Stakeholders"
last-updated: "2026-05-21"
status: "draft"
---

# Glossary — NWTR Documentation Suite

## TL;DR

This glossary defines all key terms, abbreviations, and domain-specific vocabulary used across the NWTR documentation suite. It covers platform-specific concepts, financial instruments, regulatory frameworks, technology architecture, real estate terminology, and user roles. Use this as a quick-reference companion while reading any NWTR document.

---

## 1. Platform Terms

| Term | Definition |
|------|-----------|
| **Deposit Ratio** | The percentage of a property's market value that a tenant deposits on the NWTR platform (typically 50–80%). A higher deposit ratio generates more yield and thus a higher monthly payout to the owner. |
| **Deposit Simulation** | An interactive calculator that lets prospective tenants model different deposit amounts, tenures, and properties to see estimated monthly equivalents and owner payouts before committing. |
| **Deposit Top-Up** | An optional facility allowing tenants to increase their deposited amount mid-tenure, resulting in a higher monthly payout to the owner and potentially improved lease terms. |
| **Early Exit** | Premature termination of a tenure before the lock-in period ends. Subject to an exit fee and a settlement process that returns the deposit minus penalties. |
| **Exit Fee** | A penalty charged when a tenant withdraws their deposit before the agreed lock-in period expires. Compensates the owner for disrupted income and the platform for unwinding investments. |
| **Guaranteed Yield** | The minimum annualised return promised to the owner, regardless of market fluctuations. Backed by NWTR's reserve fund and conservative instrument selection. |
| **Lock-in Period (Platform)** | The minimum tenure during which a tenant's deposit cannot be withdrawn without penalty. Protects yield stability for the owner and platform. |
| **Matching Engine** | The algorithmic system that pairs tenants with suitable properties based on deposit budget, location preference, tenure, and Trust Score. |
| **Monthly Payout** | The recurring payment made to the property owner, funded entirely from yield generated on the tenant's deposit—not from the tenant's pocket. |
| **NWTR** | "New Way To Rent." An Indian proptech-fintech platform where tenants deposit a lump sum (50–80% of property value) instead of paying monthly rent; yield on the deposit pays the owner. |
| **Onboarding Flow** | The end-to-end process of registering a new tenant or owner on the platform, including KYC, document verification, Trust Score generation, and agreement execution. |
| **Owner Dashboard** | The web/app interface where property owners view monthly payouts, yield performance, tenant details, and manage their listed properties. |
| **Payout Calendar** | A schedule showing the exact dates on which monthly payouts are disbursed to owners. Typically aligned with NACH processing windows. |
| **Platform Margin** | The spread retained by NWTR from the gross yield generated on tenant deposits, after the owner's monthly payout is disbursed. Expressed in basis points (bps). |
| **Property Listing** | A verified property profile on NWTR containing valuation, photos, documents, and owner details, visible to prospective tenants. |
| **Renewal** | The process by which a tenant extends their tenure at the end of the current term, potentially with an updated deposit amount reflecting revised property valuations. |
| **Reserve Fund** | A pool maintained by NWTR to cover yield shortfalls during adverse market conditions, ensuring uninterrupted owner payouts. |
| **Settlement** | The process of returning a tenant's deposit at tenure end or early exit, net of any applicable fees, pending dues, or damage deductions. |
| **Tenure** | The agreed duration (in months or years) for which a tenant's deposit remains invested and the rental arrangement is active. Standard tenures range from 11 months to 5 years. |
| **Trust Score** | A composite creditworthiness and reliability rating assigned to tenants and owners based on KYC verification, financial history, CIBIL score, and platform behaviour. |
| **Yield Engine** | The core financial module that allocates tenant deposits across instruments (FDs, T-Bills, G-Secs, corporate bonds) to maximise risk-adjusted returns within regulatory constraints. |
| **Yield Spread** | The difference between gross yield earned on invested deposits and the combined owner payout plus platform margin. Serves as a buffer for market fluctuations. |

---

## 2. Financial Terms

| Term | Full Form | Definition |
|------|-----------|-----------|
| **AUM** | Assets Under Management | Total market value of deposits and investments managed by NWTR's partner NBFC on behalf of tenants and the platform. |
| **Basis Points (bps)** | — | One-hundredth of a percentage point (0.01%). Used to express platform margin and yield differentials. |
| **CAGR** | Compound Annual Growth Rate | The mean annual growth rate of an investment over a specified period longer than one year. Used in yield reporting to owners. |
| **Corporate Bonds** | — | Debt securities issued by corporations. NWTR may allocate a portion of deposits to highly-rated (AA+ or above) corporate bonds for enhanced yield. |
| **Coupon Rate** | — | The annual interest rate paid on a bond's face value. Relevant when NWTR's portfolio includes government or corporate bonds. |
| **DICGC** | Deposit Insurance and Credit Guarantee Corporation | Insures bank deposits up to ₹5 lakh per depositor per bank. Relevant to FD-based yield strategies. |
| **Duration (Bond)** | — | A measure of a bond's sensitivity to interest rate changes. NWTR's yield engine manages portfolio duration to control risk. |
| **Escrow Account** | — | A third-party account that holds tenant deposits during the transition period before full investment deployment. Ensures fund safety. |
| **FD** | Fixed Deposit | A bank instrument where money is locked for a fixed tenure at a guaranteed interest rate. Core component of NWTR's yield engine. |
| **G-Sec** | Government Security | Long-term debt instruments issued by the Government of India, offering sovereign-grade safety. Used in NWTR's conservative allocation bucket. |
| **Gilt Fund** | — | A mutual fund that invests exclusively in government securities. May be used for liquidity management within the yield portfolio. |
| **Gross Yield** | — | The total annualised return earned on invested deposits before deducting platform margin, TDS, or any fees. |
| **Laddered FD** | — | A strategy of splitting a deposit across multiple FDs with staggered maturity dates, ensuring periodic liquidity while maintaining yield. |
| **Liquid Fund** | — | A mutual fund category investing in very short-term instruments (≤91 days). Used by NWTR for maintaining operational liquidity buffers. |
| **Mark-to-Market (MTM)** | — | The practice of valuing portfolio holdings at current market prices. Applied to G-Sec and bond positions in NWTR's yield portfolio. |
| **Maturity Date** | — | The date on which an FD, T-Bill, or bond is due for repayment. NWTR staggers maturities to align with payout schedules. |
| **NACH** | National Automated Clearing House | An RBI-mandated bulk payment system used for recurring debits/credits. NWTR uses NACH mandates for monthly owner payouts. |
| **NAV** | Net Asset Value | Per-unit value of a mutual fund scheme. Relevant when liquid/gilt funds are part of the yield portfolio. |
| **NBFC** | Non-Banking Financial Company | An RBI-registered financial institution that lends or invests but does not hold a banking licence. NWTR partners with an NBFC to manage and invest tenant deposits. |
| **NBFC-ND-SI** | NBFC – Non-Deposit-taking, Systemically Important | A category of NBFC with asset size ≥ ₹500 crore that does not accept public deposits. Subject to stricter RBI oversight. |
| **NEFT** | National Electronic Funds Transfer | A batch-based interbank transfer system operated by RBI. Used for non-urgent fund movements. |
| **Net Yield** | — | The annualised return after deducting platform margin and TDS. This is the effective rate that funds owner payouts. |
| **NPCI** | National Payments Corporation of India | The umbrella organization operating India's retail payment systems (UPI, NACH, IMPS). Facilitates NWTR's payment rails. |
| **Repo Rate** | — | The rate at which RBI lends to commercial banks. Influences FD rates and, consequently, NWTR yield. |
| **RTGS** | Real Time Gross Settlement | An instant high-value (≥ ₹2 lakh) fund transfer system. Used for deposit inflows and large payouts. |
| **SLR** | Statutory Liquidity Ratio | The percentage of net demand and time liabilities a bank must maintain in liquid assets. Indirectly impacts FD pricing. |
| **Sovereign Guarantee** | — | Implicit or explicit backing by the Government of India on instruments like G-Secs and T-Bills, making them virtually risk-free. |
| **T-Bill** | Treasury Bill | Short-term government debt instrument (91/182/364 days) issued at a discount. Core instrument in NWTR's short-duration yield bucket. |
| **Yield** | — | The return generated on invested capital, expressed as an annualised percentage. In NWTR's context, this is the gross return earned on tenant deposits before platform margin and owner payout. |
| **Yield Curve** | — | A graph plotting interest rates of bonds with equal credit quality but different maturity dates. Informs NWTR's allocation strategy across short and long-duration instruments. |

---

## 3. Regulatory & Compliance Terms

| Term | Full Form | Definition |
|------|-----------|-----------|
| **AA Framework** | Account Aggregator Framework | An RBI-regulated data-sharing ecosystem that allows users to consent-share financial data across institutions. NWTR uses AA for income and asset verification. |
| **AML** | Anti-Money Laundering | A set of laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income. |
| **Beneficial Owner** | — | The natural person who ultimately owns or controls a customer account. Must be identified under PMLA for all high-value deposits on NWTR. |
| **CFT** | Combating the Financing of Terrorism | Regulatory measures to prevent funds from being used to finance terrorist activities. Often paired with AML as "AML/CFT." |
| **CKYC** | Central KYC | A centralised repository (managed by CERSAI) storing KYC records of all financial-sector customers, enabling one-time verification. |
| **CIS** | Collective Investment Scheme | A SEBI-regulated pooling arrangement. NWTR's legal structure must demonstrably not constitute a CIS to avoid SEBI registration requirements. |
| **CTR** | Cash Transaction Report | A report filed with FIU-IND for cash transactions exceeding ₹10 lakh. Applicable if tenants deposit via cash (unlikely but covered in compliance flows). |
| **Digital Lending Guidelines** | — | RBI's 2022 framework governing digital lending practices, including disclosure norms, data privacy, and grievance redressal. NWTR's NBFC partner must comply. |
| **DPDP Act** | Digital Personal Data Protection Act, 2023 | India's primary data protection legislation governing collection, storage, and processing of personal data. NWTR must comply for all user data handling. |
| **EDD** | Enhanced Due Diligence | Additional verification steps required for high-risk customers (PEPs, HNIs, NRIs) beyond standard KYC. |
| **FATF** | Financial Action Task Force | An intergovernmental body setting global AML/CFT standards. India's compliance influences NWTR's AML obligations. |
| **FEMA** | Foreign Exchange Management Act | Governs cross-border fund flows and NRI investments in India. Relevant for NRI tenants depositing from foreign accounts. |
| **FIU-IND** | Financial Intelligence Unit – India | The national agency that receives, processes, and disseminates financial intelligence related to suspicious transactions. |
| **GST** | Goods and Services Tax | Indirect tax applicable to platform service fees. NWTR charges GST on its platform margin component. |
| **KYC** | Know Your Customer | Mandatory identity and address verification of customers as per RBI/SEBI norms. NWTR performs KYC for all tenants and owners. |
| **LSP** | Lending Service Provider | An entity providing services in the loan journey on behalf of an NBFC (e.g., customer acquisition, processing). NWTR may qualify as an LSP in certain flows. |
| **PAN** | Permanent Account Number | A 10-character alphanumeric tax identifier issued by the Income Tax Department. Mandatory for deposits exceeding ₹50,000 and for TDS compliance. |
| **PEP** | Politically Exposed Person | An individual holding a prominent public function, subject to enhanced due diligence under AML regulations. |
| **PMLA** | Prevention of Money Laundering Act, 2002 | India's primary anti-money-laundering legislation. Mandates record-keeping, reporting, and customer due diligence. |
| **RBI** | Reserve Bank of India | India's central banking institution and primary regulator for NBFCs, payment systems, and banking operations. |
| **RERA** | Real Estate (Regulation and Development) Act, 2016 | State-level legislation regulating real estate transactions, developer registrations, and tenant protections. Relevant to property verification on NWTR. |
| **SAR** | Suspicious Activity Report | A report filed with FIU-IND when transactions appear unusual or potentially linked to money laundering or terrorism financing. |
| **SEBI** | Securities and Exchange Board of India | Regulator for securities markets. Relevant to NWTR for CIS classification, mutual fund investments, and corporate bond allocations. |
| **STR** | Suspicious Transaction Report | Synonym for SAR in the Indian regulatory context; filed with FIU-IND under PMLA rules. |
| **TDS** | Tax Deducted at Source | Income tax deducted at the point of payment (e.g., on interest income). NWTR's NBFC partner deducts TDS on yield before payout. |

---

## 4. Technology Terms

| Term | Full Form | Definition |
|------|-----------|-----------|
| **API Gateway** | Application Programming Interface Gateway | A single entry point that routes, authenticates, and rate-limits all incoming API requests to NWTR's backend microservices. |
| **CDC** | Change Data Capture | A pattern for tracking changes in a database and propagating them to downstream systems in real time. Used for audit logs and analytics pipelines. |
| **CIBIL** | Credit Information Bureau (India) Limited | India's leading credit bureau providing credit scores and reports. Used in tenant Trust Score computation. |
| **CI/CD** | Continuous Integration / Continuous Deployment | Automated pipelines that build, test, and deploy code changes. Ensures rapid, reliable releases of platform updates. |
| **CRIF** | CRIF High Mark | A credit bureau offering credit scores and analytics. Used as a secondary credit-check source alongside CIBIL. |
| **DigiLocker** | — | A Government of India digital document storage platform. NWTR integrates with DigiLocker for verified document retrieval during KYC. |
| **eKYC** | Electronic KYC | Aadhaar-based instant identity verification using OTP or biometric authentication. Enables paperless onboarding on NWTR. |
| **eSign** | Electronic Signature | A legally valid digital signature (via Aadhaar eSign or DSC) used for executing lease agreements and deposit contracts on NWTR. |
| **Event-Driven Architecture** | — | A software design pattern where system components communicate via events (messages), enabling loose coupling and real-time reactivity. Core to NWTR's backend. |
| **HSM** | Hardware Security Module | A dedicated hardware device for secure key storage and cryptographic operations. Used to protect sensitive financial data and signing keys. |
| **Idempotency** | — | A property ensuring that repeated API calls with the same parameters produce the same result. Critical for payment processing to avoid duplicate transactions. |
| **ISR** | Incremental Static Regeneration | A Next.js rendering strategy that updates static pages after deployment without a full rebuild. Used for property listing pages. |
| **JWT** | JSON Web Token | A compact, signed token used for stateless authentication between NWTR's frontend and backend services. |
| **Microservices** | — | An architectural pattern where the application is composed of small, independently deployable services (e.g., deposit-service, yield-service, user-service). |
| **mTLS** | Mutual TLS | Two-way certificate-based authentication between services. Used for secure communication between NWTR and its NBFC partner APIs. |
| **RBAC** | Role-Based Access Control | A security model where system permissions are assigned based on user roles (Tenant, Owner, Admin, etc.) rather than individual identities. |
| **Service Bus** | — | A message broker enabling asynchronous communication between microservices (e.g., Azure Service Bus). Handles event distribution in NWTR's backend. |
| **SSR** | Server-Side Rendering | A rendering strategy where pages are generated on the server per request. Used for dynamic, personalised pages like dashboards. |
| **TLS** | Transport Layer Security | A cryptographic protocol providing end-to-end encryption for data in transit. All NWTR communications use TLS 1.3. |
| **UPI** | Unified Payments Interface | An instant real-time payment system developed by NPCI. May be used for small-value transactions or refunds on the platform. |
| **VKYC** | Video KYC | A real-time video-based identity verification process conducted by a trained agent. Used for high-value deposits or where eKYC is insufficient. |
| **Webhook** | — | An HTTP callback that delivers real-time event notifications (e.g., payment confirmation, KYC completion) from external systems to NWTR. |
| **Zero-Knowledge Proof (ZKP)** | — | A cryptographic method allowing one party to prove possession of information without revealing the information itself. Explored for privacy-preserving identity verification. |

---

## 5. Real Estate Terms

| Term | Full Form | Definition |
|------|-----------|-----------|
| **Carpet Area** | — | The net usable floor area within the walls of a property, excluding balconies, terraces, and common areas. Used for property valuation on NWTR. |
| **Circle Rate** | — | The minimum property valuation set by state governments for stamp duty calculation. Serves as a floor for NWTR's property valuation. |
| **Encumbrance Certificate (EC)** | — | A legal document proving a property is free from monetary and legal liabilities. Required during property verification on NWTR. |
| **Fair Market Value (FMV)** | — | The estimated price at which a property would sell in an arm's-length transaction. Basis for calculating the deposit ratio. |
| **Freehold Property** | — | A property where the owner has absolute ownership of both the building and the land, with no time limit. Preferred listing type on NWTR. |
| **Index II / Sale Deed** | — | A registered document recording the transfer of property ownership. Verified during owner onboarding. |
| **Khata Certificate** | — | A revenue document (used in Karnataka and some states) establishing property ownership for tax assessment purposes. |
| **Lease Agreement** | — | A legally binding contract between tenant and owner specifying tenure, deposit amount, obligations, and exit terms. Executed digitally on NWTR. |
| **Leasehold Property** | — | A property where ownership rights are granted for a fixed term (e.g., 99 years). Accepted on NWTR with additional documentation. |
| **Lock-in Period (Lease)** | — | A contractual period during which neither party can terminate the lease without penalty. Distinct from the platform's financial lock-in. |
| **Mutation** | — | The process of recording a change of property ownership in municipal/revenue records. Confirms the owner listed on NWTR is the legal title holder. |
| **Occupancy Certificate (OC)** | — | A certificate issued by a local authority confirming that a building complies with approved plans and is fit for habitation. |
| **Power of Attorney (POA)** | — | A legal document authorising one person to act on behalf of another. Required when a property is listed by someone other than the registered owner. |
| **Property Tax Receipt** | — | Annual receipt confirming payment of municipal property tax. Used as proof of ownership continuity during verification. |
| **Property Value (PV)** | — | The assessed market value of a property, determined through NWTR's valuation methodology combining online estimates, registered sale data, and optional physical appraisal. |
| **Rental Yield** | — | Annual rental income as a percentage of property value. In traditional renting, Indian metros average 2–4%. NWTR aims to deliver competitive or superior effective yields to owners. |
| **RERA Registration** | — | Mandatory registration of real estate projects/agents under the Real Estate (Regulation and Development) Act. Relevant for new-construction properties listed on NWTR. |
| **Stamp Duty** | — | A state government tax paid on the registration of property documents, including lease agreements. Applicable to NWTR lease registrations. |
| **Sub-Registrar Office (SRO)** | — | The government office responsible for registering property documents. Lease agreements above 11 months must be registered here. |
| **Super Built-Up Area** | — | Total area including carpet area, wall thickness, balconies, and proportionate share of common areas. Often used in marketing but not for NWTR valuations. |
| **Title Search** | — | A legal examination of public records to confirm a property's ownership history and identify any claims, liens, or encumbrances. Conducted during owner onboarding. |

---

## 6. User Role Terms

| Term | Full Form | Definition |
|------|-----------|-----------|
| **Admin** | — | An NWTR internal user with elevated permissions to manage platform operations, approve listings, handle escalations, and configure system settings. |
| **Compliance Officer** | — | A designated NWTR employee responsible for ensuring adherence to RBI, SEBI, and PMLA regulations, filing STRs/CTRs, and managing audit readiness. |
| **HNI** | High Net-Worth Individual | A tenant or investor with substantial financial assets (typically ₹5 crore+), often eligible for premium properties and customised deposit structures. |
| **NRI** | Non-Resident Indian | An Indian citizen residing outside India. NRIs can participate as tenants or owners on NWTR, subject to FEMA-compliant fund flows. |
| **Operations Team** | — | The internal team handling day-to-day platform operations including property verification, payout processing, dispute resolution, and owner/tenant support. |
| **Owner** | — | A property owner who lists their property on NWTR and receives monthly payouts generated from the tenant's deposited funds. |
| **Property Evaluator** | — | A qualified professional (internal or third-party) who conducts physical property inspections and valuations for high-value or disputed listings. |
| **Relationship Manager (RM)** | — | An NWTR representative assigned to high-value clients (HNIs, large portfolios) to provide personalised onboarding, property matching, and ongoing support. |
| **Super Admin** | — | The highest-privilege internal role with access to all platform configurations, compliance controls, audit logs, and NBFC integration settings. |
| **Tenant** | — | A platform user who deposits a lump sum (50–80% of property value) to reside in a property without paying traditional monthly rent. |
| **Verification Agent** | — | A field representative who conducts physical property inspections, tenant address verification, or in-person VKYC sessions on behalf of NWTR. |

---

## 7. Abbreviations — Quick Reference

| Abbreviation | Full Form |
|---|---|
| AA | Account Aggregator |
| AML | Anti-Money Laundering |
| API | Application Programming Interface |
| AUM | Assets Under Management |
| bps | Basis Points |
| CDC | Change Data Capture |
| CFT | Combating the Financing of Terrorism |
| CAGR | Compound Annual Growth Rate |
| CIBIL | Credit Information Bureau (India) Limited |
| CI/CD | Continuous Integration / Continuous Deployment |
| CIS | Collective Investment Scheme |
| CKYC | Central KYC |
| CRIF | CRIF High Mark |
| CTR | Cash Transaction Report |
| DICGC | Deposit Insurance and Credit Guarantee Corporation |
| DPDP | Digital Personal Data Protection |
| EC | Encumbrance Certificate |
| EDD | Enhanced Due Diligence |
| eKYC | Electronic KYC |
| FATF | Financial Action Task Force |
| FD | Fixed Deposit |
| FEMA | Foreign Exchange Management Act |
| FIU-IND | Financial Intelligence Unit – India |
| FMV | Fair Market Value |
| G-Sec | Government Security |
| GST | Goods and Services Tax |
| HNI | High Net-Worth Individual |
| HSM | Hardware Security Module |
| ISR | Incremental Static Regeneration |
| JWT | JSON Web Token |
| KYC | Know Your Customer |
| LSP | Lending Service Provider |
| MTM | Mark-to-Market |
| mTLS | Mutual TLS |
| NACH | National Automated Clearing House |
| NAV | Net Asset Value |
| NBFC | Non-Banking Financial Company |
| NBFC-ND-SI | NBFC – Non-Deposit-taking, Systemically Important |
| NEFT | National Electronic Funds Transfer |
| NPCI | National Payments Corporation of India |
| NRI | Non-Resident Indian |
| NWTR | New Way To Rent |
| OC | Occupancy Certificate |
| PAN | Permanent Account Number |
| PEP | Politically Exposed Person |
| PMLA | Prevention of Money Laundering Act |
| POA | Power of Attorney |
| PV | Property Value |
| RBAC | Role-Based Access Control |
| RBI | Reserve Bank of India |
| RERA | Real Estate (Regulation and Development) Act |
| RM | Relationship Manager |
| RTGS | Real Time Gross Settlement |
| SAR | Suspicious Activity Report |
| SEBI | Securities and Exchange Board of India |
| SLR | Statutory Liquidity Ratio |
| SRO | Sub-Registrar Office |
| SSR | Server-Side Rendering |
| STR | Suspicious Transaction Report |
| T-Bill | Treasury Bill |
| TDS | Tax Deducted at Source |
| TLS | Transport Layer Security |
| UPI | Unified Payments Interface |
| VKYC | Video KYC |

---

## Document Conventions

- Terms marked with **(Platform)** are NWTR-specific and may not have standard industry definitions.
- Regulatory definitions are simplified for accessibility; refer to the source legislation or regulator circulars for authoritative interpretations.
- Cross-references within the glossary are indicated by **bold** term names.
- This glossary is a living document—terms will be added as the platform evolves.

---

## Cross-Reference Index

The following groupings help readers find related terms across categories:

**Deposit Lifecycle:** Deposit Ratio → Deposit Simulation → Onboarding Flow → Lease Agreement → Tenure → Lock-in Period → Monthly Payout → Renewal → Early Exit → Settlement

**Yield Pipeline:** Yield Engine → FD / T-Bill / G-Sec / Corporate Bonds → Laddered FD → Gross Yield → Platform Margin → Net Yield → Monthly Payout → NACH

**Compliance Chain:** KYC → eKYC / VKYC → CKYC → Trust Score → AML → PEP / EDD → STR / SAR → FIU-IND → PMLA

**Property Verification:** Property Listing → Title Search → Encumbrance Certificate → Mutation → RERA Registration → Occupancy Certificate → Fair Market Value → Property Value

**User Journey (Tenant):** Deposit Simulation → Onboarding Flow → eKYC → Trust Score → Matching Engine → Lease Agreement → Deposit Top-Up → Owner Dashboard (view for owner) → Renewal / Early Exit

---

## Related Documents

| Document | Relevance |
|----------|-----------|
| `01-business/product-requirements.md` | Uses Platform Terms and Financial Terms extensively |
| `02-technical/system-architecture.md` | Uses Technology Terms and Platform Terms |
| `02-technical/api-specifications.md` | Uses Technology Terms and User Role Terms |
| `03-compliance/regulatory-framework.md` | Uses Regulatory & Compliance Terms throughout |
| `03-compliance/risk-assessment.md` | Uses Financial Terms and Regulatory Terms |
| `01-business/financial-model.md` | Uses Financial Terms and Platform Terms |

---

*End of Glossary*
