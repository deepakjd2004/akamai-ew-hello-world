# 🚀 Akamai EdgeWorker CI/CD via GitHub Actions

This repository uses GitHub Actions to automate the deployment of Akamai EdgeWorker code.

---

## 📦 Features

- Automatically packages and uploads EdgeWorker code on every push to `main`
- Uses Git commit ID to version your EdgeWorker
- Activates on **Staging** and **Production** automatically
- Blocks deployment when only `README.md` is updated

---

## 🧩 Structure
├── main.js # EdgeWorker code 
├── ew.json # EdgeWorker metadata (ID and version placeholder) 
├── bundle.json # Bundle metadata for packaging 
├── .github/ │ 
             └── workflows/ │ 
                            └── deploy.yml # GitHub Actions workflow

---

## 🔐 GitHub Secrets Required

Add the following secrets to your GitHub repository:

| Name                   | Description                                     |
|------------------------|-------------------------------------------------|
| `AKAMAI_CLIENT_TOKEN`  | Akamai API client token                         |
| `AKAMAI_CLIENT_SECRET` | Akamai API client secret                        |
| `AKAMAI_ACCESS_TOKEN`  | Akamai API access token                         |
| `AKAMAI_HOST`          | e.g. `https://akab-XXXX.luna.akamaiapis.net`    |
| `ASK`                  | Switch key (only for Akamai employee or partner)|

---

## ⚙️ Workflow Logic

### Triggered On:
- Commits to `main` *(excluding README.md changes)*
- Pull requests targeting `main`
- Manual dispatch via GitHub UI

### Workflow Steps:
1. Setup Node.js and Go environments
2. Set EdgeWorker version using commit SHA
3. Update `bundle.json` and `ew.json`
4. Install Akamai CLI + EdgeWorkers CLI
5. Configure Akamai credentials/edgerc from secrets
6. Package `main.js` + `bundle.json` into tarball
7. Upload EdgeWorker bundle
8. Activate on **Staging**
9. Wait for activation to complete
10. Activate on **Production**

---

