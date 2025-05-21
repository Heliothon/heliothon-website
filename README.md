# The Heliothon Website

This documentation is meant for those who are verified developers of the site. Check list of verified developers below. If you are interested in becoming a developer of this site, please contact [CONTACT TBD].

## Setup

This site requires that you have the following installed:

- `node` version `22.11.0`. This includes having `npm`, and `npx` installed.

**Note**: You may find it easier to develop this site on a Linux-based environment (Like Debian, Ubuntu, Fedora, etc), though it is not a requirement for developing this site.

### 1. Clone the repository onto your local environment

```
git clone <REPOSITORY_LINK>
```

I would recommend using the SSH link for an easier link between your GitHub account and when you commit your changes to the repository.

### 2. Access the local repository and run `npm install`

Ensure that all packages are installed.

You may notice that there are warnings after running the command, ignore them. You could try running `npm audit fix`, which would fix the ones that are nonessential, however avoid running `npm audit fix --force`.

If you believe that there are packages that should be upgraded and it doesn't affect the workflow of the project, please have your changes in a **new branch** and then create a PR.

### 3. Set up Supabase

Supabase is an alternative to Firebase that the Heliothon website uses. It's open-source, easy to use, and reliable.

First you need to obtain the **Public Supabase URL** and the **Public Supabase Anon Key**, which you can get from 

## Verified Developers

- Sami Elsayed (@selsayed25)