# Chattr - Real-Time Discussion Forum Chat Application

Chattr is a real-time chat application that allows users to create profiles, join topic-specific forums, and engage in private or public discussions. It supports simultaneous participation in multiple groups, offering a dynamic and interactive user experience. This project was built as a learning exercise to explore APIs and web development technologies, serving as a stepping stone for future projects.

This project is built using React 19; however, the APIs utilized, including the Stream and Clerk APIs, currently support only React 18. As a result, deployment of the project on platforms like Vercel is not possible until updated versions of these APIs are released with support for React 19.
For now, to deploy or run the project successfully, consider downgrading to React 18.

## Features

- **User Authentication**: Secure registration and login functionality powered by Clerk API.
- **Real-Time Chat**: Forums and chat windows are managed using the Stream API for seamless communication.
- **Responsive Design**: Tailwind CSS ensures a visually appealing and responsive user interface.
- **Local-to-Public URL Tunneling**: NGROK is used to tunnel the local server to a public URL for webhook functionality during development.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Framework**: Next.js (for server-side rendering)
- **Styling**: Tailwind CSS
- **Authentication**: Clerk API
- **Chat Functionality**: Stream API
- **Development Tool**: NGROK (for webhook tunneling)

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chattr
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add your Clerk API keys and Stream API credentials as required by the application.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Set up NGROK for webhook tunneling:
   - Install NGROK from [NGROK's official website](https://ngrok.com/).
   - Run NGROK to create a public URL for your local server:
     ```bash
     ngrok http 3000
     ```
   - Update your Clerk webhook settings with the NGROK-generated URL.

## Limitations

- The application is not hosted on an online domain. As such, the Clerk webhook only works when NGROK is running on the developer's local machine.
- If you attempt to run the code without proper NGROK setup or without my device being active, the webhook functionality may not work as expected. Apologies for any inconvenience caused.
- This project is intended as a learning exercise and may not be perfect, but it demonstrates core functionalities effectively.

## Future Improvements

This project serves as a foundation for more advanced applications I plan to develop in the future. Potential enhancements include:

- Hosting the application on a live domain for easier access.
- Adding more robust error handling and testing.
- Expanding features like file sharing, notifications, and enhanced user profiles.

## Acknowledgments

This project was built to explore web development concepts and APIs. Special thanks to the creators of Clerk API, Stream API, Tailwind CSS, React, Next.js, and NGROK for providing excellent tools that made this project possible.

---

Feel free to reach out with any feedback or suggestions!
