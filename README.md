![Scam Protect - Live AI Support](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/077/442/datas/gallery.jpg)
![Scam Protect - Voting Site](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/077/278/datas/gallery.jpg)
![Scam Protect - Add Website](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/077/281/datas/original.png)
![Scam Protect - Education Center](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/077/274/datas/original.png)

# Scam Protect Voting Frontend

### [Dev Post](https://devpost.com/software/scam-protect?ref_content=my-projects-tab&ref_feature=my_projects)

### Functionality

The Scam Protect Voting Frontend offers several essential features designed to help users stay protected from scams:

- **Education Center**: Learn about different types of scams, how they operate, and how to avoid becoming a victim.
- **Website Voting Section**: Add and vote on potentially scammy websites. This feature allows the community to identify suspicious sites and bring them to others' attention.
- **AI Scam Recognition**: The site is powered by an AI model fine-tuned on scammy messages to help recognize scams, alerting users when they may be interacting with suspicious content.

### How to Use:

1. **Download Required Repositories**:

   - Clone, fork, or download the backend repository: [Scam Protect Backend](https://github.com/UmarRS/scam_prot_backend)
   - Clone, fork, or download the extension repository: [Scam Protect Extension](https://github.com/UmarRS/scam_prot)

   Refer to their respective repositories for further instructions on setup.

2. **Install Dependencies**:

   - Run `npm install` to install the necessary packages.

3. **Add Environment Variables**:

   - Create a `.env` file in the root directory of the project.
   - Add the following keys to the `.env` file:
     ```
     GEMINI_API_KEY=YOUR API KEY
     MONGODB_URI=YOUR MONGODB URI
     ```
   - The collections in the database will auto-populate; however, you need to manually create and add the `keys` database.

4. **Start the Server**:
   - Run the development server with the command: `npm run dev`.

---

### Built With

- Express.js
- Gemini API
- Google Cloud
- JavaScript
- MongoDB
- Node.js
