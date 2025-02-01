# Email Address Security

Over the last few years, I have received quite a few emails where I was not confident about the legitimacy of the sender. In addition to this concern, I often wondered if I was truly the only person using my email address.

In 2024, I came up with the idea for an app where users could input their email address and run a 'scan' on it. TThis scan would check whether the email's credentials had ever been leaked, if it had been involved in a data breach, and perform a few other checks. Ultimately, the app would determine if the supplied email address is valid and assess its reputation.

This app connects to an API [https://emailrep.io/] which answers the following questions:
### Is this email risky?
### What kind of online presence does this email have?
### Is the sender trustworthy?

## Parameters:
- email
- reputation
- suspicious
- references
- blacklisted
- malicious_activity
- malicious_activity_recent
- credentials_leaked
- credentials_leaked_recent
- data_breach
- first_seen
- last_seen
- domain_exists
- domain_reputation
- new_domain
- days_since_domain_creation
- suspicious_tld
- spam
- free_provider
- disposable
- deliverable
- accept_all
- valid_mx
- spoofable
- spf_strict
- dmarc_enforced
- profiles